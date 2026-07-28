# Lista de Coincidencia de Productos — KEOPS

Obtiene una lista de productos del sistema KEOPS que coinciden con un término de búsqueda o código especificado. Los resultados incluyen información de precios, disponibilidad de _stock_, descuentos y proveedores para cada producto coincidente.

### Endpoint

`GET http://api.energy.keops-corp.com/listacoincidenciaproducto/`

---

### Parámetros de Consulta (Query Params)

| Parámetro    | Tipo             | Requerido | Descripción                                                                                                                                  |
| ------------ | ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `parametros` | texto (_string_) | Sí        | Objeto codificado en formato URL-encoded, Base64 y serializado en PHP que contiene los parámetros de búsqueda (ver Script de Pre-solicitud). |

---

### Estructura del Objeto de Parámetros (`parametros`)

El valor del parámetro `parametros` se construye mediante el script de pre-solicitud (_pre-request script_) serializando en PHP el siguiente objeto, aplicando codificación Base64 y finalmente codificación URL (URL-encoding) al resultado:

| Campo    | Tipo             | Descripción                              |
| -------- | ---------------- | ---------------------------------------- |
| `codemp` | texto (_string_) | Código de la empresa (ej. `"01"`).       |
| `codart` | texto (_string_) | Código del artículo o producto a buscar. |
| `clave`  | texto (_string_) | Clave de autenticación / contraseña.     |

---

### Script de Pre-solicitud (Pre-request Script)

El script automatizado construye y asigna la variable de entorno `parametros`:

1. Construye un arreglo asociativo serializado en PHP utilizando `codemp`, `codart` y `clave`.
2. Aplica codificación Base64 a la cadena serializada.
3. Aplica codificación URL al resultado obtenido en Base64.
4. Almacena el valor final en la variable de entorno `parametros`.

---

### Respuesta

**Éxito (200 OK)**

```json
{
  "metodo": "listacoincidenciaproducto",
  "respuesta": 200,
  "descripcion": "La consulta fue correcta.",
  "datos": [
    {
      "codigo": "400921-00419",
      "nombre": "BOMBA DE AGUA",
      "marca": "REPUESTOS DOOSAN",
      "modelo": "BOMBAS DE AGUA",
      "costo": 172.99,
      "precio": 260.15,
      "descuento": 0.1,
      "existencia": 0,
      "proveedor": "PARTS SUPPLY INC",
      "estado": ""
    }
  ],
  "cantidadregistros": 139
}
```
