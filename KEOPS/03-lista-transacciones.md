# Transactions — Streamline

Obtiene una lista paginada de transacciones de ventas desde la API de Streamline.

### Endpoint

`GET http://api.energy.keops-corp.com/transactions/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `page` | número | Sí | Número de página para la paginación. Inicia en `1`. |
| `limit` | número | Sí | Cantidad de registros a retornar por página. |
| `fromDate` | texto (*string*) | Sí | Filtra las transacciones a partir de esta fecha. Formato: `AAAA-MM-DD`. |

---

### Respuesta

**200 OK**

Retorna un objeto JSON con los siguientes campos principales:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `data` | arreglo (*array*) | Lista de objetos de transacciones. |
| `hashMore` | booleano | Indica si existen más páginas de resultados disponibles. |
| `count` | número | Cantidad total de transacciones que coinciden con la consulta. |

**Campos del objeto de Transacción (`data`):**

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `date` | texto (*string*) | Fecha en que se realizó la transacción (`AAAA-MM-DD`). |
| `quantitySold` | número | Cantidad de unidades vendidas en la transacción. |
| `itemCode` | texto (*string*) | Código interno que identifica al artículo vendido. |
| `location` | texto (*string*) | Ubicación o almacén donde se realizó la venta. |
| `salesPrice` | número | Precio de venta del artículo. |
| `onHandRemaining` | número | Inventario físico (*stock*) restante después de la transacción. |

**Ejemplo de Respuesta:**

```json
{
  "data": [
    {
      "date": "2026-07-27",
      "quantitySold": 2,
      "itemCode": "06.436.01.0.00",
      "location": "Quito",
      "salesPrice": 22.02,
      "onHandRemaining": 5
    },
    {
      "date": "2026-07-27",
      "quantitySold": 1,
      "itemCode": "0890-04",
      "location": "Quito",
      "salesPrice": 419.02,
      "onHandRemaining": 0
    }
  ],
  "hashMore": true,
  "count": 91372
}