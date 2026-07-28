# Estado Financiero por RUC — KEOPS ERP

Consulta el estado financiero y de cartera de un cliente (por RUC) a una fecha de corte especificada. Retorna la cartera total, montos vencidos y por vencer, límite de crédito, crédito disponible y estado de retenciones pendientes.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/financial_status_xruc/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso / token de autenticación para la API. | `clave` |
| `identificacion` | texto (*string*) | Sí | Número de RUC o identificación del cliente a consultar. | `1234567` |
| `fecha_corte` | texto (*string*) | Sí | Fecha de corte para el cálculo de la cartera (`AAAA-MM-DD`). | `2026-02-06` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el estado de la consulta y el objeto `datos` con el resumen de la cartera y condición crediticia:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"financial_status_xruc"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | objeto (*object*) | Objeto que contiene las métricas financieras y crediticias del cliente. |

#### Campos del Objeto Principal (`datos`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `ruc_consultado` | texto (*string*) | RUC o número de identificación del cliente. |
| `fecha_corte` | texto (*string*) | Fecha a la cual se realizó el corte de cartera (`AAAA-MM-DD`). |
| `cartera_total` | número | Valor total de la cartera acumulada. |
| `monto_vencido` | texto (*string*) | Monto adeudado en estado vencido. |
| `monto_por_vencer` | texto (*string*) | Monto adeudado corriente (por vencer). |
| `facturas_vencidas` | entero | Cantidad de facturas pendientes con fecha de vencimiento superada. |
| `proximo_vencimiento` | texto (*string*) | Fecha de la factura más próxima a vencer (`AAAA-MM-DD`). |
| `dias_mora_max` | entero | Máximo número de días en mora registrados en la cartera. |
| `limite_credito` | número | Límite total de crédito aprobado para el cliente. |
| `credito_disponible` | número | Cupo de crédito disponible actual (`limite_credito` - deudas). |
| `retencion_pendiente` | texto (*string*) | Indica si registra comprobantes de retención pendientes (`"SI"` / `"NO"`). |
| `cantidad_retencion_pendiente` | entero | Cantidad de retenciones tributarias pendientes de entrega. |
| `dias_entre_pagos` | texto (*string*) | Plazo o frecuencia promedio de pago otorgada (en días). |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "financial_status_xruc",
  "respuesta": 200,
  "descripcion": "Consulta exitosa. Estado de cartera al corte de hoy.",
  "datos": {
    "ruc_consultado": "1234567",
    "fecha_corte": "2026-02-06",
    "cartera_total": 111.85,
    "monto_vencido": "0.00",
    "monto_por_vencer": "13911.85",
    "facturas_vencidas": 0,
    "proximo_vencimiento": "2026-02-09",
    "dias_mora_max": 0,
    "limite_credito": 250,
    "credito_disponible": 188.15,
    "retencion_pendiente": "NO",
    "cantidad_retencion_pendiente": 0,
    "dias_entre_pagos": "60"
  }
}