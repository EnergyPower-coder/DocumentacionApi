# Consulta de Calificación de Cliente — KEOPS ERP

Consulta la calificación VIP, los datos de contacto y la información comercial de un cliente en el sistema ERP KEOPS a partir de su número de identificación (RUC o cédula).

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/consultaCalificacionCliente/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso ubicado en el archivo **API CLAVE 1**. | `clave` |
| `identificacion` | texto (*string*) | Sí | Número de RUC o cédula de identidad del cliente a consultar. | `1234` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con la confirmación de la solicitud y un objeto `datos` con la información detallada del cliente consultado:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado (`"consultaCalificacionCliente"`). |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje descriptivo sobre el resultado de la consulta. |
| `datos` | objeto (*object*) | Objeto que contiene los datos del cliente. |

#### Campos del Objeto de Cliente (`datos`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `tipo_identificacion` | texto (*string*) | Tipo de documento registrado (ej. `"RUC"`, `"CEDULA"`). |
| `identificacion_consultada` | texto (*string*) | Número de identificación enviado en la consulta. |
| `calificacion_cliente_vip` | texto (*string*) | Categorización/calificación del cliente (ej. `"A"`, `"B"`, `"C"`). |
| `razon_social_cliente` | texto (*string*) | Nombre completo o razón social del cliente. |
| `ruc_o_cedula` | texto (*string*) | Número de RUC o cédula registrado en la ficha del cliente. |
| `telefono_contacto` | texto (*string*) | Número de teléfono principal de contacto. |
| `direccion` | texto (*string*) | Dirección domiciliaria o fiscal del cliente. |
| `correo_electronico` | texto (*string*) | Correo electrónico registrado para notificaciones/facturación. |
| `cliente_desde` | texto (*string*) | Fecha desde la cual está registrado como cliente en el sistema. |
| `identificacion_vendedor` | texto (*string*) | Identificador del vendedor CEDULA O RUC |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "consultaCalificacionCliente",
  "respuesta": 200,
  "descripcion": "Consulta exitosa",
  "datos": {
    "tipo_identificacion": "RUC",
    "identificacion_consultada": "12345",
    "calificacion_cliente_vip": "A",
    "razon_social_cliente": "Razon socila de ejemplo",
    "ruc_o_cedula": "12345",
    "telefono_contacto": "123434234",
    "direccion": "Dirección",
    "correo_electronico": "correoPrueba@gmail.com",
    "cliente_desde": ".0000000+00:00",
    "identificacion_vendedor": "NO ASIGNADO"
  }
}