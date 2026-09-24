# Reglas de Desarrollo - BI Reports Hub

## Contexto del proyecto

BI Reports Hub es un visor de reportes construido con Astro 5 y TypeScript. Centraliza enlaces embebibles de herramientas BI y acompaña la documentación del dataset PHPeitor, publicado en una instancia compatible con Superset.

- Runtime: Node.js 18+ y npm.
- Framework: Astro 5, salida estática por defecto.
- Documentación: Astro Starlight 0.37, con Pagefind para búsqueda.
- Interfaz y documentación: español.
- Persistencia actual: `localStorage` del navegador; no existe backend propio.
- Fuente externa documentada: `http://161.132.4.164:8090/login/`.

## Estructura principal

- `src/pages/index.astro`: login local, navegación, administración y visor de reportes.
- `src/pages/docs/index.astro`: documentación pública del dataset PHPeitor.
- `src/components`: sidebar, formulario y visor reutilizables.
- `src/data/initialReports.ts`: semillas de reportes y usuarios de demostración.
- `src/layouts/DashboardLayout.astro`: HTML base y carga de estilos globales.
- `src/styles/global.css`: tema, layout, componentes y responsive.
- `.ia-context`: contexto operativo para asistentes y colaboradores.

## Reglas obligatorias

1. Mantener los textos visibles y la documentación en español.
2. No guardar credenciales, tokens, cookies, URLs privadas ni datos reales en el repositorio.
3. No presentar columnas, métricas o relaciones del dataset como confirmadas si no se han validado en Superset.
4. Preferir páginas y componentes Astro estáticos; añadir JavaScript solo para interacciones que lo necesiten.
5. Mantener accesibilidad básica: HTML semántico, labels, foco visible, contraste y navegación responsive.
6. Conservar la persistencia local actual y documentar sus límites: no es multiusuario ni una autenticación segura.
7. Al cambiar estilos, páginas o componentes, ejecutar `npm run build`.
8. Mantener los cambios acotados y actualizar `README.md` cuando cambie el uso o la estructura.

## Comandos útiles

```bash
npm install
npm run dev
npm run build
npm run preview
```
