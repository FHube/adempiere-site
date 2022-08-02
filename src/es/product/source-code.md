---
title: Código Fuente
category: Source Code
star: 9
sticky: 9
tag:
  - Demo
  - Product
  - Github
article: false
---

![Código Fuente](/assets/img/product/source-code.png)

## Repositorio del Proyecto ADempiere

LE repositorio principal de ADempiere puede encontrarse en [GitHub](https://github.com/adempiere/adempiere).

::: Dato Git

Antes de proceder, por favor refiérete a [Git SCM Documentation](http://git-scm.com/doc)

Para colaborar con el equipo ADempiere, nosotros usamos el modelo de Git Hub Fork y Pull. Desde [GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

::: Dato Colaborar

Para colaborar con el equipo ADempiere, nosotros usamos el modelo Git Hub Fork and Pull. Desde [GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

El modelo de Fork and Pull permite a cualquiera hacer un fork de un respoitorio existente y realizar modificaciones, mediante el uso del fork personal sin necesidad de tener acceso al fork del repositorio fuente. Los cambios luego deben ser incorporados en el repositorio fuente por el mantenedor del proyecto. Este modelo reduce la cantidad defricción para los nuevos controbuyentes y es popular para los proyectos de código abierto, porque permite a los participantes trabajar sin la necesidad de una coordinación principal.

Revisa el artículo de GitHub en [Pull Requests](https://help.github.com/articles/using-pull-requests) para mayor información e instrucciones de cómo iniciarte.

### Resumen de Instrucciones

El setup is simple. Sigue estos pasos:

- Instalar el Software de Git. Puedes trabajar con la línea de comando de Git o cualquiera de sus herramientas GUI. Como el respositorio está en GitHub, se recomienda seguir [GitHub procedimientos de configuración](https://help.github.com/articles/set-up-git/).
- Crea una cuenta GitHub
- Crea tu fork personal del preyecto ADempiere
- Crea un clon local de tu fork personal
- Comienza a desarrollar!
- Comete tu trabajo a tu fork personal. Sigue el [Procedimiento de Desarrollo de ADempiere](http://wiki.adempiere.net/Software_Development_Procedure) para la gestión del nombre de la rama.
- Envía un pull request al proyecto ADempiere.

### Clonar un repositorio

Clonar un repositorio a tu cpmputador local es simple. Sigue las instrucciones con el software Git o tu herramienta GUI, que permiten la clonación de un respositorio GitHub a tu computadora local con unos pocos clicks del mouse. Si deseas hacerlo mediante la línea de comando,

::: vue-demo Clone the project default

```Shell
# Navigate to the parent directory where the repository will be placed and type the following command
git clone https://github.com/adempiere/adempiere
```

:::

Esto creará un directorio utilizando el nombre del proyecto url, inicializará un directorio.git dentro de él, desplegará todos los datos de ese repositorio y retirará una copia de trabajo de la última versión. Si entras en el nuevo directorio, verás los archivos del proyecto allí, listos para ser trabajados o utilizados.

Para cambiar el nombre del directorio de clones, utilice lo siguiente

::: vue-demo Clone the project with Optional Name

```Shell
# Navigate to the parent directory where the repository will be placed and type the following command
git clone https://github.com/adempiere/adempiere <Optional Name>
```

:::

### Clonar el repositorio con una conexión lenta.

To clone a repository over a slow or intermittent Internet connection, try using git fetch instead of clone as follows:

::: vue-demo para Linux

```Shell
  # Anda a la carpeta por defecto
  cd /opt/Development/repos

  # Crea un directorio para la repo y modifícalo a este
  mkdir adempiere

  # Anda a la nueva carpeta
  cd adempiere

  # Inicia el repositorio
  git init
  Initialized empty Git repository in /opt/Development/repos/github/adempiere/.git/

  # La referencia por defecto al repositorio fuente en un clon es el 'origen'.
  # Clona el fork personal de la cuenta <cuenta>.
  git remote add origin https://github.com/adempiere/adempiere.git

  # Actualiza los contenidos.
  git fetch

  # Actualiza la rama maestra actual - por ejemplo
  git reset --hard origin/master
```

:::
