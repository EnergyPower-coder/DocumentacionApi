## Consulta Factura

Obtiene la información de facturas para una empresa y número de proforma determinados desde la API de KEOPS.

**URL Base:** `http://api.energy.keops-corp.com/consultafactura/`

---

### Parámetros de consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `parametros` | string | Sí | Objeto con codificación URL, Base64 y serializado en PHP que contiene los filtros de consulta. Se genera automáticamente mediante el script de pre-solicitud. |

---

### Script de pre-solicitud (Pre-request Script)

Antes de enviar la solicitud, un script de pre-solicitud construye la variable `parametros` automáticamente:

1. Define un objeto plano con los campos de filtro (ej. `codemp`, `proforma`).
2. Serializa el objeto en PHP a una cadena de texto (ej. `a:2:{s:6:"codemp";s:2:"01";...}`).
3. Codifica la cadena serializada en Base64.
4. Aplica codificación URL (URL-encode) a la cadena Base64.
5. Almacena el resultado en la variable de entorno `parametros`, la cual se inyecta en la cadena de consulta.

**Valores de filtro predeterminados utilizados en el script:**

- `codemp`: `01`
- `proforma`: `1-3336 DP`

---

### Ejemplo de respuesta

```json
{
  "metodo": "consultafactura",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "facturas": [
      {
        "numdoc": "00028485",
        "fecha": "2019-07-22",
        "tipo": "F",
        "tipdoc": "F",
        "numcie": "00001929",
        "observ": "CIERRE N° 1929",
        "totnet": 9720,
        "totiva": 1166.4
      }
    ]
  },
  "cantidadregistros": 3
}