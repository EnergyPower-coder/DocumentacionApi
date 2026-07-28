## Ventas Netas

Retorna el listado de ventas netas registradas en el sistema para un rango de fechas determinado y una empresa específica. La respuesta incluye información detallada de cada factura, como cliente, vendedor, totales, forma de pago y tipo de comprobante.

### Endpoint

`http://api.energy.keops-corp.com/ventasnetas/`

---

## Parámetros de consulta

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | string | ✅ Sí | Código de la empresa | `01` |
| `clave` | string | ✅ Sí | Clave de acceso a la API | `claveUnico` |
| `fecini` | string | ✅ Sí | Fecha de inicio del rango de consulta (`YYYY-MM-DD`) | `2024-12-31` |
| `fecfin` | string | ✅ Sí | Fecha de fin del rango de consulta (`YYYY-MM-DD`) | `2024-12-31` |

---

## Estructura de la respuesta

La respuesta contiene un arreglo `datos` con los registros de ventas. Cada elemento incluye los siguientes campos:

| Campo | Descripción |
| --- | --- |
| `numfac` | Número de factura |
| `fecfac` | Fecha de factura |
| `codcli` | Código del cliente |
| `nomcli` | Nombre del cliente |
| `totnet` | Total neto |
| `totdes` | Total descuento |
| `totiva` | Total IVA |
| `totfac` | Total factura |
| `codven` | Código del vendedor |
| `numdoc` | Número de documento |
| `rucced` | RUC o cédula del cliente |
| `totbas` | Total base gravada |
| `totbasecero` | Total base tarifa 0% |
| `ceco` | Centro de costo |
| `tipo_comprobante` | Tipo de comprobante |
| `servicio` | Indicador de servicio |
| `pordes` | Porcentaje de descuento |
| `formadepago` | Forma de pago |
| `maxdias` | Máximo de días de crédito |
| `fecha_creacion` | Fecha y hora de creación del registro |
| `codcla` | Código de clasificación |

---

## Pruebas

- ✅ Verifica que el código de estado de la respuesta sea **200 OK**.