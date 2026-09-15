## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/empresas
```

#### Header

| Encabezado | Valor |
|---|---|
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Query params

| Parámetro | Tipo | Descripción |
|---|---|---|
| `ruc` | String condicional, máximo 13 caracteres | RUC exacto de la empresa. |
| `nombre` | String condicional, máximo 128 caracteres | Nombre completo o parcial, sin distinguir mayúsculas. |
| `limite` | Integer opcional, entre 1 y 100 | Cantidad máxima de resultados. Si no se envía, se utiliza `100`. |

Debe enviarse al menos uno. Si se envían ambos, se aplican conjuntamente.

La consulta permite buscar:

- Por `ruc`.
- Por `nombre`, de forma completa o parcial.
- Por `ruc` y `nombre` conjuntamente.
- Opcionalmente, limitar la cantidad de resultados con `limite`.

El valor predeterminado de `limite` es `100`. El consumidor puede solicitar una cantidad menor enviando un valor entre `1` y `100`.

#### Ejemplos de solicitud

```http
GET /empresas?ruc=1792456789001
GET /empresas?nombre=INDUSTRIAS%20ANDINAS&limite=25
GET /empresas?ruc=1792456789001&nombre=INDUSTRIAS%20ANDINAS&limite=10
```

#### Ejemplos con cURL

Consulta por RUC:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/empresas?ruc=1792456789001' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

Consulta por nombre parcial:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/empresas?nombre=INDUSTRIAS%20ANDINAS&limite=25' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

Consulta por RUC y nombre:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/empresas?ruc=1792456789001&nombre=INDUSTRIAS%20ANDINAS&limite=10' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

#### Ejemplo de respuesta

```json
[
  {
    "idEmpresa": "0123456789ABCDEF",
    "ruc": "1792456789001",
    "nombre": "INDUSTRIAS ANDINAS DEL PACÍFICO S.A.",
    "objetoSocial": null,
    "fechaInicioOperaciones": null,
    "ciudad": "QUITO",
    "direccion": "Av. de los Robles N45-120 y Los Cipreses",
    "telefono": "+593 99 456 7821",
    "sitioWeb": "https://industrias-andinas.example/",
    "observacion": null
  }
]
```

`fechaInicioOperaciones` utiliza el formato `yyyy-MM-dd`. Los resultados se ordenan por nombre e ID. Si no existen coincidencias, se devuelve `HTTP 200 OK` con `[]`.

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | No se envió ningún filtro, un parámetro supera la longitud permitida o `limite` está fuera del rango de 1 a 100. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |

Los errores se devuelven como un objeto JSON simple:

```json
{
  "success": false,
  "mensaje": "Debe enviar al menos uno de los parámetros 'ruc' o 'nombre'."
}
```
