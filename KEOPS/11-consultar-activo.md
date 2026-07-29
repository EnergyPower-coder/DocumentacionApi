# Consulta de Activos por RUC — KEOPS ERP

Consulta y recupera el listado de activos (motores y generadores) despachados a un cliente específico a partir de su número de identificación/RUC. Filtra automáticamente para retornar únicamente los equipos que cuentan con fecha de despacho registrada.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/consulta_activos_por_ruc/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso ubicado en el archivo **API CLAVE 1**. | `clave` |
| `identificacion` | texto (*string*) | Sí | Número de RUC o cédula del cliente a consultar. | `1234567` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con los datos del RUC consultado, los filtros aplicados en el servidor, el total de activos y el arreglo `datos` con la lista de equipos despachados:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"consulta_activos_por_ruc"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje informativo sobre el resultado y filtros aplicados. |
| `ruc` | texto (*string*) | Número de RUC o identificación consultada. |
| `filtros_aplicados` | objeto (*object*) | Criterios de filtrado utilizados internamente en la búsqueda. |
| `total` | entero | Cantidad total de activos devueltos. |
| `datos` | arreglo (*array*) | Lista de activos/equipos pertenecientes al cliente. |

#### Campos del Objeto `filtros_aplicados`

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `categorias` | arreglo de cadenas | Lista de categorías de activos incluidas en la consulta (ej. `["MOTORES", "GENERADORES"]`). |
| `solo_con_fecha_despacho` | booleano | Indica si el resultado se restringió a activos con fecha de despacho válida. |

#### Campos del Objeto de Activo (`datos[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `categoria` | texto (*string*) | Código o identificador de categoría de la línea del equipo. |
| `equipo` | texto (*string*) | Nombre, capacidad o descripción técnica del equipo. |
| `serie` | texto (*string*) | Número de serie único identificador del activo/equipo. |
| `fecha_despacho` | texto (*string*) | Fecha en la que fue despachado el activo en formato `AAAA-MM-DD`. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "consulta_activos_por_ruc",
  "respuesta": 200,
  "descripcion": "Consulta correcta. Se devuelven únicamente Motores y Generadores con fecha_despacho.",
  "ruc": "1234567",
  "filtros_aplicados": {
    "categorias": [
      "MOTORES",
      "GENERADORES"
    ],
    "solo_con_fecha_despacho": true
  },
  "total": 39,
  "datos": [
    {
      "categoria": "GE2",
      "equipo": "508 KVA MP-400",
      "serie": "X00708J",
      "fecha_despacho": "2026-07-20"
    },
    {
      "categoria": "GE2",
      "equipo": "576 KVA MP-460",
      "serie": "X00710J",
      "fecha_despacho": "2026-04-18"
    },
    {
      "categoria": "GE2",
      "equipo": "104 KVA MP-82I",
      "serie": "X92194I",
      "fecha_despacho": "2025-12-19"
    },
    {
      "categoria": "GE2",
      "equipo": "644 KVA MP-515",
      "serie": "X42727H",
      "fecha_despacho": "2025-01-31"
    }
  ]
}