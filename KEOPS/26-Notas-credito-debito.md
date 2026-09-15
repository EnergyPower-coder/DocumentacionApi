## Notas de Crédito y Débito

Obtiene una lista de notas de crédito y débito registradas en el sistema KEOPS para una empresa y un rango de fechas determinados.

### Endpoint

`GET http://api.energy.keops-corp.com/notcre-notdeb/`

### Parámetros de Consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `codemp` | string | Sí | Código de la empresa (ej. `01`). |
| `clave` | string | Sí | Clave de autenticación ubicado en ** API CLAVE 3**. |
| `fecini` | string | Sí | Fecha de inicio del rango de consulta en formato `YYYY-MM-DD`. |
| `fecfin` | string | Sí | Fecha final del rango de consulta en formato `YYYY-MM-DD`. |

### Respuesta

Devuelve un objeto JSON con la siguiente estructura:

```json
{
  "metodo": "notcre-notdeb",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "codcli":      "Código del cliente",
      "nomcli":      "Nombre del cliente",
      "numfac":      "Número de documento",
      "codven":      "Código del vendedor",
      "nomven":      "Nombre del vendedor",
      "reffac":      "Número de factura referenciada",
      "fecdoc":      "Fecha del documento (YYYY-MM-DD)",
      "totnet":      "Total neto",
      "totbas":      "Total base imponible",
      "totdes":      "Total descuento",
      "totiva":      "Total IVA",
      "totfac":      "Total factura (incluyendo IVA)",
      "debo-dinero": "Indica si se debe dinero (S/N)",
      "tipo":        "Tipo de documento (ej. NOT CREDITO, NOT DEBITO)"
    }
  ]
}