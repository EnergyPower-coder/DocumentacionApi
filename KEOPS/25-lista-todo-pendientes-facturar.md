## Egresos Sin Facturar

Obtiene la lista de notas de entrega (egresos) no facturadas para un cliente determinado, hasta la fecha de corte actual. Este endpoint forma parte de la API de KEOPS y se utiliza para identificar cargos pendientes que aún no han sido facturados.

---

## Parámetros de Consulta (Query Parameters)

| Parámetro        | Descripción                                          | Ejemplo         |
| ---------------- | ---------------------------------------------------- | --------------- |
| `codemp`         | Código de la empresa                                 | `01`            |
| `clave`          | Clave de acceso / Secreto de API para autenticación  | **API CLAVE 1** |
| `identificacion` | Número de identificación fiscal del cliente (RUC/CI) | `1790368718001` |

---

## Respuesta (Response)

### Campos de nivel superior

| Campo         | Tipo   | Descripción                                                     |
| ------------- | ------ | --------------------------------------------------------------- |
| `metodo`      | string | Nombre del método invocado (`unbilled`)                         |
| `respuesta`   | number | Código de estado tipo HTTP (`200` = éxito)                      |
| `descripcion` | string | Mensaje del resultado legible por personas                      |
| `datos`       | object | Carga útil principal que contiene los resultados de la consulta |

### Objeto `datos`

| Campo                       | Tipo           | Descripción                                             |
| --------------------------- | -------------- | ------------------------------------------------------- |
| `identificacion_consultada` | string         | Número de identificación del cliente que fue consultado |
| `fecha_corte`               | string (fecha) | Fecha de corte para la consulta (`AAAA-MM-DD`)          |
| `egresos`                   | array          | Lista de registros de notas de entrega no facturadas    |

### Elementos del arreglo `egresos`

| Campo          | Tipo             | Descripción                                                   |
| -------------- | ---------------- | ------------------------------------------------------------- |
| `fecha`        | string (fecha)   | Fecha de la nota de entrega (`AAAA-MM-DD`)                    |
| `nota_entrega` | string           | Número de nota de entrega                                     |
| `bodega`       | string           | Código de la bodega o almacén                                 |
| `costo_t`      | string (decimal) | Costo total de los artículos                                  |
| `total_neto`   | string (decimal) | Monto total neto (antes de IVA)                               |
| `facturado`    | boolean          | Indica si el registro ha sido facturado (`false` = pendiente) |
| `total_iva`    | string (decimal) | Monto del IVA                                                 |
| `tipo_orden`   | string           | Tipo de orden (ej. `EOC`)                                     |
| `orden_tp`     | string           | nulo (`null`)                                                 |

```json
{
  "metodo": "unbilled",
  "respuesta": 200,
  "descripcion": "Consulta exitosa. Egresos sin facturar.",
  "datos": {
    "identificacion_consultada": "'1790368718001'",
    "fecha_corte": "2026-08-28",
    "egresos": [
      {
        "fecha": "2026-03-21",
        "nota_entrega": "01151112",
        "bodega": "01",
        "costo_t": "10.16",
        "total_neto": "13.81",
        "facturado": false,
        "total_iva": "2.07",
        "tipo_orden": "EOC",
        "orden_tp": "43833-001"
      }
    ]
  }
}
```
