## Vencido x Vendedor

Obtiene los saldos vencidos agrupados por vendedor para una empresa determinada.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/vencidoxvendedor/`

---

### Parámetros de consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `parametros` | string | Sí | Objeto con codificación URL, Base64 y serializado en PHP que contiene los parámetros de filtro (ver Script de pre-solicitud). |

---

### Script de pre-solicitud (Pre-request Script)

Antes de enviar la solicitud, el script de pre-solicitud construye la variable `parametros` automáticamente:

1. Define un objeto de parámetros con:
    - `codemp` — Código de empresa (ej. `"01"`)
    - `vendedor` — Código de vendedor (ej. `"PD"`)
2. Serializa el objeto en PHP.
3. Lo codifica en Base64.
4. Aplica codificación URL al resultado.
5. Lo almacena en la variable de entorno `{{parametros}}`.

Para consultar un vendedor o empresa diferente, actualiza `codemp` y `vendedor` en el script de pre-solicitud.

---

### Respuesta

**Éxito — HTTP 200**

```json
{
  "metodo": "vencidoxvendedor",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "Vencimientos": [
      {
        "codcli": "MI84690",
        "nomcli": "MICROCIRCUITOS L&R S.A.S.",
        "codven": "PD",
        "nomven": "PONCE DIEGO",
        "ven30": 288.75,
        "ven60": 0,
        "ven90": 0,
        "ven120": 0,
        "venmas120": 0
      }
    ]
  }
}