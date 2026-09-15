## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `GET` Consultar tareas de seguimiento

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/consultatareas
```

#### Header

| Encabezado | Valor |
|---|---|
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Query params

| Parámetro | Tipo | Descripción |
|---|---|---|
| `fromDate` | Fecha obligatoria, formato `yyyy-MM-dd` | Fecha inicial de la consulta. |
| `limite` | Integer opcional, entre 1 y 100 | Cantidad máxima de resultados. Si no se envía, se utiliza `100`. |

La consulta obtiene datos de tareas de seguimiento de tipo **LLAMADA DE PROSPECCIÓN** y **LLAMADA DE SEGUIMIENTO**, desde la **fecha de creación** indicada en `fromDate` hasta la fecha actual.

El valor predeterminado de `limite` es `100`. El consumidor puede solicitar una cantidad menor enviando un valor entre `1` y `100`.

#### Ejemplo de solicitud

```http
GET /consultatareas?fromDate=2026-01-01&limite=25
```

#### Ejemplo con cURL

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/consultatareas?fromDate=2026-01-01&limite=25' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

#### Ejemplo de respuesta

La respuesta satisfactoria es `200 OK` con la colección de tareas en formato JSON. Si no existen resultados, devuelve `[]`.

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | `fromDate` está ausente o no tiene el formato requerido, o `limite` está fuera del rango de 1 a 100. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |

Los errores se devuelven como un objeto JSON simple:

```json
{
  "success": false,
  "mensaje": "El parámetro 'limite' debe estar entre 1 y 100."
}
```
