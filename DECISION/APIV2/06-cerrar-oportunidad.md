## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `POST` Cerrar una oportunidad

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidad/cierre
```

#### Header

| Encabezado | Valor |
|---|---|
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Body request (requerido)

| Parámetro | Tipo | Descripción |
|---|---|---|
| `numeroOportunidad` | String obligatorio | Número exacto de la oportunidad. |
| `motivoCierre` | String obligatorio | Motivo activo parametrizado para la unidad de negocio. |
| `fechaCierre` | String obligatorio | Fecha y hora de cierre. |
| `descripcion` | String opcional | Información adicional del cierre. |

#### Ejemplo de solicitud

```json
{
  "numeroOportunidad": "OP-2026-0042",
  "motivoCierre": "GANADA",
  "fechaCierre": "2026-08-14T10:30:00.0000000-05:00",
  "descripcion": "Cierre registrado desde el sistema externo"
}
```

#### Ejemplo con cURL

```bash
curl --request POST \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidad/cierre' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
    "numeroOportunidad": "OP-2026-0042",
    "motivoCierre": "GANADA",
    "fechaCierre": "2026-08-31T10:30:00.0000000-05:00",
    "descripcion": "Instalación de sistema eléctrico en nueva planta"
  }'
```

#### Ejemplo de respuesta

```json
{
  "success": true,
  "mensaje": "Oportunidad cerrada correctamente."
}
```

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | El cuerpo es incorrecto, falta información obligatoria o la oportunidad no puede cerrarse. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `404 Not Found` | No existe la oportunidad indicada. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |
