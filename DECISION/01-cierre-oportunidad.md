# Cierre Oportunidad
Permite cerrar una oportunidad registrada en la plataforma decisioncloud módulo Gestión de
Ventas, utilizando como criterio de búsqueda el número exacto de la oportunidad.

---
### Endpoint
`GET https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/oportunidad/cierre`

---
###  HEADER
Content-Type: application/json
Autorization: Bearer apiKeyQueObtienesEnDecision

---
### BODY (Requerido)
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `numeroOportunidad` | String | Número exacto de oportunidad registrado en decisioncloud Gestión de Ventas. |
| `motivoCierre` | String | Motivo de cierre de la oportunidad. Debe corresponder al nombre exacto de un motivo de cierre activo parametrizado para la unidad de negocio de la oportunidad. |
| `fechaCierre` | String | Fecha en la que se registra el cierre de la oportunidad. Formato requerido: yyyy-MM-ddTHH:mm:ss.fffffffK. Ejemplo: 2026-05-23T17:32:44.0000000 |
| `descripcion` | String | Observación o detalle adicional asociado al cierre de la oportunidad. |

---
### Estructura de la Respuesta
RESPUESTA 200 (OK)
```json
{
"success": true,
"mensaje": "Oportunidad cerrada correctamente."
}
```
Descripción de los campos:
    - success: Indica si la operación fue procesada correctamente.
    - mensaje: Mensaje descriptivo del resultado de la operación.

###  ERROR 400 (BAD REQUEST)
    - Motivos por los cuales se puede generar el error:
    - El body de la solicitud no fue enviado.
    - El campo numeroOportunidad no fue enviado o fue enviado vacío.
    - El campo motivoCierre no fue enviado o fue enviado vacío.
    - El campo fechaCierre no fue enviado, fue enviado vacío o no cumple el formato requerido.El motivo de cierre no se encuentra parametrizado para la unidad de negocio.
    - La oportunidad ya se encuentra cerrada o no se encuentra en estado permitido para cierre.
    - El token pertenece a una empresa suscriptora distinta de ENERGY POWER o el
    recurso no está disponible para la empresa suscriptora del token.

### ERROR 401 (NO AUTORIZADO)
    - Motivos por los cuales se puede generar el error:
    - No se envió el header Authorization.
    - El token enviado no tiene el formato Bearer.
    - El token enviado no es correcto, ha expirado o ya no es válido.

### ERROR 500 (INTERNAL SERVER ERROR)
    - Moti    vos por los cuales se puede generar el error: ○ Ocurrió un error interno al procesar la solicitud. En este caso, se debe informar al administrador.