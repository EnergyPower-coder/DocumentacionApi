# toShip — Streamline Equipos

Obtiene una lista paginada de artículos o unidades de equipos pendientes de despacho/envío desde el sistema KEOPS.

---

### Endpoint

`GET http://api.energy.keops-corp.com/toShip_equipo/`

---

###  Authentication

Uses **Basic Authentication**:

 El acceso esta en el archivo **API CLAVE 2**
 
---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `limit` | entero | Sí | Cantidad de registros a retornar por página. | `10` |
| `page` | entero | Sí | Número de página para la paginación (inicia en `1`). | `1` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con los siguientes campos principales:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `data` | arreglo (*array*) | Lista de equipos pendientes de despacho. |
| `hashMore` | booleano | Indica si existen más páginas de resultados disponibles. |
| `count` | entero | Número total de registros disponibles en todas las páginas. |

**Campos del objeto de equipo (`data[]`):**

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `itemCode` | texto (*string*) | Código único que identifica al equipo. |
| `location` | texto (*string*) | Ubicación o almacén de destino del envío. |
| `quantity` | entero | Cantidad de unidades a despachar. |
| `shipmentDate` | texto (*string*) | Fecha programada de despacho (`AAAA-MM-DD`). |
| `orderNumber` | texto (*string*) | Número de la orden asociada al despacho. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "data": [
    {
      "itemCode": "YNS-625C",
      "location": "Quito",
      "quantity": 1,
      "shipmentDate": "2026-08-31",
      "orderNumber": "00007358"
    },
    {
      "itemCode": "YNS-100B",
      "location": "Quito",
      "quantity": 1,
      "shipmentDate": "2026-08-29",
      "orderNumber": "00007343"
    }
  ],
  "hashMore": true,
  "count": 18
}