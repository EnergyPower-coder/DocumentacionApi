# Transacciones por Equipo — Streamline

Obtiene una lista paginada de transacciones de ventas asociadas a un equipo específico (*equipo*). Cada registro incluye la fecha de la transacción, el artículo vendido, la cantidad, el precio de venta, la ubicación y el inventario restante disponible (*stock*).

## Endpoint

`GET http://api.energy.keops-corp.com/Transactions_equipo/`

---

###  Authentication

Uses **Basic Authentication**:

 El acceso esta en el archivo **API CLAVE 2**
 
---

## Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `page` | número | Sí | Número de página para la paginación. Inicia en `1`. |
| `limit` | número | Sí | Cantidad de registros a retornar por página. |
| `fromDate` | texto (*string*) | Sí | Filtra las transacciones a partir de esta fecha. Formato: `AAAA-MM-DD`. |

---

## Respuesta

**200 OK**

Retorna un objeto JSON con los siguientes campos principales:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `data` | arreglo (*array*) | Lista de registros de transacciones. |
| `hashMore` | booleano | Indica si existen más páginas de resultados disponibles. |
| `count` | entero | Cantidad total de transacciones que coinciden con el filtro. |

### Objeto de Transacción (`data[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `date` | texto (*string*) | Fecha de la transacción (`AAAA-MM-DD`). |
| `quantitySold` | número | Cantidad de unidades vendidas. |
| `itemCode` | texto (*string*) | Código interno que identifica al producto. |
| `location` | texto (*string*) | Ubicación o sucursal donde se realizó la venta. |
| `salesPrice` | número | Precio unitario de venta. |
| `onHandRemaining` | número | Inventario físico (*stock*) restante después de la transacción. |

### Ejemplo de Respuesta

```json
{
  "data": [
    {
      "date": "2026-07-27",
      "quantitySold": 1,
      "itemCode": "MP-45I",
      "location": "Quito",
      "salesPrice": 17200,
      "onHandRemaining": 6
    },
    {
      "date": "2026-07-27",
      "quantitySold": 3,
      "itemCode": "TTA 160 AMP",
      "location": "Quito",
      "salesPrice": 600.67,
      "onHandRemaining": 18
    }
  ],
  "hashMore": true,
  "count": 4030
}