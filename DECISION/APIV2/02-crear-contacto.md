## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2 `POST` Crear contacto

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos
```

#### Header

| Encabezado | Valor |
|---|---|
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Body request (requerido)

| Parámetro           | Tipo                                      | Descripción                                       |
| ------------------- | ----------------------------------------- | ------------------------------------------------- |
| `rucEmpresa`        | String obligatorio, máximo 13 caracteres  | RUC de la empresa a la que pertenece el contacto. |
| `nombreCompleto`    | String obligatorio, máximo 256 caracteres | Nombre completo del contacto.                     |
| `correoElectronico` | String obligatorio, máximo 128 caracteres | Correo electrónico válido del contacto.           |
| `telefono`          | String opcional, máximo 128 caracteres    | Teléfono del contacto.                            |
| `nombreCargo`       | String obligatorio, máximo 128 caracteres | Cargo del contacto; si no existe, se crea.        |

#### Ejemplo de solicitud

```json
{
  "rucEmpresa": "1792456789001",
  "nombreCompleto": "VALERIA CEDEÑO",
  "correoElectronico": "valeria.cedeno@example.com",
  "telefono": "0994567821",
  "nombreCargo": "JEFE DE MANTENIMIENTO"
}
```

#### Ejemplo con cURL

```bash
curl --request POST \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
    "rucEmpresa": "1792456789001",
    "nombreCompleto": "VALERIA CEDEÑO",
    "correoElectronico": "valeria.cedeno@example.com",
    "telefono": "0994567821",
    "nombreCargo": "JEFE DE MANTENIMIENTO"
  }'
```

#### Ejemplo de respuesta `200 OK`

```json
{
  "success": true,
  "mensaje": "Contacto creado con éxito"
}
```

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | El cuerpo JSON es incorrecto, falta un campo obligatorio, un valor supera su longitud máxima o ya existe un contacto con el correo enviado. |
| `401 Unauthorized` | No se envió `Authorization`, el token no utiliza el prefijo `Bearer` o el token es inválido. |
| `404 Not Found` | No existe una empresa registrada con el `rucEmpresa` enviado. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |

Los errores se devuelven como un objeto JSON simple:

```json
{
  "success": false,
  "mensaje": "No existe una empresa con el RUC indicado"
}
```
