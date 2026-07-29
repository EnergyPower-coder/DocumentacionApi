# itemInfo - Streamline

Obtiene una lista paginada de artículos de inventario desde el sistema Streamline. Cada artículo incluye códigos de identificación, categorización, niveles de stock, tiempos de reposición (*lead times*) e información de precios.

---

###  Authentication

Uses **Basic Authentication**:

 El acceso esta en el archivo **API CLAVE 2**

---

### Endpoint

`GET http://api.energy.keops-corp.com/itemInfo/`

---

## Parámetros de Consulta (Query Params)

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `limit` | entero | Opcional | Cantidad de artículos a retornar por página. | `100` |
| `page` | entero | Opcional | Número de página a consultar (índice basado en 1). | `1` |

---

## Estructura de la Respuesta

Una respuesta exitosa retorna un objeto JSON con un arreglo `data`. Cada elemento en el arreglo representa un único artículo de inventario con los siguientes campos:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `itemCode` | texto (*string*) | Código de identificación único del artículo. |
| `itemDescription` | texto (*string*) | Descripción legible del artículo. |
| `itemCategory1` | texto (*string*) | Clasificación de categoría principal. |
| `itemCategory2` | texto (*string*) | Clasificación de categoría secundaria. |
| `location` | texto (*string*) | Ubicación de almacenamiento o almacén. |
| `onHand` | número | Cantidad actual disponible en inventario (*stock*). |
| `leadtime` | número | Tiempo de entrega/reposición en días. |
| `purchasePrice` | número | Precio unitario de compra. |
| `salesPrice` | número | Precio unitario de venta. |

### Ejemplo de Respuesta

```json
{
    "data": [
        {
            "itemCode": "0 ESUNMEM210",
            "itemDescription": "ESUN MEDIDOR SECUENCIA DE FASE EM210 110 480V",
            "itemCategory1": "REPUESTOS VARIOS",
            "itemCategory2": "RE4",
            "location": "Quito",
            "onHand": 0,
            "leadtime": 1,
            "purchasePrice": 0,
            "salesPrice": 0
        }
    ],
    "hashMore": true,
    "count": 6842
}