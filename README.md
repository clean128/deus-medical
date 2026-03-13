# Deus Medical - Catálogo WhatsApp

Sistema de dos niveles: Página Puente + Landing Catálogo. Conversión exclusiva por WhatsApp.

## Estructura

- **`/`** – Página Puente (Bridge Page). Diseño Fitness/Goku, minimalista, safe para anuncios.
- **`/catalogo`** – Landing del Catálogo. Blanco, Azul, Rojo. Profesional y médico.

## Configuración

Editar `src/config.ts`:

- `WHATSAPP_NUMBER` – Número de WhatsApp
- `HERO_BOX_IMAGE` – Ruta de la foto de la caja Deus Medical (sustituir cuando la tengas)
- `SHIPPING` – Días de entrega y coste de envío

## Productos

Actualizar `src/data/products.ts` cuando el cliente envíe el listado con fotos. Cada producto:

```ts
{
  id: '1',
  name: 'Nombre del producto',
  description: 'Descripción',
  price: 49.99,
  image: '/productos/producto-1.jpg',  // Añadir imágenes en public/productos/
}
```

## Galería de confianza

En `CatalogPage.tsx`, sección `catalog-trust`: sustituir los placeholders por las fotos reales de pedidos.

## Scripts

```bash
npm run dev    # Desarrollo en http://localhost:3000
npm run build  # Build para producción (output en dist/)
npm run preview # Vista previa del build
```

## Dominio

`optimum-spain.com` (Njalla). Ver `DEPLOYMENT.md` para hosting offshore y nginx.
