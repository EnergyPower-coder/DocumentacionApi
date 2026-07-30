# Edición de contacto
Permite la edición de contactos en la plataforma decisioncloud módulo Gestión de Ventas en base al identificador de la empresa a la cual pertenecen.

---
### Endpoint
`https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/contactos`

---
###  HEADER
Content-Type: application/json
Autorization: Bearer apiKeyQueObtienesEnDecision

---
### BODY REQUEST
| Parámetro | Tipo  | Descripción |
| --- | --- | ---  |
| `id` | String (Obligatorio) | ID del contacto que se desea editar. |
| `nombreCompleto` | String (Obligatorio- Máximo 256 caracteres) | Valor que indica el nombre completo del contacto |
| `correoElectronico` | String (Obligatorio - Máximo 128 caracteres) | Correo electrónico válido.|
| `telefono` | String (Opcional - Máximo 128 caracteres) | Valor que indica el teléfono del contacto.|
| `estado` | String (Obligatorio - Valores permitidos: ACT o INA) | Estado del contacto.|
| `nombreCargo` | String (Obligatorio - Máximo 28 caracteres) | Valor que indica el cargo asignado al contacto.|
| `identificadorEmpresa` | String (Obligatorio- Máximo 13 caracteres) | Valor que indica el identificador de la empresa.|

```json
{
"id": "69d3d65d13a0804431f5ee8e131",
"nombreCompleto": "JUAN FLORES 1 (edición)",
"correoElectronico": "juan.flores1@example.com",
"telefono": "0987654322",
"estado": "ACT",
"nombreCargo": "GERENTE",
"identificadorEmpresa": "1792992192001"
}
```

---
### RESPONSE

#### RESPUESTA 200 (OK)
Registro editado con éxito

#### ERROR 400 (BAD REQUEST)
    ● Motivos por los cuales se puede generar el error:
    ○ Algún elemento del JSON no es correcto o su formato no es correcto.
    ○ La ruta (endpoint) no es correcta.

#### ERROR 401 (NO AUTORIZADO)
    ● Motivos por los cuales se puede generar el error:
    ○ No se envió el header Authorization.
    ○ El token enviado no tiene el formato Bearer.
    ○ El token enviado no es correcto, ha expirado o ya no es válido.

##### ERROR 404 (NOT FOUND)
    ● Motivos por los cuales se puede generar el error:
    ○ No se encontró ninguna empresa registrada con el identificadorEmpresa enviado.

#### ERROR 500 (INTERNAL SERVER ERROR)
    ● Motivos por los cuales se puede generar el error:
    ○ Ocurrió un error interno al procesar la solicitud. En este caso, se debe informar al administrador.