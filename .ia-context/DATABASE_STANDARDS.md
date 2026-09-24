# Data Standards - Dataset PHPeitor

## Alcance

Este repositorio documenta y visualiza reportes relacionados con el dataset PHPeitor. La fuente de consulta es una instancia externa compatible con Superset; la base de datos original no forma parte de este repositorio.

## Reglas de documentación

- Confirmar en Superset el nombre exacto del dataset, esquema, tabla, columnas y tipos antes de publicarlos.
- Para cada campo documentar nombre técnico, etiqueta, tipo, descripción, nulabilidad y ejemplo no sensible.
- Documentar métricas con fórmula, granularidad, filtros y fecha de actualización.
- Declarar la zona horaria y el tratamiento de fechas cuando se documenten series temporales.
- No copiar datos personales, credenciales, tokens o muestras de producción a Markdown, TypeScript o HTML.
- Diferenciar el dataset físico de las métricas calculadas y de los dashboards que lo consumen.

## Estado conocido

- La URL pública comprobada es `http://161.132.4.164:8090/login/`.
- La pantalla responde con el título “Dataset PHPeitor” y solicita usuario y contraseña.
- El catálogo de columnas y métricas requiere acceso autenticado y está pendiente de validación.
