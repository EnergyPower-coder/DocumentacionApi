## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `PUT` Bloquear ofertas de una oportunidad

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/bloquearoferta/{identificacion}
```

#### Header

| Encabezado | Valor |
|---|---|
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Path params

| Parámetro | Tipo | Descripción |
|---|---|---|
| `identificacion` | String obligatorio | ID o número de la oportunidad. |

#### Ejemplo de solicitud

```http
PUT /bloquearoferta/OP-2026-0042
```

#### Ejemplo con cURL

```bash
curl --request PUT \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/bloquearoferta/OP-2026-0042' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

#### Ejemplo de respuesta

```json
{
  "success": true,
  "mensaje": "Oferta de la oportunidad bloqueada con éxito"
}
```

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | La identificación es obligatoria o la oportunidad no está disponible para ENERGY POWER. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `404 Not Found` | No existe una oportunidad con la identificación indicada. |
| `500 Internal Server Error` | No fue posible bloquear la oferta por un error interno. |

Los errores se devuelven como un objeto JSON simple:

```json
{
  "success": false,
  "mensaje": "No existe una oportunidad con la identificación indicada."
}
```
