# Backend and Integration Standards - BI Reports Hub

## Estado actual

No hay backend ni API propia en este proyecto. El login del visor es una demostración local basada en `src/data/initialReports.ts` y `localStorage`; no debe confundirse con autenticación real.

## Integraciones BI

- Mantener URLs de reportes en datos de configuración, no incrustadas en componentes cuando puedan ser administradas desde la UI.
- Detectar la plataforma y estrategia de embedding de forma explícita.
- Usar iframe solo para contenido realmente público o autorizado para embedding.
- Para contenido privado, planificar una integración oficial con tokens emitidos por un backend seguro.
- Validar URLs antes de guardarlas y escapar contenido antes de interpolarlo en HTML.

## Superset / PHPeitor

- No llamar APIs autenticadas de Superset desde el navegador con credenciales.
- Si se integra el catálogo, hacerlo mediante un backend o exportación controlada, con variables de entorno y permisos mínimos.
- No registrar credenciales, cookies de sesión ni respuestas con datos sensibles.
- Documentar cualquier endpoint, versión o contrato de API que se confirme en la instancia.
