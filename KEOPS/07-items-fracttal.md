# Ítems General Fractal — KEOPS / Fracctal

Obtiene el inventario general de artículos e insumos estructurado para la integración con Fracctal. Retorna una lista paginada con detalles de existencias, precios, proveedores, bodegas y códigos alternos de cada artículo.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/itemsgeneralfractal/`

---

### Autenticación

Este endpoint requiere **Autenticación Básica** (*Basic Auth*)

Ubicado en el archivo **API CLAVE 6**

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `page` | entero | Opcional | Número de página para la paginación. Inicia en `1`. | `1` |
| `limit` | entero | Opcional | Cantidad máxima de registros a retornar por página. | `10` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el arreglo `data` que contiene los artículos del inventario, un indicador de paginación `hashMore` y el número total de registros coincidentes `count`:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `data` | arreglo (*array*) | Lista de objetos con el detalle de cada artículo del inventario. |
| `hashMore` | booleano | Indica si existen más páginas de resultados disponibles (`true` / `false`). |
| `count` | entero | Cantidad total de artículos registrados en el sistema. |

#### Campos del Objeto de Artículo (`data[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codart` | texto (*string*) | Código principal del artículo. |
| `nomart` | texto (*string*) | Descripción/nombre del artículo. |
| `unidad` | texto (*string*) | Nombre de la unidad de medida (ej. `"UNIDAD"`, `"METRO"`). |
| `coduni` | texto (*string*) | Código abreviado de la unidad de medida (ej. `"UN"`, `"MT"`). |
| `nompro` | texto (*string*) | Nombre o razón social del proveedor principal. |
| `clase` | texto (*string*) | Categoría o clasificación del repuesto/material. |
| `codalm` | texto (*string*) | Código del almacén o bodega donde se encuentra el inventario. |
| `existencia` | número | Cantidad física disponible en el almacén (*stock*). |
| `cosuni` | número | Costo unitario del artículo. |
| `costot` | número | Costo total valorizado (`existencia` × `cosuni`). |
| `alterno` | texto (*string*) | Códigos de referencia alternos (si no aplica, retorna `"NOEXISTE"`). |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "data": [
    {
      "codart": "00000-00052",
      "nomart": "KIT DE EMPAQUES INFERIOR C TD 3681P046 ",
      "unidad": "UNIDAD",
      "coduni": "UN",
      "nompro": "SIMPLY RELIABLE POWER INC ",
      "clase": "REPUESTOS FG WILSON ADMISION Y ESCAPE RE1 D",
      "codalm": "01",
      "existencia": 4,
      "cosuni": 163.17,
      "costot": 652.69,
      "alterno": "U5LB0382,KMPU5LB0382"
    },
    {
      "codart": "002079",
      "nomart": "MANGUERA 2   300 PSI METROS ",
      "unidad": "METRO",
      "coduni": "MT",
      "nompro": "MEJIA TRIVINO TERESA DE JESUS",
      "clase": "MATERIALES VARIOS MATERIALES VARIOS AC6 01",
      "codalm": "04",
      "existencia": 2,
      "cosuni": 20.56,
      "costot": 41.13,
      "alterno": "NOEXISTE"
    }
  ],
  "hashMore": true,
  "count": 2053
}