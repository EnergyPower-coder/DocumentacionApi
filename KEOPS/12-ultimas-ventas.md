# Consulta de Últimas Ventas por RUC — KEOPS ERP

Consulta y consolida el historial de facturación de un cliente (por RUC) correspondiente a los últimos 12 meses anteriores a una fecha de corte especificada. Incluye líneas de Servicios, Repuestos y Equipos, excluyendo la línea de Tableros.

### Método

`GET`

### Endpoint

`http://api.energy.keops-corp.com/consultaUltimasventasPorRuc/`

---

### Parámetros de Consulta (Query Params)

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `codemp` | texto (*string*) | Sí | Código identificador de la empresa. | `01` |
| `clave` | texto (*string*) | Sí | Clave de acceso ubicado en el archivo **API CLAVE 1**. | `clave` |
| `identificacion` | texto (*string*) | Sí | Número de RUC o identificación del cliente. | `1234567` |
| `fecha_corte` | texto (*string*) | Sí | Fecha de corte para calcular el período de 12 meses atrás (`AAAA-MM-DD`). | `2026-02-01` |

---

### Estructura de la Respuesta

Retorna un objeto JSON con el estado de la consulta y el objeto `datos` con el desglose de compras, acumulados y rango del período:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `metodo` | texto (*string*) | Nombre del método ejecutado. |
| `respuesta` | entero | Código de respuesta tipo HTTP (`200` = Éxito). |
| `descripcion` | texto (*string*) | Mensaje informativo del resultado y líneas consideradas. |
| `datos` | objeto (*object*) | Objeto que contiene las transacciones y métricas acumuladas. |

#### Campos del Objeto Principal (`datos`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `ruc_consultado` | texto (*string*) | RUC o identificación consultada. |
| `periodo` | objeto (*object*) | Rango de fechas calculado para los últimos 12 meses (`fecha_inicio` a `fecha_fin`). |
| `filtros_aplicados` | objeto (*object*) | Detalle de líneas de producto/servicio incluidas y excluidas. |
| `ultimas_ventas` | arreglo (*array*) | Lista con el detalle de las facturas generadas dentro del período. |
| `cantidad_compras_en_ultimos_12_meses` | entero | Total de documentos/compras realizadas en el período. |
| `monto_total_en_ultimos_12_meses` | número | Sumatoria total valorizada de las compras en los últimos 12 meses. |

#### Campos del Objeto de Venta (`ultimas_ventas[]`)

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `numfac` | texto (*string*) | Número de factura o documento de venta. |
| `fecha` | texto (*string*) | Fecha de la transacción (`AAAA-MM-DD`). |
| `tipo` | texto (*string*) | Categoría comercial de la venta (ej. `"ARRENDAMIENTO"`, `"REPUESTOS"`). |
| `descripcion` | texto (*string*) | Detalle resumido de los ítems, orden de compra y dirección de entrega. |
| `observacion` | texto (*string*) | Número de orden de producción u observación interna. |
| `monto` | número | Valor total facturado en la transacción. |

---

### Ejemplo de Respuesta (`200 OK`)

```json
{
  "metodo": "consultaCalificacionCliente",
  "respuesta": 200,
  "descripcion": "Consulta exitosa. Se muestran ventas de los últimos 12 meses (Servicios, Repuestos, accesorios y Equipos). No incluye Tableros.",
  "datos": {
    "ruc_consultado": "1234567",
    "periodo": {
      "ultimos_meses": 12,
      "fecha_inicio": "2025-02-01",
      "fecha_fin": "2026-02-01"
    },
    "filtros_aplicados": {
      "incluye_lineas": [
        "SERVICIOS",
        "REPUESTOS",
        "EQUIPOS"
      ],
      "excluye_lineas": [
        "TABLEROS"
      ]
    },
    "ultimas_ventas": [
      {
        "numfac": "00058841",
        "fecha": "2026-01-27",
        "tipo": "ARRENDAMIENTO",
        "descripcion": "SERV ELEC. GENERACIÓN;ORDEN DE COMPRA No. 4300021668;DIRECCIÓN DE ENTREGA: VIA A DAULE KM 16.5;CENTRO: C002 CENDIS GUAYAQUIL;CIUDAD: DAULE",
        "observacion": "OPO-0041866 (V1)",
        "monto": 12000
      },
      {
        "numfac": "00058533",
        "fecha": "2026-01-06",
        "tipo": "REPUESTOS",
        "descripcion": "FILTRO DE COMBUSTIBLE ;FILTRO DE ACEITE ;FILTRO DE COMBUSTIBLE ;Orden de Compra: No. .4500054327;CENTRO: B002 BODEGA CENTRAL COSTA;CIUDAD: ANTONIO ELIZALDE (BUCAY);MILTON FABIAN FLORES VILLEGAS",
        "observacion": "OPO-0040921 (V3)",
        "monto": 104.88
      }
    ],
    "cantidad_compras_en_ultimos_12_meses": 76,
    "monto_total_en_ultimos_12_meses": 219481.91
  }
}