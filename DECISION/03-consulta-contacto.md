# Consultar de contacto
Permite obtener el listado de contactos presentes en la plataforma decisioncloud módulo Gestión de Ventas en base al identificador de la empresa a la cual pertenecen.

---
### Endpoint
`GET https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/contactos?identificadorEmpresa=0123456789`

---
###  HEADER
Content-Type: application/json
Autorization: Bearer apiKeyQueObtienesEnDecision

---
### QUERY PARAMS
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `identificadorEmpresa` | String - Máximo 13 caracteres | Parámetro que indica el identificador de la empresa de la cual se requiere obtener los contactos. |

---
### RESPONSE
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `id` | String | identificador único del contacto. |
| `nombreCompleto` | String | Nombre completo del contacto. |
| `telefono` | String| Número telefónico del contacto. |
| `correoElectronico` | String | Correo electrónico del contacto. |
| `estado` | String | ACT (activo) o INA (inactivo). |
| `nombreCargo` | String | Nombre del cargo asociado al contacto. |
| `nombreEmpresa` | String | Nombre de la empresa a la cual pertenece el contacto. |

---
### Estructura de la Respuesta
RESPUESTA 200 (OK)
```json
[
{
"id": "454n3959e9d949eh8d039",
"nombreCompleto": "JUAN PÉREZ",
"telefono": "23457392",

"correoElectronico": "example@example.com",
"estado": "ACT",
"nombreCargo": "COORDINADOR",
"nombreEmpresa": "AGIP OIL ECUADOR B. V."
},
{
"id": "454n3959e9dsfdsi8358d039",
"nombreCompleto": "MARÍA LONDOÑO",
"telefono": "09857394",
"correoElectronico": "example@example.com",
"estado": "ACT",
"nombreCargo": "ADMINISTRADOR",
"nombreEmpresa": "AGIP OIL ECUADOR B. V."
},
...
]
```
##### ERROR 400 (BAD REQUEST)
    ● Motivos por los cuales se puede generar el error:
    ○ El parámetro identificadorEmpresa no fue enviado.
    ○ El parámetro identificadorEmpresa supera los 13 caracteres permitidos.
    ○ El identificador enviado coincide con más de una empresa.

#### ERROR 401 (NO AUTORIZADO)
    ● Motivos por los cuales se puede generar el error:
    ○ No se envió el header Authorization.
    ○ El token enviado no tiene el formato Bearer.
    ○ El token enviado no es correcto, ha expirado o ya no es válido.

#### ERROR 404 (NOT FOUND)
    ● Motivos por los cuales se puede generar el error:
    ○ No se encontró ninguna empresa registrada con el identificadorEmpresa enviado.

##### ERROR 500 (INTERNAL SERVER ERROR)
    ● Motivos por los cuales se puede generar el error:
    ○ Ocurrió un error interno al procesar la solicitud. En este caso, se debe informar al administrador.