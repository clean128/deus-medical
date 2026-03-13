# Deployment - Deus Medical

## SPA routing

Para que las rutas funcionen correctamente en producción, el servidor debe devolver `index.html` para todas las rutas (fallback). Ejemplo para **nginx**:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## No-index (Catálogo)

La página `/catalogo` añade automáticamente `<meta name="robots" content="noindex, nofollow">` para evitar indexación en buscadores.

## Infraestructura offshore

Según los requisitos del cliente:
- Hosting en servidor offshore (Moldavia o Islandia)
- Reverse proxy / Cloudflare para ocultar IP
- Dominio anónimo (Njalla): `optimum-spain.com`

## Build

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`. Subir el contenido de `dist/` al servidor.
