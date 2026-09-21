# Url 

`http://api.energy.keops-corp.com/lista_cierre_negociacion_fpago/?codemp=%27.$codemp.%27&clave=%27.$clave.%27&fecini=%27.$fecini.%27&fecfin=%27.$fecfin`

# Lista Cierre de Negociación – Forma de Pago

Retorna el listado de cierres de negociación registrados en el sistema para un rango de fechas determinado, incluyendo el detalle de la forma de pago asociada a cada negociación.

## Parámetros de consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `codemp` | string | Sí | Código de la empresa. | `01` |
| `clave` | string | Sí | Clave de acceso / período (año y ciclo). | `API CLAVE 7` |
| `fecini` | string | Sí | Fecha de inicio del rango de consulta (YYYY-MM-DD). | `2026-08-01` |
| `fecfin` | string | Sí | Fecha de fin del rango de consulta (YYYY-MM-DD). | `2026-10-31` |

## Respuesta exitosa (200 OK)

### Ejemplo JSON

```json
{
  "desde": "2026-08-01",
  "hasta": "2026-10-31",
  "registros": 107,
  "datos": [
    {
      "numero": "00005379",
      "numero_cierre": null,
      "fecemi": "2026-08-04",
      "codcli": "PR86390",
      "rucced": "0591765240001",
      "nomcli": "PREMIUM TULIPS S.A.",
      "codcen": "01.",
      "nomcen": "ENERGYPLAM CIA. LTDA.",
      "correo": "premiumtulips@yahoo.com",
      "codven": "MJ",
      "nomven": "MONCAYO J",
      "telefono": "0984964648",
      "num_proforma": "PROF-42119",
      "totnet": "17611.00",
      "totiva": "2641.65",
      "codiva": "4",
      "totfac": "20252.65",
      "direccion": "20 MIN DE LASSO",
      "transporte_asumido": "220",
      "arranque_asumido": "170",
      "para_reventa": "N",
      "comision_terceros": "0",
      "compartida": "N",
      "vendedor_adicional": null,
      "tipo": "VN",
      "estado": "AN",
      "calificacion": null,
      "fecha_aprobacion": null,
      "servicio_postventa": "N",
      "codigo_garantia": "005",
      "descripcion_garantia": "NO APLICA",
      "descripcion_fpago": "ANTICIPO SIN IVA",
      "porcentaje": "30.00",
      "fecha": "2026-08-10",
      "valor": "6075.80",
      "credito": "N"
    }
  ]
}
```

## Campos de la respuesta

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `desde` | string | Fecha de inicio del rango consultado. |
| `hasta` | string | Fecha de fin del rango consultado. |
| `registros` | integer | Total de registros devueltos. |
| `datos` | array | Listado de cierres de negociación. |

### Campos del Objeto `datos`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `numero` | string | Número de la negociación. |
| `numero_cierre` | string / null | Número del cierre asociado (puede ser `null`). |
| `fecemi` | string | Fecha de emisión de la negociación. |
| `codcli` | string | Código del cliente. |
| `rucced` | string | RUC o cédula del cliente. |
| `nomcli` | string | Nombre o razón social del cliente. |
| `codcen` | string | Código del centro / proyecto. |
| `nomcen` | string | Nombre del centro / proyecto. |
| `correo` | string | Correo electrónico del cliente. |
| `codven` | string | Código del vendedor. |
| `nomven` | string | Nombre del vendedor. |
| `telefono` | string | Teléfono de contacto. |
| `num_proforma` | string | Número de proforma asociada. |
| `totnet` | string | Total neto de la negociación. |
| `totiva` | string | Total de IVA. |
| `codiva` | string | Código del tipo de IVA. |
| `totfac` | string | Total facturado (neto + IVA). |
| `direccion` | string | Dirección del cliente. |
| `transporte_asumido` | string | Valor de transporte asumido por la empresa. |
| `arranque_asumido` | string | Valor de arranque asumido por la empresa. |
| `para_reventa` | string | Indica si es para reventa (S = Sí, N = No). |
| `comision_terceros` | string | Comisión a terceros. |
| `compartida` | string | Indica si la venta es compartida (S = Sí, N = No). |
| `vendedor_adicional` | string / null | Código del vendedor adicional (puede ser `null`). |
| `tipo` | string | Tipo de negociación (ej. VN = Venta Nueva). |
| `estado` | string | Estado de la negociación (AP = Aprobado, AN = Anulado). |
| `calificacion` | string / null | Calificación de la negociación (puede ser `null`). |
| `fecha_aprobacion` | string / null | Fecha de aprobación (puede ser `null`). |
| `servicio_postventa` | string | Indica si incluye servicio postventa (S = Sí, N = No). |
| `codigo_garantia` | string | Código del tipo de garantía. |
| `descripcion_garantia` | string | Descripción del tipo de garantía. |
| `descripcion_fpago` | string | Descripción de la forma de pago. |
| `porcentaje` | string | Porcentaje de la forma de pago. |
| `fecha` | string | Fecha de la forma de pago. |
| `valor` | string | Valor correspondiente a la forma de pago. |
| `credito` | string | Indica si es a crédito (S = Sí, N = No). |