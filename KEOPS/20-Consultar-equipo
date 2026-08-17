## Consultar Equipo

Obtiene la información de equipos desde la API de KEOPS basándose en un conjunto de parámetros serializados y codificados.

**Endpoint:** `GET http://api.energy.keops-corp.com/consultaequipo/`

---

### Parámetros de consulta (Query Parameters)

| Parámetro | Tipo | Descripción |
| --- | --- | --- |
| `parametros` | string | Objeto con codificación URL, Base64 y serializado en PHP que contiene los criterios de filtro. Generado automáticamente mediante el script de pre-solicitud. |

---

### Script de pre-solicitud (Pre-request Script)

Antes de enviar la solicitud, el script de pre-solicitud construye la variable `parametros` automáticamente:

1. Define un objeto de filtro con los siguientes campos:
    - `codemp` – Código de empresa (ej. `"01"`)
    - `tipo` – Código de tipo de equipo (ej. `"TI2"`)
    - `modelo` – Código de modelo (ej. `"01"`)
2. Serializa el objeto en PHP a una cadena de texto.
3. Lo codifica en Base64.
4. Aplica codificación URL al resultado.
5. Almacena el valor final en la variable de entorno `parametros`.

---

### Respuesta

**Éxito (200)**

```json
{
  "metodo": "consultaequipo",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "equipos": [
      {
        "destip": "Equipment type description",
        "desmod": "Model description",
        "codprod": "Product code",
        "estpro": "Status code",
        "desest": "Status description",
        "fecing": "Entry date",
        "fecres": "Resolution date",
        "fecarr": "Arrival date",
        "fecped": "Order date",
        "vendedor": "Salesperson"
      }
    ]
  }
}