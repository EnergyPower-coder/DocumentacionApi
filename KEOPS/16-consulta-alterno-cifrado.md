## Keop Alternos productos

Consulta los productos alternos disponibles en el sistema KEOPS para un artículo específico.

### Endpoint

`GET http://api.energy.keops-corp.com/consultaalterno/`

### Query Parameters

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `parametros` | string | Sí | Cadena codificada en Base64 + URL-encode que contiene los parámetros serializados en formato PHP. Se genera automáticamente en el pre-request script. |

### Pre-request Script

Antes de enviar la solicitud, el script pre-request construye automáticamente el valor del parámetro `parametros` siguiendo estos pasos:

1. Define un objeto con los campos requeridos:
    - `codemp` — Código de empresa (ej. `"01"`)
        
    - `codart` — Código del artículo a consultar (ej. `"400404-00259"`)
        
    - `clave` — Clave de autenticación de la API en el archivo API CLAVE 5
        
2. Serializa el objeto en formato PHP (`a:N:{s:K:"key";s:V:"value";...}`)
    
3. Codifica el resultado en Base64 (`btoa`)
    
4. Aplica URL-encoding (`encodeURIComponent`)
    
5. Guarda el resultado en la variable de entorno `{{parametros}}`
    

### Variables de entorno utilizadas

| Variable | Descripción |
| --- | --- |
| `parametros` | Generada automáticamente por el pre-request script antes de cada llamada. |

### Respuesta

La API devuelve una respuesta HTML generada por ScriptCase. En caso de error de autenticación o parámetros inválidos, se muestra una página de error HTML con el detalle del problema.

**Código de estado esperado:** `200 OK`