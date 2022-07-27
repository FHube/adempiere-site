---
title: Tecnología
category: Product
star: 9
sticky: 9
tag:
  - Software
article: false
---

![Tecnología](/assets/img/product/technology.jpg)

## Elementos de Tecnología

- ADempiere es una solución 100% Java.
- Está basado en tecnología de Base de Datos Oracle
- Soporta nativamente Base de Datos Postgresql
- Posee un cliente 100% Java
- Aprovecha un cliente HTML que permite el acceso a la aplicación donde un cliente local no es apropiado (por ejemplo, funcionalidad de autoservicio para proveedores, clientes y empleados). (Java Servlets y Java Server Pages).
- Posee servidor de aplicación J2EE JBOSS.
- Los procesos intensivos del servidor están diseñados para ejecutarse en modo de fondo con PL/SQL como idioma nativo

## Diccionario de Aplicación

- El diccionario de datos contiene definiciones del tipo de entidad (tipo, validación, etc.)
- Determina cómo debe mostrarse, por ejemplo, etiquetas en pantallas e informes, ayuda de contexto, secuencia y posición en relación con otros campos, y las reglas para la implementación.
- Reglas de acceso de seguridad
- El Diccionario de Datos es administrado y extendido por el usuario, contiene reglas e información definida por el usuario.

## Interfaz Inteligente de Usuario

- Una interfaz de usuario consistente permite a los usuarios navegar rápidamente a través del sistema incluso en secciones desconocidas para ellos. 
- La interfaz gráfica de usuario utiliza el poder de los dispositivos modernos de hoy en día, donde una reacción rápida y la navegación son importantes. 
- La interfaz de usuario HTML permite el acceso a la aplicación desde cualquier lugar siempre que tenga un navegador compatible. 
- Puede habilitar las funciones de Zoom desde cualquier tipo de lista desplegable. 
- Puede verificar los registros. La consulta reduce el número de registros en una ventana para permitir los criterios de entrada en un estilo mejorado de "consulta por ejemplo" (consulta por ejemplo). 
- Los propios usuarios pueden ajustar el contorno de la ventana y pueden definir pantallas especiales para una situación específica del cliente o cuando así se requiera.

## Reportes Inteligentes

- Los listados a través del visor del sistema se basan en el diccionario de datos, dado que el visor de informes tiene acceso a las definiciones de datos, permite de forma nativa profundizar y profundizar en las búsquedas. 
- Los enlaces de datos se generan automáticamente, adhiriéndose a las definiciones de acceso de seguridad en tiempo real. 
- Todas las salidas de informes se pueden previsualizar en pantalla antes de imprimir o generar archivos en varios formatos estándar (por ejemplo. Excel, HTML, XML, Word y PDF). 
- Al profundizar se genera un nuevo informe basado en la entidad seleccionada, informes donde el número es una suma de números o se accede desde un mensual acumulado al monto original de la transacción.
- Examinar referencias permite al usuario crear un nuevo informe en el que se utiliza una entidad específica. 
- Las listas se basan en la información de las ventanas. Puede generar un informe para cada pantalla del sistema. 
- Los informes suelen basarse en información resumida basada en las vistas de los informes. 
- El visor OLAP puede mostrar diferentes dimensiones en una tabla o un gráfico.

## Arquitectura Sostenible

Las aplicaciones empresariales cambian con el tiempo. Necesitan aprovechar las nuevas tecnologías y proporcionar una funcionalidad adicional más inteligente. Incluso las aplicaciones enlatadas deberían incluso admitir funcionalidad adicional, aunque generalmente no son apropiadas para la integración con el núcleo funcional de un negocio en crecimiento. 

Adempiere utiliza los siguientes principios de diseño para crear una arquitectura sostenible: Arquitectura MVC de Smalltalk, que es una derivación del enfoque Modelo-Vista-Controlador. Un motor de reglas explícitas para la lógica de transacciones compleja y la recuperación de errores a prueba de transacciones. 

El ERP tiene una arquitectura de objetos, cada objeto es lo más independiente posible de otros objetos, incluida la derivación transaccional.

## Garantía ante fallas

Por lo general, las aplicaciones están diseñadas para estar libres de fallas (a prueba de fallos): Se supone que todo funciona y que todos los datos se ingresan correctamente y son consistentes. En caso de falla, los expertos deben encontrar la causa y verificar si hubo daños. El usuario suele notar el problema. La realidad es que las aplicaciones a veces fallan. En contraste, ADempiere está diseñado para tener seguridad ante fallas.

Cada transacción se puede repetir y regenerar. La mayoría de las fallas son identificadas por el sistema y el usuario puede intentar resolver el problema. Si la recuperación no es posible, el error se aísla y el resto del sistema continúa funcionando. El diseño desacoplado se basa en la transacción está habilitado.

El sistema comprueba regularmente si una transacción está completa. Si una transacción no está completa y es consistente debido a un error del sistema, se informa al administrador y al usuario. 

A medida que las aplicaciones se vuelven más complejas con combinaciones cada vez mayores, los errores crecen exponencialmente. El ERP proporciona un marco para una validación extensa y, en caso de falla, aísla el problema asegurando una alta disponibilidad de las funciones centrales (kernel de la aplicación).

## Seguridad

ADempiere es compatible con la seguridad y las funciones de los datos. La función de seguridad se basa en roles de usuario y controles de acceso, ventanas, informes y procesos.

La seguridad de los datos para la información del cliente y la Organización se mantiene a nivel de la base de datos a través del contexto de seguridad. Este es un nivel adicional de seguridad más allá de la identificación (inicio de sesión) del usuario habitual de la base de datos. Esto permite el uso de herramientas de terceros basadas en SQL para acceder a la base de datos. Antes de acceder a cualquier dato, el usuario debe ser identificado a través de un procedimiento almacenado (procedimiento almacenado) con nombre de usuario, contraseña y, opcionalmente, rol de idioma. Esto proporciona las mismas reglas de acceso para herramientas de terceros que pueden existir en la aplicación. 

La mayoría de las aplicaciones no tienen una capa de seguridad más allá del ID de usuario de la base de datos y tienen dificultades para restringir el acceso a través de herramientas SQL de terceros. Las contraseñas de los clientes se almacenan de forma cifrada.
