## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `GET` Consultar contactos de una empresa

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos
```

#### Header

| Encabezado | Valor |
|---|---|
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Query params

| Parámetro | Tipo | Descripción |
|---|---|---|
| `idEmpresa` | String condicional, máximo 32 caracteres | ID interno exacto de la empresa. |
| `ruc` | String condicional, máximo 13 caracteres | RUC exacto de la empresa. |
| `nombreContacto` | String opcional, máximo 256 caracteres | Nombre completo o parcial, sin distinguir mayúsculas. |
| `estado` | String opcional | Estado del contacto: `ACT` o `INA`. |
| `limite` | Integer opcional, entre 1 y 100 | Cantidad máxima de resultados. Si no se envía, se utiliza `100`. |

Debe enviarse al menos `idEmpresa` o `ruc`. Si se envían ambos, deben identificar la misma empresa.

La consulta permite buscar:

- Por `idEmpresa`.
- Por `ruc`.
- Por `idEmpresa` y `ruc` conjuntamente.
- Opcionalmente, filtrar por `nombreContacto`, `estado` y `limite`.

El valor predeterminado de `limite` es `100`. El consumidor puede solicitar una cantidad menor enviando un valor entre `1` y `100`.

#### Ejemplos de solicitud

```http
GET /contactos?idEmpresa=0123456789ABCDEF
GET /contactos?ruc=1792456789001
GET /contactos?idEmpresa=6b1598535eac2f131f36eaf2487&nombreContacto=VALERIA
GET /contactos?ruc=1792456789001&estado=ACT&limite=10
```

#### Ejemplos con cURL

Consulta por RUC:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos?ruc=1792456789001' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

Consulta por ID de empresa y filtros opcionales:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos?idEmpresa=6b1598535eac2f131f36eaf2487&nombreContacto=VALERIA&estado=ACT&limite=10' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

#### Ejemplo de respuesta

```json
[
  {
    "id": "6a9598535eac2f131f36eaf2486",
    "rucEmpresa": "1792456789001",
    "nombreCompleto": "VALERIA CEDEÑO",
    "correoElectronico": "valeria.cedeno@example.com",
    "telefono": "0994567821",
    "estado": "ACT",
    "nombreCargo": "JEFE DE MANTENIMIENTO",
    "nombreEmpresa": "INDUSTRIAS ANDINAS DEL PACÍFICO S.A."
  }
]
```

Si no hay coincidencias, la respuesta es `200 OK` con `[]`.

La consulta devuelve directamente el array, sin envolverlo en una propiedad adicional.

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | Faltan filtros obligatorios, los filtros no son válidos, `idEmpresa` y `ruc` pertenecen a empresas diferentes o `limite` está fuera del rango de 1 a 100. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `404 Not Found` | No existe una empresa con los parámetros enviados. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |

Los errores se devuelven como un objeto JSON simple:

```json
{
  "success": false,
  "mensaje": "Los parámetros enviados no son válidos"
}
```
