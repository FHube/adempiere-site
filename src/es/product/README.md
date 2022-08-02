---
title: Características de ADempiere
category: Product
star: 9
sticky: 9
tag:
  - Sales
  - Purchase
  - Inventory
  - Accounting
article: false
---

## Procesos de Negocio

### Procesos de Venta

- Generar cotizaciones o propuestas.
- Registrar pedidos.
- Envío de bienes o uso de servicios.
- Facturación al cliente.

### Procesos de Compra

- Generar una solicitud de compra desde catálogo.
- Emisión de una orden de compra.
- Recepción de bienes y servicios.
- Recepción de facturas del proveedor.
- Pago a proveedores y colección de deudas.

### Procesos de Inventario

- Trazabilidad de inventario.
- Reposición de almacénes.
- Múltiples almacénes y ubicaciones.
- Movimientos de stock.
- Despachos.

### Procesos Contables

- Períodos y finalización del año.
- Contabilidad administrativa y financiera.
- Cuentas Contables.
- Impuestos (VAT/TAX/IVA).
- Reportería para otras agencias reguladoras.

## Información Histórica En Línea

- Se pueden generar varios tipos de calendario y sus períodos de inicio y término, de acuerdo a las necesidades del usuario con el objetivo de crear reportes.
- La información ingresada y modificada en el sistema, va generando un registro con la fecha y la hora, así como también el ID del usuario que creó y actualizó dicho registro.
- **ADempiere almacena toda la información y transacciones ingresadas al sistema por el tiempo que el usuario de la organización desee.**
- No existe el concepto de "fin de año" ni del proceso de renovación.
- Los calendarios y sus períodos son establecidos solo para fines de reportería y control de acceso.
- La información histórica es mantenida en el sistema por el tiempo que se requiera para su uso en reportería, usando al función del calendario.

## Reportería

::: Dato

    ADempiere posee capacidades exhaustativas de reportería.

:::

### Reportes Inteligentes

- **En la mayoría de las aplicaciones, la reportería es una entidad que no está integrada o que requiere de add-ons. La reportería en ADempiere está basada en el diccionario de datos.**
  - Como el visor de informes tiene acceso a las definiciones, esto permite profundizar en cualquier entidad a la que se haga referencia y profundizar en las entidades en las que se utiliza la entidad notificada.
  - Los enlaces se generan automáticamente, al tiempo que garantizan el cumplimiento de las definiciones de seguridad y acceso.
- **El visor de informes proporciona la selección de datos, la secuenciación, la agrupación, la totalización y el formato de visualización.**
  - El informe resultante se puede ver en pantalla antes de enviarla a una impresora, una dirección de correo electrónico o fax o generar archivos en muchos formatos diferentes (por ejemplo, formatos de texto de Excel, HTML, XML, PDF y Postscript).

### Vistas de Negocio

- Las vistas están diseñadas para usuarios finales y permiten acceder a la información mediante herramientas estándar basadas en SQL sin necesidad de crear combinaciones de tablas SQL.
- La mayoría de las vistas se generan en función del diccionario de aplicaciones.

### Profundizar y Desglosar

- **Todos los resultados de los informes permiten a los usuarios profundizar en cualquier entidad a la que se haga referencia en el contexto del informe.**
- **Cuando se utiliza el desglose, se genera un nuevo informe basado en la entidad seleccionada.**
  - En un informe de pedido, por ejemplo, el usuario puede profundizar para generar un informe que muestre las líneas que componen el pedido.
  - **El usuario puede identificar la entidad (líneas de pedido) y luego hacer clic en el nombre del producto para mostrar un informe separado de las líneas de pedido para el producto en particular seleccionado.**
- **Siguiendo el estándar Web-UI, los usuarios pueden profundizar en cualquier entidad subrayada azul que se muestre en la pantalla del informe.**
- **la función permite al usuario crear un nuevo informe sobre una entidad relacionada en un informe. Por ejemplo, en un informe de producto, es posible que el usuario desee ver las líneas de pedido de un producto en particular.**

### Tipos de Informe

1. Listados - están basados en información de una ventana. Los usuarios pueden crear un reporte para cada ventana del sistema, incluyendo ventanas que contengan campos y tablas creadas por el usuario. Los reportes pueden ser configurados especificando los campos que se desea mostrar, el orden de estos y cómo deben agruparse los datos. Los reportes poseen las funciones de mínimos, máximos, totales, conteo, desviación estándar y varianza de las columnas seleccionadas.

2. Reportes - generalmente están basados en información resumida y en vistas de reporte. Los reportes permiten definir qué información debe aparecer en filas o columnas; la combinación de un set de filas o  un set de columnas determina el contenido del reporte.

### Herramientas de Reportería de Terceros

Herramientas de terceros como reportes Jasper, basados en Java, pueden también ser usados para la creación de reportes si es necesario. La versión actual de ADempiere y su motor de reportería, ya posee una integración sustancial con la reportería Jasper.

### Configuración de Informes

**ADempiere diferencia la "vista" del "modelo". Con la excepción de las vistas de informe, generalmente el modelo ya existe. Si proporciona una instrucción SQL Select, se puede crear una vista de informe, el usuario no necesita resolver referencias de clave externa (que requieren el conocimiento del modelo de datos) ni preocuparse por la seguridad de los datos, ya que ADempiere resuelve estos problemas para el usuario. Esto permite la escritura de sentencias "simples". Existe poco concenso de cómo debe verse cada informe. ADempiere permite al usuario definir el formato de cualquier informe a nivel de Sistema, Cliente, Organización o Usuario:**

- Columnas que componen el informe
- Ordenamiento de columnas
- Clasifiación del informe
- Encabezado de la columna
- Sumatoria (columnas numéricas)
- Agrupación
- Gráficos circulares
- Gráficos de barras/líneas

**La selección de datos se realiza a través de Parámetros de informe al iniciar el informe, o a través de Consulta, lo que permite al usuario ingresar criterios en un estilo mejorado de "consulta por ejemplo".**

## Datos y Meta-Datos

**Los programadores de muchas aplicaciones que no utilizan la sofisticación de un diccionario de datos activo necesitan diseñar, codificar y probar cada pantalla. ADempiere utiliza el concepto más avanzado de un diccionario central de datos activos, también llamado repositorio de información. El diccionario de datos activos de ADempiere se encuentra en la capa de metadatos y sabe cómo acceder a los datos y cómo se relacionan los datos.**

- **El diccionario de datos contiene:**

  - Definiciones de la entidad de datos (tipo, validación, etc.)
  - Modo de despliegue (etiqueta en pantalla e informes, ayuda, secuencia de despliegue y posición de los campos)
  - Reglas de despliegue
  - Reglas de acceso y seguridad

- **El diccionario de datos es "activo", lo que significa que se utiliza en tiempo de ejecución y es sensible al contexto. Por ejemplo: "sabe" que una venta de venta libre no tiene un plazo de pago y no lo muestra. Sin embargo, si cambia el tipo de transacción a un pedido estándar, un plazo de pago se convierte en una parte obligatoria de la transacción.**
- **El diccionario de datos activos es extensible por el usuario y puede incluir reglas e información especificadas por el usuario. La extensibilidad del Active Data Dictionary simplifica las extensiones de usuario a la aplicación, ya que gran parte de lo que de otro modo tendría que ser codificado por los programadores puede ser creado por usuarios conocedores y autorizados (con privilegios del sistema) desde dentro de la aplicación.**

## Soporte

**El soporte de software representa una parte sustancial de los costos de por vida de cualquier sistema complejo. Una arquitectura flexible y modular es esencial para garantizar:**

- Comprensión
- Modificación
- Interoperabilidad
- Reutilizabilidad
- Expandibilidad
- Portabilidad

todos los cuales son necesarios para un software que pueda ser soportado de una manera eficiente y rentable. Muchos problemas asociados con el soporte de software se pueden remontar a deficiencias en la forma en que se diseñó el producto de software original. La falta de atención al diseño de arquitecturas de software modulares durante el desarrollo puede causar problemas y costos excesivos de soporte de software. ADempiere está diseñado para ser lo más flexible posible y adaptarse al cambio. A menos que la arquitectura del sistema permita el cambio, es probable que las modificaciones en el software sean difíciles y propensas a defectos. La arquitectura de software de ADempiere aborda cuidadosamente la abstracción, la encapsulación y la ocultación de información para minimizar las dependencias. Al maximizar el uso del diseño orientado a objetos, el software se puede modificar fácilmente. El diccionario de datos activos de ADempiere garantiza que el soporte de software se pueda simplificar al garantizar que los cambios se realicen en una ubicación con un impacto constante en toda la aplicación. Además, ADempiere no utiliza conjuntos de herramientas de terceros que pueden quedar sin soporte debido a la falta de interés de sus respectivos proveedores. Aparte de la base de datos Oracle en sí, el código fuente para todos los aspectos del sistema está abierto y disponible, lo que garantiza que la comunidad de usuarios siempre podrá proporcionar soporte para todos los aspectos del sistema.
