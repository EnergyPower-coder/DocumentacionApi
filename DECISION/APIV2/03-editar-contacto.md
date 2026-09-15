## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `PUT` Editar contacto

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
| `idUsuario` | Identificador de un usuario válido de la plataforma. |

#### Body request (requerido)

| Parámetro | Tipo | Descripción |
|---|---|---|
| `id` | String obligatorio, máximo 32 caracteres | ID del contacto que se editará. |
| `rucEmpresa` | String obligatorio, máximo 13 caracteres | RUC de la empresa a la que pertenece el contacto. |
| `nombreCompleto` | String obligatorio, máximo 256 caracteres | Nombre completo del contacto. |
| `correoElectronico` | String obligatorio, máximo 128 caracteres | Correo electrónico válido del contacto. |
| `telefono` | String opcional, máximo 128 caracteres | Teléfono del contacto. |
| `nombreCargo` | String obligatorio, máximo 128 caracteres | Cargo asignado al contacto. |
| `estado` | String obligatorio | Estado del contacto: `ACT` o `INA`. |

#### Ejemplo de solicitud

```json
{
  "id": "6a9598535eac2f131f36eaf2486",
  "rucEmpresa": "1792456789001",
  "nombreCompleto": "VALERIA CEDEÑO MORA",
  "correoElectronico": "valeria.cedeno@example.com",
  "telefono": "0987654312",
  "nombreCargo": "GERENTE DE MANTENIMIENTO",
  "estado": "ACT"
}
```

#### Ejemplo con cURL

```bash
curl --request PUT \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/contactos' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'idUsuario: 6c2598535eac2f131f36eaf2488' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
    "id": "6a9598535eac2f131f36eaf2486",
    "rucEmpresa": "1792456789001",
    "nombreCompleto": "VALERIA CEDEÑO MORA",
    "correoElectronico": "valeria.cedeno@example.com",
    "telefono": "0987654312",
    "nombreCargo": "GERENTE DE MANTENIMIENTO",
    "estado": "ACT"
  }'
```

#### Ejemplo de respuesta `200 OK`

```json
{
  "success": true,
  "mensaje": "Contacto editado con éxito"
}
```

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | El cuerpo JSON es incorrecto, falta un campo obligatorio, el usuario no es válido o los datos incumplen una regla de negocio. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `404 Not Found` | No existe el contacto o la empresa indicada. |
| `500 Internal Server Error` | Ocurrió un error interno al procesar la solicitud. |

Los errores se devuelven con `success: false` y el detalle en `mensaje`.
