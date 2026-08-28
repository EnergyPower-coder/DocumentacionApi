## Consultar Contacto

Obtiene la lista de contactos asociados a un cliente específico, identificado por su número de RUC o cédula.

**Endpoint:** `GET http://api.energy.keops-corp.com/consultacontacto/`

---

### Parámetros de consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `parametros` | string | Sí | Objeto con codificación URL, Base64 y serializado en PHP que contiene los filtros de búsqueda. Se genera automáticamente mediante el script de pre-solicitud. |

---

### Estructura del objeto de parámetros

El valor de `parametros` se construye en el script de pre-solicitud a partir de los siguientes campos:

| Campo | Tipo | Descripción | Ejemplo |
| --- | --- | --- | --- |
| `codemp` | string | Código de empresa | `"01"` |
| `rucced` | string | Número de RUC o cédula del cliente | `"0101022119001"` |

El script de pre-solicitud serializa este objeto utilizando el formato de serialización de PHP, luego lo codifica en Base64 y en URL antes de asignarlo a la variable de entorno `parametros`.

---

### Respuesta

**Éxito (200)**

```json
{
  "metodo": "consultacontacto",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": {
    "contactos": [
      {
        "rucced": "0101022119001",
        "nombre": "FABIAN ALMEIDA",
        "correo": "",
        "telefono": "0998588485"
      }
    ]
  },
  "cantidadregistros": 3
}