# Kraken Tres D

**Impresion 3D, llaveros, regalos, gadgets, souvenirs y tendencias virales para Guatemala.**

Kraken Tres D lleva tus ideas al siguiente nivel con piezas impresas en 3D, productos personalizados, impresion multicolor, variedad de filamentos y articulos novedosos para regalar, usar o compartir.

## Sitio web

La pagina esta lista para GitHub Pages:

- Archivo principal: `index.html`
- Pagina de inspiracion y catalogos: `inspiracion.html`
- Cotizador orientativo para clientes: `cotizador.html`
- Historia de marca: `historia.html`
- Assets visuales: `assets/img/`
- Logo principal: `assets/img/logo_ktd.webp`
- Boton principal de venta: WhatsApp

Cuando GitHub Pages este activo, la web quedara publicada en:

```text
https://rogerf5-security.github.io/Kraken-Tres-D/
```

## Que puedes pedir

- **Tendencias 3D virales:** dragones articulados, macetas criatura, modelos unicos y decoracion llamativa.
- **Llaveros y souvenirs:** detalles personalizados para eventos, regalos, marcas o recuerdos.
- **Regalos personalizados:** nombres, figuras, piezas multicolor y detalles especiales.
- **Gadgets y accesorios:** organizadores, articulos utiles, novedades y productos para el dia a dia.
- **Ideas a medida:** cuentanos que necesitas y coordinamos medidas, material, color, cantidad y entrega.

## Cotizador por enlace de MakerWorld

El cotizador puede leer los perfiles publicados de un modelo de MakerWorld y seleccionar el `profileId` del enlace. Muestra el tiempo y peso de **una impresión del perfil completo**; si el perfil contiene varias piezas o placas, una repetición incluye todas ellas. El cálculo manual sigue disponible.

La consulta en vivo usa `makerworld-worker/`, un servicio separado porque GitHub Pages no puede leer directamente la API de Bambu Lab por CORS. Después de desplegar el Worker, coloca su URL pública en `MODEL_API` dentro de `cotizador.html` y publica el sitio. El Worker solo acepta identificadores numéricos y devuelve título, licencia y datos de impresión; no descarga archivos del modelo.

Los perfiles son estimaciones del autor y pueden diferir de la impresora, material o ajustes finales. Para modelos con licencia no comercial, la página avisa que se debe confirmar permiso comercial antes de aceptar el pedido.

## Inspiracion 3D

La pagina `inspiracion.html` ayuda a clientes que preguntan "que puedes imprimir?".
Incluye enlaces a MakerWorld, Printables, Thingiverse, Thangs, Cults 3D y MyMiniFactory,
ademas de un formulario que arma un mensaje de WhatsApp con el enlace del modelo que el cliente quiere imprimir.

## Enlaces sociales

Los botones ya estan integrados en la web:

- Facebook: `https://www.facebook.com/share/1DFEUPWQ2h/`
- Instagram: `https://www.instagram.com/kraken.tresd?igsh=MWF3cXJxY21oZmQwYQ==`
- TikTok: `https://www.tiktok.com/@kraken.tres.d?_r=1&_t=ZS-97risr1pqFt`
- WhatsApp: `https://wa.me/50247461797`

## Flujo comercial sugerido

1. Dinos que necesitas.
2. Coordinamos medidas, material, color, cantidad y entrega.
3. Te damos opciones y precio.
4. Preparamos tu pieza, regalo, gadget o souvenir.
5. Coordinamos entrega para que recibas tu pedido rapido y facil.

## Conversion y atencion

- FAQ para resolver dudas comunes antes de cotizar.
- Boton flotante de WhatsApp en las paginas principales.
- Enlace al catalogo de WhatsApp como galeria real de productos y trabajos.

## Tecnologia del sitio

- HTML, CSS y JavaScript puro.
- Sin dependencias externas.
- Optimizado para GitHub Pages.
- Imagenes `.webp` para carga rapida.
- Diseno responsive para telefono, tablet y escritorio.

## Marca

**Kraken Tres D** comunica creatividad, tecnologia, novedades y productos que invitan a pedir algo diferente. Lineas comerciales:

```text
Llevamos tus ideas al siguiente nivel.
Tenemos las tendencias mas virales para ti.
```
