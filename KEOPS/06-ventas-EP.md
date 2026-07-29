# Ventas EP — KEOPS ERP

Obtiene el detalle general de las ventas e ítems facturados (repuestos, equipos, mano de obra y servicios) registrados en el sistema ERP KEOPS dentro de un rango de fechas y para una empresa determinada.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/ventasep/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso a la API ubicado en el archivo **API CLAVE 4**. | `123` |
| `fecini` | texto (*string*) | Sí | Fecha inicial del rango de consulta (`AAAA-MM-DD`). | `2025-03-31` |
| `fecfin` | texto (*string*) | Sí | Fecha final del rango de consulta (`AAAA-MM-DD`). | `2025-03-31` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con los datos de auditoría de la consulta, un arreglo `datos` con el detalle de las transacciones y el total de registros retornados:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado en la API (`"ventaep"`). |
| `respuesta` | entero | Código de estado HTTP de la respuesta (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | arreglo (*array*) | Lista con los detalles de cada línea o ítem de venta. |
| `cantidadregistros` | entero | Número total de registros devueltos en la consulta. |

#### Estructura del Objeto de Venta (`datos[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `codemp` | texto (*string*) | Código de la empresa. |
| `codalm` | texto (*string*) | Código del almacén o bodega. |
| `bodega` | texto (*string*) | Nombre descriptivo de la bodega o almacén. |
| `tiporg` | texto (*string*) | Tipo de documento origen (ej. `"FAC"` = Factura, `"IDV"` = Nota de Crédito/Devolución). |
| `fecdoc` | texto (*string*) | Fecha de emisión del documento (`AAAA-MM-DD`). |
| `codart` | texto (*string*) | Código interno o número de parte del artículo/servicio. |
| `nomart` | texto (*string*) | Descripción del artículo, equipo, mano de obra o servicio. |
| `cantot` | número | Cantidad total del artículo o unidad comercializada. |
| `totren` | número | Monto total renglón/línea de la factura. |
| `cosuni` | número | Costo o precio unitario de referencia. |
| `numdoc` | texto (*string*) | Número de documento fiscal / factura. |
| `nomcla` | texto (*string*) | Clasificación o línea de producto principal. |
| `subcla` | texto (*string*) | Subclasificación de producto. |
| `nombre` | texto (*string*) | Nombre o razón social del cliente. |
| `codven` | texto (*string*) | Código del vendedor asignado. |
| `nomven` | texto (*string*) | Nombre del vendedor. |
| `nomciu` | texto (*string*) | Ciudad de ubicación o facturación del cliente. |
| `provincia` | texto (*string*) | Provincia de ubicación del cliente. |
| `codcla` | texto (*string*) | Código abreviado de la clasificación del ítem. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "ventaep",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "codemp": "01",
      "codalm": "01",
      "bodega": "BODEGA MATRIZ",
      "tiporg": "FAC",
      "fecdoc": "2025-03-31",
      "codart": "WYP",
      "nomart": "WAYPE",
      "cantot": 40,
      "totren": 5.2,
      "cosuni": 0.13,
      "numdoc": "T0009561",
      "nomcla": "MATERIALES VARIOS AC6",
      "subcla": "MATERIALES VARIOS 01",
      "nombre": "AGROVALENCIA C A ",
      "codven": "JDR",
      "nomven": "ROJAS JUAN DANIEL",
      "nomciu": "QUITO",
      "provincia": "LOS R OS",
      "codcla": "AC6"
    },
    {
      "codemp": "01",
      "codalm": "05",
      "bodega": "BODEGA DESPACHO EQUIPOS  GE",
      "tiporg": "FAC",
      "fecdoc": "2025-03-31",
      "codart": "PG2412006333",
      "nomart": "GRUPO ELECTROGENO YNS 125C",
      "cantot": 1,
      "totren": 15383,
      "cosuni": 9636.5,
      "numdoc": "T0009555",
      "nomcla": "GENERADORES YANAN GE8",
      "subcla": "125 KVA YNS 125C 12",
      "nombre": "ECUATORIANA DE OBRAS Y SERVICIOS ECOBRASSER S A ",
      "codven": "VZ",
      "nomven": "ZUNIGA VICTOR",
      "nomciu": "MILAGRO ",
      "provincia": "",
      "codcla": "GE8"
    }
  ],
  "cantidadregistros": 441
}