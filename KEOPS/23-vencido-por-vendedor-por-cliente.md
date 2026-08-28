## Vencido x Vendedor

Obtiene el diario de caja por vendendodr y cliente

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/diariocajaxvendedorxcliente/`

---

### Parámetros de consulta (Query Parameters)

| Parámetro    | Tipo   | Requerido | Descripción                                                                                                                   |
| ------------ | ------ | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `parametros` | string | Sí        | Objeto con codificación URL, Base64 y serializado en PHP que contiene los parámetros de filtro (ver Script de pre-solicitud). |

---

### Script de pre-solicitud (Pre-request Script)

Antes de enviar la solicitud, el script de pre-solicitud construye la variable `parametros` automáticamente:

1. Define un objeto de parámetros con:
   - `codemp` — Código de empresa (ej. `"01"`)
   - `vendedor` — Código de vendedor (ej. `"PD"`)
   - `fecini` — Fecha de inicio (ej. `"2019-01-14"`)
   - `fecfin` — Fecha de fin (ej. `"2019-10-14"`)
2. Serializa el objeto en PHP.
3. Lo codifica en Base64.
4. Aplica codificación URL al resultado.
5. Lo almacena en la variable de entorno `{{parametros}}`.

---

### Respuesta

**Éxito — HTTP 200**

```json
{
  "metodo": "vencidoxvendedor",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "Diariocaja": [
      {
        "codven": "PD",
        "nomven": "PONCE DIEGO",
        "cobrado": 22247.33,
        "mes": "Julio",
        "anio": "2019",
        "codcli": "RO443",
        "nomcli": "ROSAPRIMA CIA. LTDA."
      }
    ]
  }
}
```
