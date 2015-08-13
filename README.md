# Introducción
Proyecto semilla (seed) para **App moviles híbridas UI-Web** que parte de la base creada en la inicializacion de un proyecto con ionic/cordova, en concreto se ha utilizado el comando _ionic start app-ionic sidemenu_, incluyendose tareas de construccion basadas en el template de John Papa, _Hot Towel_:
- Generación de estilos con Sass
- Generación de cache de templates de AngularJS
- Optimización de imagenes
- Inyección de dependencias CSS y JavaScript en index.html
- Plugin ngAnnotate
- Minificaciond de estilos CSS
- Concatenación y minificacion de código JavaScript
- Ejecución de pruebas con Karma
- Generación de reportes de pruebas unitarias y cobertura
- Generación de reportes de calidad de código con Plato
- Revision de código con jscs y jshint

# Guías de diseño
El proyecto sigue los patrones de diseño de John Papa: [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)

## Otras referencias:
### AngularJS:
- [John Papa - AngularJS Patterns: Clean Code](http://www.pluralsight.com/courses/angularjs-patterns-clean-code)
- [AngularJS - Developer Guide](https://docs.angularjs.org/guide)
- [Egghead.io - AngularJS Lessons](https://egghead.io/technologies/angularjs)

### Pruebas unitarias:
- [Full-Spectrum Testing with AngularJS and Karma](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html)
- [Advanced Testing and Debugging in AngularJS](http://www.yearofmoo.com/2013/09/advanced-testing-and-debugging-in-angularjs.html)
- [AngularJS - Developer Guide / Unit Testing](https://docs.angularjs.org/guide/unit-testing)
- [AngularJS - Developer Guide / E2E Testing](https://docs.angularjs.org/guide/e2e-testing)

# Estructura de proyecto
Resumen de directorios que contiene el proyecto:

Directorio/Fichero | Descripción
------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/hooks             | Hooks que se pueden incluir en el proceso de consturcción de Apache Cordova
/node_modules      | Modulos npm generados al ejecutar _npm install_ en el raiz del proyecto. Este directorio es generado y no se sube al repositorio de código
/platforms         | Proyectos nativos (iOS y Android). Es autogenerado con _ionic state restore_ y no se sube al repositorio de código
/plugins           | Plugins de Apache Cordova. Este directorio es generado con _ionic state restore_ y no se sube al repositorio de código. Para añadir nuevos plugin utilizar _ionic plugin add_
/reports           | Reportes generados por tareas de Gulp (cobertura, junit, plato) y no se sube al repositorio de código
/src               | Código del proyecto
/src/client        | Codigo de la App
/src/client/app    | Estructura modular que agrupan funcionalidades, incluyendo ficheros JavaScript, Template y Specs, en vez de utilizar una estructura plana de carpetas agrupadas por tipo de fichero de código (js, templates, test).
/src/client/cache  | Fichero JavaScript con los templates de AngularJS. Es un directorio autogenerado por tareas de Gulp y no se versiona en el repositorio
/src/client/css    | Ficheros css y fonts. Es un directorio generado por tareas de Gulp y no se versiona en el repositorio
/src/client/img    | Ficheros de imagenes
/src/client/lib    | Dependencias manegadas con Bower. Es un directorio generado con el comando _bower intall_ y no se versiona en el repositorio de código
/src/client/scss   | Fichero Sass
/src/test-helpers  | Ficheros de ayuda para la ejecución de pruebas unitarias
/src/index.html    | Fichero index de la App
/src/server        | Servidor para publicar los servicios mocks utilizados por la App
/www               | Directorio build de la App. Utilizado por Apache Cordova como código Web
.bowerrc           | Especifica el directorio donde se graban las depedencias de la aplicación manegadas con Bower
.gitignore         | Ficheros y directoris ignorados por git y no versionados en el repositorio
.io-config.json    | Configuración manejada por Ionic Platform (ionic.io)
.jscsrc            | Configuración de reglas de estilo de jscsrc
.jscsrc            | Configuración de reglas de validación de jshint
bower.json         | Configuración de depedencias de la aplicación
config.xml         | Configuración de Apache Cordova
gulpfile.js        | Configuración de Gulp. Incluye la tareas para automatizar la construcción del proyecto
ionic.project      | Identificador de la aplicación en ionic.io
karma.conf.js      | Configuración de Karma para la ejecución de las pruebas unitarias
package.json       | Configuración de npm. Incluye dependencias utilizadas por Gulp para construcción del proyecto y la configuración de ionic de plataformas (iOS y Android) y plugins de Apache Cordova

# Inicialización
Para inicializar el proyecto:

```
git clone https://gitlab.com/josemanlopez/app-ionic.git
cd app-ionic
npm install -g cordova ionic bower jscs
bower install
npm install
```

Una vez se tiene el proyecto inicializado se puede construir y ejecutar en un navegador:

```
gulp build
ionic serve
```

Si se quiere ejecutar en un emulador o dispositivo es preciso inicializar previamente las plataformas (ios y/o android) y los plugins de Apache Cordova:

```
ionic state restore
ionic emulate
```

## Uso habitual
Para desarrollar se recomienda ejecutar _gulp watch_ en una ventana de comandos de forma que se realice un build continuo en la carpeta www, de forma que se pueda ejecutar en otra ventana de comandos _ionic emulate --livereload_ para ejecutar, en un emulador de iOS (recomendado por rendimiento) o Android, la aplicación y actualizar en caliente cualquier cambio que se realice en /src/client/app

También se puede ejecutar _ionic serve --livereload_ para ejecutar en un navegador en vez de un emulador o disposito, aunque por compatibilidad con los plugins de Apache Cordova (que no se pueden ejecutar en un navegador de escritorio) no es la opción recomendada.

Para probar una versión optimizada de la aplicación (código JavaScript y CSS contenado y minificado) ejectar _gulp package_ y a continuación ejecutar con los comandos de ionic anteriores.

# Listado de tareas
Listado de tareas principales de Gulp

Tarea    | Descripción
-------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
help     | Muestra el listado de tareas principales y secundarias
vet      | Analiza el código JavaScript de la aplicación con jscss  y jshint
plato    | Genera el informe de calidad de código JavScript de la aplicación en el directorio /reports
test     | Ejecuta las pruebas unitarias de la aplicación. Los informes junit y de cobertura de guardan en el directorio /reports
autotest | Ejecuta de forma continua las pruebas unitarias de  la aplicación para realizar TDD
jscs     | Ejecuta jscs en modo fix para resolver los errores de formato del código de la aplicación de forma automática
build    | Analiza el código, ejecuta los test, compila Sass, genera templates de AngularJS, inyecta dependencias de bower, ficheros JavaScript y css en index.html, y copia el código de la aplicación en el directorio www
watch    | Construye el proyecto y queda a la espera de cambios para realizar re-build
package  | Analiza el código, ejecuta los test, optimiza la aplicacion (minimiza css, inyecta dependencias explicitas de AngularJS, concatena JavaScript de la aplicación, minimiza JavaScript de aplicación y terceros, optimiza imagenes, incluye hash en el nombre de ficheros JavaScript), y copia una versión optimizada de la aplicación en el directorio www
clean    | Borra los directorios reports y www
