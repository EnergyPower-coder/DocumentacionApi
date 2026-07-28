# Viáticos — KEOPS ERP

Obtiene los registros contables de gastos de viaje y viáticos desde el sistema ERP KEOPS para una empresa y rango de fechas especificados.

### Método

`GET`

### URL Base

`http://api.energy.keops-corp.com/viaticos/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código de la empresa (ej. `01`). |
| `clave` | texto (*string*) | Sí | Clave de acceso / token de autenticación para la API. |
| `fecini` | texto (*string*) | Sí | Fecha inicial del rango de consulta en formato `AAAA-MM-DD`. |
| `fecfin` | texto (*string*) | Sí | Fecha final del rango de consulta en formato `AAAA-MM-DD`. |

---

### Respuesta

Retorna un objeto JSON con la siguiente estructura principal:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"viaticos"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | arreglo (*array*) | Lista de asientos contables para el período solicitado. |

**Cada elemento dentro del arreglo `datos` contiene:**

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codcta` | texto (*string*) | Código de la cuenta contable. |
| `nomcta` | texto (*string*) | Nombre o título de la cuenta contable. |
| `descta` | texto (*string*) | Descripción detallada de la transacción. |
| `debito` | número | Valor del débito. |
| `credit` | número | Valor del crédito. |
| `codcen` | texto (*string*) | Código del centro de costos. |
| `clidoc` | texto (*string*) | Referencia del cliente, proveedor o documento. |
| `fecdoc` | texto (*string*) | Fecha del documento (`AAAA-MM-DD`). |

### Ejemplo de Respuesta

```json
{
    "metodo": "viaticos",
    "respuesta": 200,
    "descripcion": "La consulta fue correcta.",
    "datos": [
        {
            "codcta": "1.01.04.04.07",
            "nomcta": "Anticipo Gastos de Viaje",
            "descta": "CIERRE DE VIATICOS JOSE HUAYTA  MES DE DICIEMBRE",
            "debito": 0,
            "credit": 360,
            "codcen": "HUAYTA JOSE",
            "clidoc": "CIERRE DE VIATICOS JOSE HUAYTA ",
            "fecdoc": "2024-12-31"
        },
        {
            "codcta": "1.01.04.04.07",
            "nomcta": "Anticipo Gastos de Viaje",
            "descta": "CIERRE DE VIATICOS HUGO PUCHAICELA  CAYAMBE SANTO DOMINGO  04 NOV",
            "debito": 0,
            "credit": 70,
            "codcen": "HUGO PUCHAICE",
            "clidoc": "CIERRE DE VIATICOS HUGO PUCHAICELA",
            "fecdoc": "2024-12-31"
        }
    ],
    "cantidadregistros": 11
}