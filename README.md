# BI Reports Hub (Astro)

Aplicacion web moderna construida con Astro para gestionar y visualizar reportes BI embebidos (Power BI, Tableau y otras plataformas) dentro de una experiencia tipo dashboard SaaS.

## Contexto del proyecto

Este proyecto nace para centralizar reportes de distintas areas de negocio en una sola interfaz:

- Registro de reportes por parte de administracion.
- Navegacion lateral por modulos.
- Visualizacion embebida sin recargar pagina.
- Control de acceso por roles.
- Persistencia de datos de sesion y catalogo en navegador.

## Objetivo funcional

- Registrar reportes con nombre, modulo y URL.
- Visualizar reportes activos embebidos dentro del visor.
- Limitar vistas segun rol de usuario.
- Administrar reportes con edicion, paginacion y baja logica (estado 1/0).

## Roles y permisos

- Admin:
  - Puede registrar reportes.
  - Puede visualizar todos los reportes activos.
  - Puede editar, paginar y desactivar reportes desde la tabla.
- Operaciones:
  - Solo visualiza reportes activos del modulo Operaciones.
- Finanzas:
  - Solo visualiza reportes activos del modulo Finanzas.
- Comercial:
  - Solo visualiza reportes activos del modulo Comercial.

## Modelo de datos

### Reporte

- id: identificador unico.
- name: nombre del reporte.
- module: modulo de negocio (Operaciones, Finanzas, Comercial).
- url: enlace embebible.
- platform: powerbi | tableau | other.
- strategy: iframe-public | official-sdk | secure-token.
- status: 1 (activo) | 0 (inactivo).

### Usuario

- user: identificador de acceso.
- role: admin | operaciones | finanzas | comercial.
- displayName: nombre visible opcional.

## Persistencia

La aplicacion usa localStorage para guardar estado runtime:

- bi-reports-v1: catalogo de reportes (incluye altas, ediciones y bajas logicas).
- bi-auth-v1: sesion del usuario autenticado.
- bi-theme-v1: tema visual actual (claro/oscuro).

Importante:

- El archivo src/data/initialReports.ts funciona como semilla inicial del proyecto.
- Los cambios realizados desde la UI no escriben ese archivo fisicamente; se guardan en localStorage.

## Arquitectura (resumen)

- src/pages/index.astro
  - Orquestacion principal de UI, login, reglas por rol y eventos de negocio.
- src/pages/docs/index.astro
  - Documentacion del dataset PHPeitor, acceso a la instancia y flujo de integracion.
- src/components/Sidebar.astro
  - Sidebar colapsable con modulos y subitems.
- src/components/ReportForm.astro
  - Formulario de alta de reportes (admin).
- src/components/ReportViewer.astro
  - Iframe del visor embebido.
- src/data/initialReports.ts
  - Datos semilla de reportes y usuarios.
- src/styles/global.css
  - Estilos globales del dashboard, tabla, tooltips y responsive.

## Flujo principal

1. Usuario inicia sesion (input usuario + rol).
2. Se valida contra el arreglo users en src/data/initialReports.ts.
3. Se aplica filtro por rol para modulos/reportes visibles.
4. Admin puede crear reportes (status por defecto = 1).
5. Admin gestiona tabla:
   - Editar fila.
   - Desactivar (Eliminar -> status 0).
   - Paginacion.
6. El visor cambia de reporte sin recargar pagina.

## Embedding de reportes

El sistema detecta plataforma desde URL y define estrategia sugerida:

- iframe-public: enlaces publicos listos para iframe.
- official-sdk: recomendado para control avanzado en integraciones productivas.
- secure-token: recomendado con backend y tokens de seguridad.

Nota: algunos enlaces pueden mostrar mensajes de proveedor (por ejemplo "contenido no disponible") si el enlace no es publico o requiere permisos del tenant.

## Como ejecutar localmente

Requisitos:

- Node.js 18+
- npm

Pasos:

1. Instalar dependencias
   - npm install
2. Ejecutar en desarrollo
   - npm run dev
3. Compilar produccion
   - npm run build
4. Previsualizar build
   - npm run preview

## Documentacion del dataset

La guia esta disponible en `/docs/` durante desarrollo y produccion. Documenta la instancia PHPeitor y el flujo para registrar reportes en el visor, pero no incluye credenciales ni inventa el catalogo de columnas: esos metadatos deben validarse en Superset.

## Estado actual

Implementado:

- Dashboard responsive con sidebar colapsable.
- Dark mode opcional.
- Login por rol validado contra lista de usuarios.
- Tabla admin a ancho completo (abajo), editable y paginada.
- Baja logica de reportes con status 1/0.
- Tooltips personalizados para sidebar colapsado.

## Siguientes mejoras sugeridas

- Backend/API para persistencia multiusuario real.
- Autenticacion con password y sesiones seguras.
- Filtros avanzados en tabla (estado/modulo/texto).
- Auditoria de cambios (quien edito, fecha, accion).
- Integracion oficial de SDK de Power BI/Tableau para escenarios enterprise.
