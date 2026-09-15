## 1. Autenticación en las solicitudes y encabezados

Todos los servicios requieren un Token de Acceso de decisioncloud Gestión de Ventas:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

El prefijo `Bearer ` es obligatorio.

### 2. `GET` Consultar oportunidades

#### URL

```text
https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidades
```

#### Header

| Encabezado | Valor |
|---|---|
| `Accept` | `application/json` |
| `Authorization` | `Bearer <access_token>` |

#### Query params

Debe enviarse exactamente una modalidad de consulta:

| Consulta                              | Parámetros requeridos             | Descripción                                         |
| ------------------------------------- | --------------------------------- | --------------------------------------------------- |
| Oportunidad por número                | `numeroOportunidad`               | Número exacto de la oportunidad.                    |
| Oportunidades de empresa con Fracttal | `identificadorEmpresa`            | Identificador de la empresa.                        |
| Oportunidades activas                 | `estado=ACTIVA` y `fromDate`      | Oportunidades activas desde la fecha indicada.      |
| Oportunidades cerradas                | `estado=CERRADA` y `fromDate`     | Oportunidades cerradas desde la fecha indicada.     |
| Oportunidades desatendidas            | `estado=DESATENDIDA` y `fromDate` | Oportunidades desatendidas desde la fecha indicada. |

Las modalidades son excluyentes: no deben combinarse parámetros pertenecientes a consultas diferentes.

#### Ejemplos de solicitud

```http
GET /oportunidades?numeroOportunidad=OP-2026-0042
GET /oportunidades?identificadorEmpresa=1792456789001
GET /oportunidades?estado=ACTIVA&fromDate=2026-01-01
GET /oportunidades?estado=CERRADA&fromDate=2026-01-01
GET /oportunidades?estado=DESATENDIDA&fromDate=2026-01-01
```

#### Ejemplos con cURL

Consulta por número de oportunidad:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidades?numeroOportunidad=OP-2026-0042' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

Consulta por identificador de empresa:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidades?identificadorEmpresa=1792456789001' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

Consulta por estado y fecha:

```bash
curl --request GET \
  --url 'https://mydecisioncloud.com/dcGV_v1_api/apirest/energypower/v2/oportunidades?estado=ACTIVA&fromDate=2026-01-01' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'Accept: application/json'
```

#### Ejemplo de respuesta

La respuesta satisfactoria es `200 OK` con la información de las oportunidades en formato JSON. La consulta por `identificadorEmpresa` incorpora la información obtenida desde Fracttal.

> **Nota sobre tiempos de respuesta:** esta modalidad consulta información adicional en Fracttal mediante solicitudes externas. Por ello, el tiempo total de respuesta puede variar según la disponibilidad, latencia o carga del servicio de Fracttal.

#### Errores posibles

| Error | Motivos |
|---|---|
| `400 Bad Request` | Faltan parámetros, el estado no es válido o se combinaron modalidades diferentes. |
| `401 Unauthorized` | El token está ausente, no usa el formato `Bearer` o no es válido. |
| `404 Not Found` | No existe la oportunidad o empresa indicada. |
| `500 Internal Server Error` | Ocurrió un error interno o falló la comunicación con un servicio relacionado. |
