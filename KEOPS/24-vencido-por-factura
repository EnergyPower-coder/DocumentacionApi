## Vencido x Factura

Obtiene los saldos vencidos por factura.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/vencidoxvendedor/`

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
  "metodo": "vencidoxfactura",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "Vencimientos": [
      {
        "numfac": "FC00058891",
        "codcli": "MU82750",
        "nomcli": "MURILLO GAMEZ ANYI PAOLA",
        "codven": "XCH",
        "fecemi": "2026-02-02",
        "fecven": "2026-02-02",
        "facturado": 1344.35,
        "retenido": 0,
        "abonado": 2544.35,
        "ven15": 0,
        "ven30": 0,
        "ven45": 0,
        "ven60": 0,
        "ven90": 0,
        "venmas90": -1200
      }
    ]
  }
}
```
