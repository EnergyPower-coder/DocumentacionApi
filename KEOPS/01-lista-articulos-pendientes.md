# toReceive — Streamline

Obtiene la lista de artículos pendientes de recibir, basándose en las órdenes de compra abiertas registradas en el sistema Streamline.

---
###  Authentication

Usa **Basic Authentication**:

 El acceso esta en el archivo **API CLAVE 2**

---

### Endpoint

`GET http://api.energy.keops-corp.com/toReceive/`

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `limit` | entero | Sí | Número máximo de registros a retornar por página. Por defecto: `10000`. |
| `page` | entero | Sí | Número de página para la paginación. Inicia en `1`. |

### Respuesta

Retorna un objeto JSON con un arreglo `data`. Cada elemento representa un artículo pendiente de recepción:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `itemCode` | texto (*string*) | Código interno que identifica al artículo/producto. |
| `location` | texto (*string*) | Almacén o ubicación de entrega (ej. `"Quito"`). |
| `quantity` | número | Cantidad del artículo que se espera recibir. |
| `deliveryDate` | texto (*string*) | Fecha estimada de entrega en formato `AAAA-MM-DD`. |
| `orderNumber` | texto (*string*) | Número de referencia de la orden de compra. |
| `orderType` | texto (*string*) | Tipo de orden (ej. `"Purchase"`). |
| `infoField1` | texto (*string*) | Campo de fecha complementario (ej. fecha de creación de la orden). |

### Ejemplo de Respuesta

```json
{
  "data": [
    {
      "itemCode": "AF928M",
      "location": "Quito",
      "quantity": 1,
      "deliveryDate": "2026-07-28",
      "orderNumber": "24040R",
      "orderType": "Purchase",
      "infoField1": "2026-07-27"
    }
  ]
}