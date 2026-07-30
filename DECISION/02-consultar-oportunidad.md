# Consultar Oportunidad por número
Permite consultar información comercial principal de una oportunidad registrada en la plataforma decisioncloud módulo Gestión de Ventas, utilizando como criterio de búsqueda el número exacto de la oportunidad.

---
### Endpoint
`GET https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/oportunidad?numeroOportunidad=1234`

---
###  HEADER
Content-Type: application/json
Autorization: Bearer apiKeyQueObtienesEnDecision

---
### QUERY PARAMS
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `numeroOportunidad` | String | Número exacto de oportunidad registrado en decisioncloud Gestión de Ventas. |

---
### BODY (Requerido)
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `ruc` | String | Número de RUC de la empresa asociada a la oportunidad. |
| `razonSocial` | String | Razón social de la empresa asociada a la oportunidad. |
| `descripcionOportunidad` | Descripción de la oportunidad en texto plano. |
| `condicionesOferta` | String | Condiciones de negociación de la oferta vigente en texto plano. |
| `versionOferta` | String | Versión de la última oferta activa de la oportunidad. |
| `valor` | decimal | Valor de la última oferta activa sin IVA. |

---
### Estructura de la Respuesta
RESPUESTA 200 (OK)
```json
{
"ruc": "0999999999001",
"razonSocial": "EXAMPLE S.A.",
"descripcionOportunidad": "Descripcion de la oportunidad",
"condicionesOferta": "Condiciones de negociación de la oferta",
"versionOferta": "2",
"valor": 15000.00
}
```
#### ERROR 400 (BAD REQUEST)
    - Motivos por los cuales se puede generar el error:
    - El parámetro numeroOportunidad no fue enviado.
    - El parámetro numeroOportunidad fue enviado vacío.
    - El token pertenece a una empresa suscriptora distinta de ENERGY POWER.
    - El recurso no está disponible para la empresa suscriptora del token.

##### ERROR 401 (NO AUTORIZADO)
    - Motivos por los cuales se puede generar el error:
    - No se envió el header Authorization.
    - El token enviado no tiene el formato Bearer.
    - El token enviado no es correcto, ha expirado o ya no es válido.

#### ERROR 500 (INTERNAL SERVER ERROR)
    - Motivos por los cuales se puede generar el error: ○ Ocurrió un error interno al procesar la solicitud. En este caso, se debe informar al administrador.