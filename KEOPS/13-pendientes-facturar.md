# Egresos Sin Facturar (Unbilled) — KEOPS ERP

Consulta y recupera el listado de egresos, guías/notas de entrega y despachos de inventario que aún se encuentran pendientes de facturación para un cliente específico (identificado por RUC o cédula).

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/unbilled/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso / token de autenticación para la API. | `123` |
| `identificacion` | texto (*string*) | Sí | Número de RUC o cédula del cliente a consultar. | `1234567` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el estado de la consulta y el objeto `datos` con el detalle de la identificación consultada, la fecha de corte y el listado de egresos pendientes de facturación:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"unbilled"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje informativo sobre el resultado de la consulta. |
| `datos` | objeto (*object*) | Objeto que contiene el arreglo de egresos y los metadatos de la consulta. |

#### Campos del Objeto Principal (`datos`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `identificacion_consultada` | texto (*string*) | Número de identificación enviado en la consulta. |
| `fecha_corte` | texto (*string*) | Fecha de generación o corte del reporte (`AAAA-MM-DD`). |
| `egresos` | arreglo (*array*) | Lista de notas de entrega / despachos que no han sido facturados. |

#### Campos del Objeto de Egreso (`egresos[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `fecha` | texto (*string*) | Fecha del egreso o nota de entrega (`AAAA-MM-DD`). |
| `nota_entrega` | texto (*string*) | Número de nota de entrega o guía de despacho. |
| `bodega` | texto (*string*) | Código de la bodega/almacén desde donde se despachó. |
| `costo_t` | texto (*string*) | Costo total del egreso/material despachado. |
| `total_neto` | texto (*string*) | Valor neto total del despacho antes de impuestos. |
| `facturado` | booleano | Estado de facturación del egreso (`false` = pendiente de facturar). |
| `total_iva` | texto (*string*) | Monto calculado de IVA. |
| `tipo_orden` | texto (*string*) | Tipo de orden de origen (ej. `"EOC"`). |
| `orden_tp` | texto (*string*) | Número de orden de trabajo o pedido asociado. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "unbilled",
  "respuesta": 200,
  "descripcion": "Consulta exitosa. Egresos sin facturar.",
  "datos": {
    "identificacion_consultada": "'1234567'",
    "fecha_corte": "2026-07-28",
    "egresos": [
      {
        "fecha": "2026-03-21",
        "nota_entrega": "01151112",
        "bodega": "01",
        "costo_t": "10.16",
        "total_neto": "13.81",
        "facturado": false,
        "total_iva": "2.07",
        "tipo_orden": "EOC",
        "orden_tp": "43833-001"
      },
      {
        "fecha": "2026-03-26",
        "nota_entrega": "01151201",
        "bodega": "01",
        "costo_t": "117.33",
        "total_neto": "170.78",
        "facturado": false,
        "total_iva": "25.62",
        "tipo_orden": "EOC",
        "orden_tp": "42835-001"
      }
    ]
  }
}