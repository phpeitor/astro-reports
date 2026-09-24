# Frontend Standards - BI Reports Hub

## Objetivo

Ofrecer un visor de reportes y una documentación de datos clara, rápida y usable en escritorio y móvil.

## Convenciones

- Usar Astro para páginas estáticas y componentes `.astro` para piezas de presentación.
- La documentación usa `@astrojs/starlight` para el layout, búsqueda Pagefind, navegación lateral, tabla de contenidos y selector de tema.
- Reutilizar `DashboardLayout` y las variables de `src/styles/global.css` antes de crear otra paleta.
- Mantener el idioma español y nombres de negocio consistentes: PHPeitor, dataset, reporte, módulo y estado.
- Usar enlaces externos con `target="_blank"` y `rel="noreferrer"` cuando corresponda.
- En documentación, separar hechos verificados, instrucciones operativas y pendientes de validación.
- No incluir contraseñas de ejemplo, tokens de Superset ni datos de producción.

## Responsive y accesibilidad

- Evitar anchos fijos que provoquen scroll horizontal en móvil.
- Usar headings en orden y enlaces con texto descriptivo.
- Mantener estados vacíos y mensajes de error comprensibles.
- Preservar el tema claro/oscuro del visor cuando se modifique el dashboard.

## Validación

- Ejecutar `npm run build` después de cambios en Astro o CSS.
- Revisar manualmente `/`, `/docs/`, navegación por teclado y viewport móvil.
