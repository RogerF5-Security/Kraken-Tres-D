function reply(payload, status) {
  // Only public model metadata is returned; wildcard CORS also supports local previews.
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'Access-Control-Allow-Origin': '*' };
  return new Response(JSON.stringify(payload), { status, headers });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method !== 'GET' || !/^\/model\/\d{1,10}$/.test(url.pathname)) {
      return reply({ error: 'Ruta no válida.' }, 404);
    }
    // The upstream URL is fixed; client input can only supply the numeric model ID.
    const id = url.pathname.split('/')[2];
    let upstream;
    try {
      upstream = await fetch(`https://api.bambulab.com/v1/design-service/design/${id}`, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(10000),
        cf: { cacheTtl: 300, cacheEverything: true },
      });
    } catch {
      return reply({ error: 'MakerWorld no respondió. Intenta de nuevo en unos minutos.' }, 502);
    }
    if (upstream.status === 404) return reply({ error: 'No encontramos ese modelo en MakerWorld.' }, 404);
    if (!upstream.ok) return reply({ error: 'MakerWorld no está disponible en este momento.' }, 502);
    const length = Number(upstream.headers.get('content-length') || 0);
    if (length > 2_000_000) return reply({ error: 'El modelo contiene demasiados datos.' }, 502);
    let design;
    try {
      design = await upstream.json();
    } catch {
      return reply({ error: 'MakerWorld devolvió datos incompletos.' }, 502);
    }
    const profiles = Array.isArray(design.instances) ? design.instances
      .filter(profile => Number.isSafeInteger(profile.id) && Number(profile.prediction) > 0 && Number(profile.weight) > 0)
      .map(profile => ({
        id: profile.id,
        title: String(profile.title || 'Perfil de impresión').slice(0, 180),
        seconds: Number(profile.prediction),
        grams: Number(profile.weight),
        isDefault: profile.isDefault === true,
        needAms: profile.needAms === true,
      })) : [];
    if (!profiles.length) return reply({ error: 'El modelo no tiene perfiles con tiempo y peso disponibles.' }, 422);
    return reply({
      id: Number(id),
      title: String(design.title || 'Modelo de MakerWorld').slice(0, 200),
      license: String(design.license || 'No especificada').slice(0, 120),
      profiles,
    }, 200);
  },
};
