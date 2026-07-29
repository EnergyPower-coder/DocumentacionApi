# Coincidencia de Productos por Código (Aura) — KEOPS

Busca y recupera una lista de productos en el sistema KEOPS que coincidan con un código de artículo especificado. Retorna la información comercial (costo, precio, descuento) y un desglose detallado del inventario disponible por cada bodega.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/listacoincidenciaproducto_aura/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso ubicado en el archivo **API CLAVE 1**. | `CLAVE` |
| `codart` | texto (*string*) | Sí | Código de artículo o número de parte a buscar. | `4520-05` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con la confirmación de la consulta, los productos devueltos en el arreglo `datos` y el total de coincidencias encontradas:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"listacoincidenciaproducto_aura"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo del resultado de la consulta. |
| `datos` | arreglo (*array*) | Lista de objetos con los productos que coinciden con el código. |
| `cantidadregistros` | entero | Número total de registros encontrados. |

#### Campos del Objeto de Producto (`datos[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codigo` | texto (*string*) | Código único o identificador de parte del artículo. |
| `nombre` | texto (*string*) | Nombre o descripción del artículo. |
| `marca` | texto (*string*) | Marca del repuesto o equipo. |
| `modelo` | texto (*string*) | Modelo o subcategoría del artículo. |
| `costo` | número | Costo unitario registrado. |
| `precio` | número | Precio de venta. |
| `descuento` | número | Tasa de descuento comercial (ej. `0.1` = 10%). |
| `existencias` | arreglo (*array*) | Detalle del inventario disponible por cada almacén/bodega. |
| `proveedor` | texto (*string*) | Nombre del proveedor principal del producto. |
| `estado` | texto (*string*) | Estado actual del ítem. |

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
  "metodo": "listacoincidenciaproducto_aura",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "codigo": "4520-05",
      "nombre": "MODULO DEEP SEA 4520 (SIN PLC)",
      "marca": "REPUESTOS DEEP SEA",
      "modelo": "MODULOS",
      "costo": 120.74,
      "precio": 238.36,
      "descuento": 0.1,
      "existencias": [
        {
          "codalm": "01",
          "bodega": "BODEGA MATRIZ",
          "existencia": 89
        },
        {
          "codalm": "04",
          "bodega": "BODEGA TALLER",
          "existencia": 14
        },
        {
          "codalm": "06",
          "bodega": "BODEGA GARANTIAS",
          "existencia": 0
        }
      ],
      "proveedor": "DEEP SEA ELECTRONICS INC",
      "estado": ""
    },
    {
      "codigo": "4520-05-S",
      "nombre": "MODULO DEEP SEA 4520 (SIN PLC)",
      "marca": "REPUESTOS DEEP SEA",
      "modelo": "MODULOS",
      "costo": 0,
      "precio": 0.01,
      "descuento": 0,
      "existencias": [
        {
          "codalm": "04",
          "bodega": "BODEGA TALLER",
          "existencia": 1
        }
      ],
      "proveedor": "ENERGYPLAM CIA.LTDA.",
      "estado": ""
    }
  ],
  "cantidadregistros": 2
}