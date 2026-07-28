# Coincidencia de Productos por Nombre (Aura) — KEOPS

Busca y recupera una lista de productos en el sistema KEOPS que coincidan parcialmente o totalmente con el nombre o descripción proporcionada. Retorna información detallada de precios, marca, proveedor y un desglose de existencias por bodega.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/listacoincidenciaproducto_nombre_aura/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `nomart` | texto (*string*) | Sí | Nombre o coincidencia del artículo a buscar. | `FILTRO DE ACEITE BY PASS` |
| `clave` | texto (*string*) | Sí | Clave de acceso / token de autenticación para la API. | `1234` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el estado de la consulta, los productos coincidentes en el arreglo `datos` y el total de registros devueltos:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"listacoincidenciaproducto_nombre_aura"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | arreglo (*array*) | Lista de objetos de productos coincidentes. |
| `cantidadregistros` | entero | Cantidad total de productos encontrados. |

#### Campos del Objeto de Producto (`datos[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codigo` | texto (*string*) | Código principal o número de parte del producto. |
| `nombre` | texto (*string*) | Nombre o descripción legible del artículo. |
| `marca` | texto (*string*) | Marca del producto o repuesto. |
| `modelo` | texto (*string*) | Modelo o tipo de artículo. |
| `costo` | número | Costo unitario de adquisición. |
| `precio` | número | Precio de venta al público. |
| `descuento` | número | Porcentaje o valor de descuento aplicado. |
| `existencias` | arreglo (*array*) | Desglose del *stock* distribuido por bodegas/almacenes. |
| `proveedor` | texto (*string*) | Nombre o razón social del proveedor. |
| `estado` | texto (*string*) | Estado actual del producto. |

#### Campos del Objeto de Existencias (`existencias[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codalm` | texto (*string*) | Código del almacén o bodega. |
| `bodega` | texto (*string*) | Nombre de la bodega/almacén. |
| `existencia` | número | Cantidad física disponible en esa bodega específica. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "listacoincidenciaproducto_nombre_aura",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "codigo": "JS-2024",
      "nombre": "FILTRO DE ACEITE BY PASS",
      "marca": "REPUESTOS JESON",
      "modelo": "FILTRO DE ACEITE",
      "costo": 15.3,
      "precio": 20.55,
      "descuento": 0,
      "existencias": [
        {
          "codalm": "01",
          "bodega": "BODEGA MATRIZ",
          "existencia": 0
        }
      ],
      "proveedor": "IMPORFILTRO CIA.LTDA",
      "estado": ""
    },
    {
      "codigo": "LF777",
      "nombre": "FILTRO DE ACEITE BY PASS",
      "marca": "REPUESTOS FLEETGUARD",
      "modelo": "FILTRO DE ACEITE",
      "costo": 15.69,
      "precio": 25.93,
      "descuento": 0,
      "existencias": [
        {
          "codalm": "01",
          "bodega": "BODEGA MATRIZ",
          "existencia": 31
        }
      ],
      "proveedor": "YANAN POWER GROUP",
      "estado": ""
    }
  ],
  "cantidadregistros": 2
}