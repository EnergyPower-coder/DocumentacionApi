# Consulta Individual de Producto (Aura) — KEOPS

Consulta y retorna los datos detallados de un único producto del sistema KEOPS a partir de su código exacto de artículo. Devuelve la información comercial (costo, precio, descuento), datos del proveedor y un desglose de existencias por bodega.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/consultaproducto_aura/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso / token de autenticación para la API. | `clave` |
| `codart` | texto (*string*) | Sí | Código exacto del artículo a consultar. | `4590657` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el estado de la consulta y los datos del producto dentro del objeto `datos`:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"consultaproducto_aura"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | objeto (*object*) | Objeto con la información detallada del producto consultado. |

#### Campos del Objeto de Producto (`datos`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `nombre` | texto (*string*) | Nombre o descripción legible del artículo. |
| `marca` | texto (*string*) | Marca del repuesto o producto. |
| `modelo` | texto (*string*) | Modelo o tipo de artículo. |
| `costo` | texto (*string*) | Costo unitario registrado. |
| `precio` | texto (*string*) | Precio de venta. |
| `descuento` | texto (*string*) | Tasa de descuento comercial (ej. `".1"` = 10%). |
| `existencias` | arreglo (*array*) | Lista de existencias distribuidas por bodega. |
| `proveedor` | texto (*string*) | Nombre o razón social del proveedor. |
| `estado` | texto (*string*) | Estado actual del producto en el sistema. |

#### Campos del Objeto de Existencias (`existencias[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codalm` | texto (*string*) | Código identificador del almacén o bodega. |
| `bodega` | texto (*string*) | Nombre descriptivo de la bodega. |
| `existencia` | número | Cantidad física disponible en la bodega indicada. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "consultaproducto_aura",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "nombre": "BANDA BOMBA DE AGUA",
    "marca": "REPUESTOS PERKINS GS",
    "modelo": "BANDAS",
    "costo": "59.0900000000000119",
    "precio": "88.86",
    "descuento": ".1",
    "existencias": [
      {
        "codalm": "01",
        "bodega": "BODEGA MATRIZ",
        "existencia": 0
      }
    ],
    "proveedor": "SERVICIOS INDUSTRIALES VALLEJO ARAUJO S.A.",
    "estado": ""
  }
}