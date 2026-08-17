## Guías de Remisión

Obtiene una lista de guías de remisión para una empresa determinada dentro de un rango de fechas especificado.

---

### Parámetros de consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `codemp` | string | Sí | Código de empresa (ej. `01`) |
| `clave` | string | Sí | Clave de autenticación / contraseña para la API ubicado en API CALVE 5 |
| `fecini` | string | Sí | Fecha de inicio del rango de consulta (`AAAA-MM-DD`) |
| `fecfin` | string | Sí | Fecha de fin del rango de consulta (`AAAA-MM-DD`) |

---

### Respuesta

Devuelve un objeto JSON con los siguientes campos:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | string | Nombre del método invocado (`guiasremision`) |
| `respuesta` | integer | Código de respuesta tipo HTTP (`200` = éxito) |
| `descripcion` | string | Mensaje descriptivo del resultado |
| `datos` | array | Lista de registros de guías de remisión |

Cada elemento dentro de `datos` contiene:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `identificacion` | string | Identificación fiscal (RUC) del cliente |
| `codcli` | string | Código interno del cliente |
| `nomcli` | string | Nombre del cliente |
| `numerocierre` | string | Número de cierre / liquidación |
| `guia` | string | Número de guía de remisión |
| `fecha_fin` | string | Fecha de fin / entrega de la guía (`AAAA-MM-DD`) |
| `serie` | string | Identificador de serie del documento |
| `ubicacion` | string | Dirección / ubicación de entrega |
| `asesor` | string | Código del asesor comercial asignado a la guía |

---

### Ejemplo de respuesta

```json
{
  "metodo": "guiasremision",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "identificacion": "1791843398001",
      "codcli": "MA1074",
      "nomcli": "MANATEE AMAZON EXPLORER CIA  LTDA",
      "numerocierre": "00006517",
      "guia": "T0010111",
      "fecha_fin": "2025-06-28",
      "serie": "PG2503005203",
      "ubicacion": "barco Manatee ubicado en Puerto Providencia Shushufindi",
      "asesor": "BV"
    }
  ]
}