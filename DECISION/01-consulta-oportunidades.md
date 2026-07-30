# Consultar de contacto
Permite obtener el listado de las 10 últimas oportunidades activas, ordenadas por su fecha de creación, en base al identificador de la empresa. El listado incluye únicamente oportunidades que cuenten con un registro asociado en Fracttal desde la plataforma decisioncloud módulo Gestión de Ventas. Adicionalmente, se complementa la respuesta con información obtenida mediante la API de Fracttal, usando el código de Fracttal almacenado en la oportunidad.

---
### Endpoint
`GET https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/oportunidadesempresa?identificadorEmpresa=0123456789`

---
###  HEADER
Content-Type: application/json
Autorization: Bearer apiKeyQueObtienesEnDecision

---
### QUERY PARAMS
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `identificadorEmpresa` | String - Máximo 13 caracteres | Parámetro que indica el identificador de la empresa de la cual se requiere obtener las oportunidades. |

---
### RESPONSE
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `numeroOportunidad` | String | Identificador alfanumérico de la oportunidad. |
| `valorTotalOportunidad` | Decimal | Valor total de la oportunidad. |
| `descripcionOportunidad` | String| Descripción de la oportunidad. |
| `fechaCreacionOportunidad` | Fehcha (AAAA-MM-DD) | Fecha de creación de la oportunidad. |
| `cerradoOportunidad` | bolean | Indicador booleano que determina si la oportunidad se encuentra cerrada (true) o activa (false). |
| `urlOportunidad` | String | URL de acceso directo a la oportunidad en decisioncloud Gestión de Ventas. |
| `nombreEmpresa` | String | Nombre de la empresa asociada a la oportunidad. |
| `idCode` | String | Código de la solicitud de trabajo generada en FRACTTAL. |
| `idStatus` | String | ID del estado actual de la solicitud de trabajo según FRACTTAL. |
| `woFolio` | String | Código de la orden de trabajo asociada. |
| `idStatusWorkOrder` | String | ID del estado actual de la orden de trabajo según FRACTTAL. |
| `dateMaintenance` | Fehcha (AAAA-MM-DD)  | Fecha planificada de mantenimiento de la orden de trabajo. |
| `creationDate` | Fehcha (AAAA-MM-DD)  | Fecha de creación o proceso de la orden de trabajo. |
| `reviewDate` | Fehcha (AAAA-MM-DD)  | Fecha de revisión de la orden de trabajo. |
| `woFinalDate` | Fehcha (AAAA-MM-DD)  | Fecha de finalización o cancelación de la orden de trabajo. |
| `code` | Strig  | Código del activo (equipo). |

---
### Estructura de la Respuesta
RESPUESTA 200 (OK)
```json
[
{
"numeroOportunidad": "OPO-0062054",
"valorTotalOportunidad": 800.0000,
"descripcionOportunidad": "Lorem ipsum dolor",
"cerradoOportunidad": false,
"fechaCreacionOportunidad": "2026-01-15",
"urlOportunidad": "https://ventas.mydecisioncloud.com/oportunidades/....",
"nombreEmpresa": "ACME S.A.",
"idCode": "1122",
"idStatus": "6",
"woFolio": "OT-37739",
"idStatusWorkOrder": "3",
"dateMaintenance": "2026-02-20T15:00:00+00:00",
"creationDate": "2026-02-21T16:29:34.493428+00:00",
"reviewDate": "2026-02-22T19:00:00.107655+00:00",
"woFinalDate": "2026-02-23T12:08:00.696832+00:00",
"code": "32002230"
},
{

"numeroOportunidad": "OPO-0062054",
"valorTotalOportunidad": 800.0000,
"descripcionOportunidad": "Lorem ipsum dolor",
"cerradoOportunidad": false,
"fechaCreacionOportunidad": "2026-01-15",
"urlOportunidad": "https://ventas.mydecisioncloud.com/oportunidades/....",
"nombreEmpresa": "ACME S.A.",
"idCode": "9600",
"idStatus": "12",
"woFolio": null,
"idStatusWorkOrder": null,
"dateMaintenance": null,
"creationDate": null,
"reviewDate": null,
"woFinalDate": null,
"code": null
}
]
```
#### ERROR 400 (BAD REQUEST)
    ● Motivos por los cuales se puede generar el error:
    ○ Algún elemento del JSON no es correcto o su formato no es correcto.
    ○ La ruta (endpoint) no es correcta.

#### ERROR 401 (NO AUTORIZADO)
    ● Motivos por los cuales se puede generar el error:
    ○ No se envió el header Authorization.
    ○ El token enviado no tiene el formato Bearer.
    ○ El token enviado no es correcto, ha expirado o ya no es válido.

#### ERROR 404 (NOT FOUND)
Motivos por los cuales se puede generar el error:

    ○ No se encontró ninguna empresa registrada con el identificadorEmpresa enviado.
#### ERROR 500 (INTERNAL SERVER ERROR)
Motivos por los cuales se puede generar el error:

    ○ Ocurrió un error interno al procesar la solicitud. En este caso, se debe informar al administrador.