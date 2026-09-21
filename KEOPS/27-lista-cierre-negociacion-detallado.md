# URL

`http://api.energy.keops-corp.com/lista_cierre_negociacion_detallado/?codemp=%27.$codemp.%27&clave=%27.$clave.%27&fecini=%27.$fecini.%27&fecfin=%27.$fecfin`

# Lista Cierre de Negociación Detallado

Recupera una lista detallada de registros de cierre de negociación para una empresa y rango de fechas determinados. Cada registro incluye información a nivel de partida, como la descripción del producto, cantidades, precios unitarios, descuentos, totales y detalles del IVA.

---

## Parámetros de Consulta (Query Parameters)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `codemp` | string | Sí | Identificador del código de la empresa. | `01` |
| `clave` | string | Sí | Clave de acceso / token de autenticación para la API. | `API CLAVE 7` |
| `fecini` | string | Sí | Fecha de inicio del rango de consulta (formato: AAAA-MM-DD). | `2026-08-01` |
| `fecfin` | string | Sí | Fecha de fin del rango de consulta (formato: AAAA-MM-DD). | `2026-10-31` |

---

## Respuesta (Response)

Devuelve un objeto JSON con los siguientes campos de nivel superior:

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `desde` | string | Fecha de inicio del período consultado (AAAA-MM-DD). |
| `hasta` | string | Fecha de fin del período consultado (AAAA-MM-DD). |
| `registros` | integer | Número total de registros devueltos. |
| `datos` | array | Arreglo de objetos con el detalle de cierre de negociación (ver más abajo). |

### Campos del Objeto `datos`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `numero` | string | Número de orden de negociación. |
| `numero_cierre` | string / null | Número de documento de cierre. `null` si aún no ha sido cerrado. |
| `estado` | string | Código de estado. Valores comunes: AP (Aprobado), AN (Anulado). |
| `numrem` | string | Número de remisión. |
| `codcla` | string / null | Código de clasificación del cliente. |
| `modelo` | string | Modelo del equipo. |
| `serie` | string | Número de serie del equipo o identificador de tránsito. |
| `cantid` | string | Cantidad (decimal expresado como string). |
| `preuni` | string | Precio unitario (decimal expresado como string). |
| `descren` | string | Porcentaje de descuento aplicado. |
| `desc_valor` | string | Valor del descuento en la moneda correspondiente. |
| `totren` | string | Monto total de la partida después del descuento. |
| `descripcion` | string | Descripción del producto o servicio. |
| `codiva` | string | Código de IVA. |
| `descper` | string | Porcentaje de descuento adicional. |
| `poriva` | string | Porcentaje de la tarifa de IVA (ej. 15.00). |
| `codsub` | string / null | Subcódigo o código de sucursal/subsidiaria. |
| `serie_tta` | string / null | Identificador de serie TTA. |
| `uso_equipo` | string / null | Descripción del uso del equipo. |
| `codcen` | string | Centro de costos o código de proyecto. |

---

## Ejemplo de Respuesta

```json
{
  "desde": "2026-08-01",
  "hasta": "2026-10-31",
  "registros": 107,
  "datos": [
    {
      "numero": "00005379",
      "numero_cierre": null,
      "estado": "AN",
      "numrem": "1",
      "codcla": null,
      "modelo": "",
      "serie": "TRANSITO",
      "cantid": "1.00",
      "preuni": "200.00",
      "descren": "0.00",
      "desc_valor": "0.00",
      "totren": "200.00",
      "descripcion": "PRE CALENTADOR DE BLOCK",
      "codiva": "4",
      "descper": "0.00",
      "poriva": "15.00",
      "codsub": null,
      "serie_tta": null,
      "uso_equipo": null,
      "codcen": "01."
    }
  ]
}
```