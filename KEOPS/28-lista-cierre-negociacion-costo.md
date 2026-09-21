# URL

`http://api.energy.keops-corp.com/lista_cierre_negociacion_costo/?codemp=%27.$codemp.%27&clave=%27.$clave.%27&fecini=%27.$fecini.%27&fecfin=%27.$fecfin`

# Lista Cierre de Negociación con Costo y Rentabilidad

Recupera una lista detallada de cierres de negociación con información de costos y rentabilidad para una empresa y rango de fechas determinados.

## Parámetros de Consulta (Query Parameters)

| Parámetro | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `codemp` | Código de la empresa. | `01` |
| `clave` | Clave de acceso / Clave de período. | `API CLAVE 7` |
| `fecini` | Fecha de inicio (AAAA-MM-DD). | `2026-08-01` |
| `fecfin` | Fecha de fin (AAAA-MM-DD). | `2026-10-31` |

## Respuesta (Response)

Devuelve un objeto JSON con los siguientes campos de nivel superior:

- **`desde`**: Fecha de inicio del período consultado.
- **`hasta`**: Fecha de fin del período consultado.
- **`registros`**: Número total de registros devueltos.
- **`datos`**: Arreglo de registros de cierre de negociación.

### Campos del Objeto `datos`

| Campo | Descripción |
| :--- | :--- |
| `numero` | Número de negociación. |
| `numero_cierre` | Número de cierre (`null` si aún no ha sido cerrado). |
| `estado` | Código de estado (ej. AP = Aprobado, AN = Anulado). |
| `numrem` | Número de remisión. |
| `codcla` | Código de clasificación del cliente. |
| `modelo` | Modelo del producto. |
| `serie` | Serie / Identificador de tránsito. |
| `cantid` | Cantidad. |
| `preuni` | Precio unitario. |
| `descren` | Porcentaje de descuento. |
| `desc_valor` | Valor del descuento. |
| `totren` | Total después del descuento. |
| `descripcion` | Descripción del producto o servicio. |
| `codiva` | Código de IVA. |
| `descper` | Porcentaje de descuento adicional. |
| `poriva` | Porcentaje de IVA. |
| `codsub` | Subcódigo. |
| `codcen` | Centro de costos. |
| `costo` | Costo del artículo. |
| `utilidad_bruta` | Utilidad bruta. |
| `porcentaje_costo` | Porcentaje de costo sobre el precio de venta. |
| `porcentaje_venta` | Porcentaje de margen de venta. |
| `dias_stock` | Días en inventario / stock. |