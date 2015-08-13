# Introducción
El repositorio parte de la base creada en la inicializacion de un proyecto con ionic/cordova, en concreto se ha utilizado el comando _ionic start app-ionic sidemenu_, incluyendose tareas de construccion basadas en el template de John Papa, _Hot Towel_:
- Generación de estilos con Saas
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
