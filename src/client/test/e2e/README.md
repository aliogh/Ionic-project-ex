# Tabla de contenidos

- [Introduccion](#introduccion)
- [Entorno de desarrollo](#entorno-de-desarrollo)
- [Desarrollo de pruebas](#desarrollo-de-pruebas)
- [Ejecucion de pruebas](#ejecucion-de-pruebas)
- [Reportes de pruebas](#reportes-de-pruebas)
- [Ejecucion en paralelo](#ejecucion-en-paralelo)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Otros enlaces de interes](#otros-enlaces-de-interes)
- [Todo](#todo)

# Introduccion

El objetivo es disponer de pruebas funcionales automáticas de la aplicación sobre todos los navegadores en los que tiene que ser validada.

Hay que diferenciar entre la automatización, que hace referencia a la grabación o programación de acciones en la aplicación, y la implementación de pruebas automáticas, donde, apoyado en dicha automatización, el objetivo principal es verifica que la funcionalidad y ciertos elementos de la interfaz están implementados de forma correcta.

Aunque se puede realizar la implementación de pruebas funcionales automátias con diferentes aproximaciones, en nuestro caso se utiliza un enfoque BDD ([Behaviour-Driven Development](http://behaviourdriven.org)) para *guiar* el desarrollo a traves de la especificación de funcionalidades de la aplicación. Como framework se utiliza [Cucumber](https://cucumber.io), que emplea el DSL de texto plano [Gherkin](https://cucumber.io/docs/reference), mediante el cual el Product Owner detalla cada una de las funcionalidades y sus escenarios para describir el comportamiento del sistema/aplicación. Para la ejecución de las prueba en navegadores se utiliza [Protractor](https://angular.github.io/protractor/#/), framework que extiende el API que ofrece [Selenium  WebDriver](http://www.seleniumhq.org/) para facilitar las pruebas de aplicaciones Web construidas con AngularJS.

De esta forma se busca más alineamiento entre la especificación de funcionalidades por parte del Product Owner (PO), la implementación por el equipo de desarrollo, y la validación por el equipo de QA que realiza las pruebas automáticas y manuales. Se puede considerar a BDD como un enfoque que engloba TDD ([Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)) y DDD ([Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)), relancionando ambas poderosas técnicas para permiter realizar un desarrollo de software más efectivo y evidente para todas las parte involucradas.

## ¿No es sufiente solo con TDD?
TDD permite probar que el código funciona y validar que una función ha sido implementada correctamente, lo que conduce a escribir código minimilista y bien estructurado, además de dar la confianza de no *romper* código existente.

En cambio, no es de gran ayuda para describir como el sistema/aplicación debe de comportarse, y si se trabaja con medodologías ágiles es una interfaz terrible entre los desarrolladores y el product owner.

## ¿Que es BDD?
BDD fue desarrollado por [Dan North](http://dannorth.net/introducing-bdd) para disponer de una herramienta compartida entre desarrolladores y clientes. En un mundo agil el product owner pueden sentarse con los desarrolladores y escribir las caracteristicas (features) que le gustaria que el sistema/aplicación tuviera.

Trabajando de esta forma, es imprescindible que los desarrolladores tenga claro el problema y para esto es de gran ayuda definir un grupo de sentencias/frases que puedan mas tarde ser usadas como criterios de aceptación.

## Gherkin

La implentacion más habitual es de BDD es usar el lenguje [Gherkin](https://cucumber.io/docs/reference). Se trata de un languaje de dominio específico con una gramática para describir comportamiento sin tener que describir los detalles de implementación.

A continuación se incluye un ejemplo sencillo de una funcionalidad de login:

```gherkin
Feature: Login
  From login page I can log in

  Scenario: I do login with correct credentials
    Given I am in login page
    When I fill in username "gescobar"
    And I fill in password "Sanitas123"
    And I take a picture "login"
    And I click login button
    Then I am in home page

  Scenario: I do login with incorrect credentials
    Given I am in login page
    When I fill in username "gescobar"
    And I fill in password "Sanitas231"
    And I take a picture "login"
    And I click login button
    Then I am in login page
    And I see message incorrect password
```

No hay un códigos complejos en la descripción de las caracteristicas ni de sus escenarios, siendo un fichero que se lee como un texto plano en ingles (o español), de forma que desarrolladores y testers pueden sentarse con el product owner para escribirlo y/o revisarlo, sin que haya mala interpretación y para que sirva como criterios de aceptación.

Aunque esto en si mismo es de gran utilidad pues permite disponer de criterios de aceptación, es todovia mejor si se utiliza como metodología para el desarrollo de pruebas automáticas que permitan probar de forma repetida y predecible la funcionalidad del sistema/aplicación.

**NOTA**: las palabras de la sintaxis de Gherkin (feature, background, scenario, given, when, then, and, but, etc.) están traducidas a una gran cantidad de idiomas, incluido el español, pero se recomienda utilizar la versión en ingles. Si no hay un dominio de ingles, las sentencias en si misma se pueden escribir en español si se considera así que se tienen más claridad y compresión de todas las personas que forman parte del equipo, pues esto es un aspecto fundamental en el objetivo de la metodológia.

## Flujo de trabajo

A continuación se muestra un diagrama con el flujo de trabajo propuesto:

![](http://nicholasjackson.github.io/images/post_images/outside-in-development.png)

&nbsp;

Los desarrolladores/testers comienzan con una caracterisca a realizar, trabajando en sus escenario de forma incremental hasta que las pruebas pasan cada uno de los pasos que lo componen.

Para pasar los pasos de cada escenario, el desarrollador realiza pruebas unitarias, pasando éstas con el código que va implementado, con una aproximación TDD, y finalizando con su correspondiente refactor para optimizar el código.

Una vez todos los escenarios de una caracteristica pasan los pasos especificados con la sintaxis de Gherkin, entonces los criterios de aceptacion se pueden dar como cumplidos.

**Lo fundamental de este proceso no son las pruebas, es conseguir código de calidad.**

## Cucumber

Es el test runner que vamos a utilizar para lenguaje Gherkin y realizar BDD.

## Tareas realizadas por cada rol del equipo

- **Product Owner**: El PO debe de describir, de forma independiente y en detalle, cada una las caracteristicas de la aplicación, incluyeno los pasos a seguir para conseguir los resultados esperados.

- **App developers**: deben de leer y comprender cada carasteristica y escenario especificado por el PO. De forma complementaria al texto, el PO debe de explicar en que consiste cada carasteristicas y escenarios. En caso de dudas, respecto a lo entendido en una lectura previa por parte del equipo de desarrollo y QA/testers, serán planteadas al PO y actualizadas la descripción y escenarios de las caracteristicas.
El equipo de desarrollo deberán de incluir, en la medida de lo posible, identificadores en los componentes de interacción de las pantallas (campos de texto, etiquetas, botones, etc.) para facilitar su identificación para las pruebas automáticas.

- **QA Developers**: deben de realizar un entendimento de las caracteristicas descritas por el PO, y de forma similar al equipo de desarrollo, y plantear las dudas que surjan para una correcta implementación de las pruebas, tanto automáticas, manuales y exploratorias.

## Consideraciones a tener en cuenta

En las pruebas automáticas se debe de tener en cuenta la idempotencia de estas para lo cual se recomienda:

- Buscar un compromiso entre lo importante y un detalle excesivo en lo verificado en los flujos de interacción (escenario) de las pruebas. Por ejemplo, aunque en algunos casos puede ser de utilidad verificar la visualización, incluso posición, de elementos visuales, hay que tener en cuenta que pueden ser pruebas que se rompan con facilidad si se realizan cambios de UI. Por este motivo, es preferible centrarse preferiblemente en verificar flujos de navegación, pantallas a nivel general, lógica de negocio, etc.

- Si en las pruebas se verifican datos recuperados de servidor, lo que suele ser habitual, o funcionalidades o opciones dependientes del usuario con el se autentica, hay que tener en cuenta en las pruebas ésta dependencia de los datos recuperados esperados. En este sentido se recomienda acotar esta información en un conjunto de datos estáticos (que no cambie con el tiempo, ni se vean modificados con la ejecución de las pruebas) para garantizar la idempotencia, o tener la precaución de realizar validaciones no específicas a resultados concretos.

Por ejemplo, se puede optar por validar que se recuperan, para un determinado usuario, el número exacto de resultados de su histórico de citas o simplemente que se devuelven valores. Salvo que podamos controlar que siempre se devuelvan el mismo resultado/valores del histórico de citas, es preferible comprobar solo que se devuelve valores, pues aunque el grado de fidelidad de la prueba será menos, y siempre es preferible trabajar con un conjunto de datos estáticos, lo fundamental es siempre poder garantizar la idempotencia de la prueba.

## Protractor

Aunque seria posible utilizar directamente el API JavaScript de Selenium WebDriver para realizar el desarrollo de las pruebas especificadas con Cucumber.js, el uso de Protractor proporciona las siguiente facilidades cuando la aplicación está desarrollada con AngularJS:

- Los métodos antes de realizar busquedas en el DOM o acciones sobre los elementos, espera a AngularJS (inicializacion, $timeout, etc.)

*Protractor attempts to wait until the page is completely loaded before performing any action (such as finding an element or sending a command to an element).*

- Ofrece métodos especificos de localización de elementos específicos para AngularJS. Por ejemplo: addLocator, binding, exactBinding, model, buttonText, repeater, exactRepeater, cssContainingText, options, deepCss. Además, de incluir también todos los métodos de WebDriver
- Ofrece métodos para esperar que sucedan ciertas condiciones, como que el elemento sea clickable, visible, esté selecionado, etc.

Se recomienda revisar en detalle el [API de Protractor](http://angular.github.io/protractor/#/api)

# Entorno de desarrollo

## Prerequsitos

Instalar una versión de Node.js igual o superior a 4.2.x (necesesario para protractor ^3.0.0)

Actualizar la versión de npm:

```bash
npm -g install npm
```
Seguir los pasos de la instalación base del proyecto.

Instalar también los siguientes paquetes a nivel global, por comodidad:

```bash
npm -g install protractor elementor
webdriver-manager update
```

## Estructura del proyecto de pruebas

Se describen los elementos principales:

| Elemento           | Descripción                                                      |
|:-------------------|:-----------------------------------------------------------------|
| README.md          | Instrucciones de instalación y uso                               |
| ./features         | ficheros *.features de Cucumber en formato Gherkin               |
| ./features/support | Scripts base de ejecución de Cucumber y del patron Page Objects  |
| ./features/steps   | Scripts con la definición de las steps que componen las features |
| ./features/pages   | Clases que representan las páginas del patrón Paga Objects       |
| /reports/e2e       | Informes de la ejecución de las features en Cucumber             |

# Desarrollo de pruebas

A continuación se detallan los pasos a dar para crear una feature. Por ejemplo 01-login.feature.

&nbsp;

1. Crear en fichero con extensión .feature en el raiz de ./features usando la sintaxis de Gherkin

    Incluir la descripcion de la feature. En general pensar en que un usuario realiza algo para conseguir un resultado determinado, pudiento incluir un caso de uso principal y varios secundarios, lo que se describiran en el conjunto de escenario (de 1 a N) que conforma la feature.

    Por ejemplo, a continuación se muestra el detalle de una feature Login.

    ```gherkin
    Feature: Login
      From login page I can log in
    ```

    Despues de la sentencia ```Feature: <nombre de la feature>```, en la linea (o lineas) siguentes se incluye su descripción. En este caso solo es una sola linea, pero pueden ser varias si es necesario. De hecho se recomienda que tenga un detalle suficiente.

    A continuación se incluye el detalle de los escenarios que conforman la feature. El ejemplo anterior se puede complementar de la siguente forma. Recordar que al menos se debe de incluir un escenario.

    ```gherkin
    Feature: Login
      From login page I can log in

      Scenario: I do login
        Given I am on the "Login" page
        Then I type "gescobar" in the "username" field
          And I type "Sanitas123" in the "password" field
          And I click the "login" button
        Then I am on the "Home" page
    ```

    La sintaxis de los steps de los escenarios no es arbitraria, y sigue las expresiones regulares  definidos en ```steps/GeneralStepDefs.js```, entre las que se dispone out-of-the-box (cortesia de [Cukefarm](https://github.com/ReadyTalk/cukefarm)):

    ```
    Verificar que se va a una pagina concreta:

      "/^I (?:am on|go to) the "([^"]*)" page$/"

    Cambiar la resolución de la pantalla:

      "/^I (?:have|change to|resize to|rotate to) a (\d+)x(\d+) screen size$/"

    Navegar hacia atras en el navegador:

      "/^I (?:navigate|click) (?:backwards|back) in my browser$/"

    Se escribe un valor en un campo (input):

      "/^I type "([^"]*)" in(?:to)? the "([^"]*)" field$/"

    Se hace click en un link, botton, drop down list o tab:

      "/^I click the "([^"]*)"(?: )?(link|button|drop down list|tab|)$/"

    Se refresca la página:

      "/^I refresh the page$/"

    Se seleciona un valor en un drop down list:

      "/^I select "([^"]*)" in the "([^"]*)" drop down list$/"

    El titulo de la página es valor determiando:

      "/^the title should equal "([^"]*)$/"

    Un campo determinado debe o no debe estar activo:

      "/^the "([^"]*)" (should|should not) be active$/"

    Un campo determinado deberia estar presente en la página:

      "/^the "([^"]*)" should be present$/"

    Verificar que se está en una pagina concreta:

      "/^I (?:should be on|reach|am taken to) the "([^"]*)" page$/"

    Un campo determinado deberia tener/contener un texto determinado:

      "/^(?:the )?"([^"]*)" should (?:have|contain) the text "([^"]*)"$/"

    Un valor determinado deberia de aparecer un drop down list determinado:

      "/^"([^"]*)" should appear in the "([^"]*)" drop down list$/"

    Un campo derminado deberia ser visualizado en pantalla:

      "/^the "([^"]*)" (should|should not) be displayed$/"

    Un campo determinado deberia de contener un texto determinado:

      "/^(?:the )?"([^"]*)" should (?:have|contain) the placeholder text "([^"]*)"$/"

    Un botón, camop o drop down list determinado deberia o no deberia estar habilitado:

      "/^the "([^"]*)"(?: )?(button|field|drop down list|) (should|should not) be enabled$/"

    Un valor determinado deberia ser seleccinado en un drop down list determinado:

      "/^"([^"]*)" should be (?:selected|displayed) in the "([^"]*)" drop down list$/"

    Un checkbok determinado deberia estar o no marcado:

      "/^the "([^"]*)"(?: )?(checkbox|) (should|should not) be checked$/"
    ```

    De esta manera se consigue reutilizar la logica de acceso a los elementos del DOM con el API de protractor/webdriver así como la lógica de validación de chai.

    Si se necesitan más steps genéricos, basta con añadirlos al fichero GeneralStepDefs.js, y en el caso de ser necesesario steps específicos para alguna feature concreta, siempre se pueden incluir en un fichero del tipo <feature>StepDefs.js (por ejemplo, para la feature Login: LoginStepDefs.js). Aunque en la mayoria de los casos se deberá de optar, por simplicación, a usar los steps genéricos.

    Para la creación de nuevos steps tener en cuenta:

    - Reviasr los definidos en ```GeneralStepDefs.js``` a modo de guía.
    - Revisar el [API de Cucumber.js](https://github.com/cucumber/cucumber-js) para conocer tanto los parametros de entrada como los posibles valores de retorno de las implentaciones de los steps.
    - Revisar el [API de Protracto.js](http://angular.github.io/protractor/#/api).

3. Crear los objetos de página con sufijo Page en formato CamelCase y extensión .js para implementar el patrón Page Object (por ejemplo, LoginPage.js), de forma que publiquen los elementos que encapsula la página, encapsulando sus selectores css/xpath. De esta forma si cambia el id, css o ubicación del elemento en la página, no impacta en los steps, en donde nunca hay valores de selectores y sólo llamadas a métodos de objetos de página.

    **NOTA**: En esta estrategia de implementación del patrón Page Object, en vez de encapasular acciones que se puedan relalizar en la página, con mayor o menor granularidad (por ejemplo, de permitir rellenar un valor para el campo username, otro para el campo password y otro para pulsar el boton de logon, a directemante poder pasarle username y password a un método de logon), se opta por solo publicar los elementos de interación y utilizar steps genéricos para componer los escenearios de las features.

    Esto hace que la composición de los escenarios siempre tenga una granularidad a nivel de interacción de elementos, pero reduce en gran medida el numero de steps a implementar, reutiilzandose en gran medida los genéricos, pues el numero de accciones sobre los elementos en general es reducido.

    Por ejemplo, siguiendo el ejemplo, el fichero LoginPage.js podría ser:

    ```javascript
    'use strict';
    var LoginPage = function LoginPage() {

        this.titleHeader = element.all(by.css('h1.title')).get(1);
        this.usernameField = element(by.model('loginData.username'));
        this.passwordField = element(by.model('loginData.password'));
        this.loginButton = element(by.buttonText('Log in'));

        this.get = function() {
            return browser.get('#/app/login');
        };

        this.waitForLoaded = function() {
            return browser.wait((function(_this) {
                return function() {
                    return _this.titleHeader.isPresent();
                };
            })(this), 30000);
        };
    };

    module.exports = {
        'class': LoginPage,
        name: 'Login'
    };
    ```

    Las clases que implementan el patrón Page Object tienen que implementar como mínimo:

    - La propiedad 'class' que exporta tiene que coincidir con el nombre de la clase que se declara
    - La propiedad 'name' que se exporta tiene que coincidir con el nombre de la página que se indica en los steps de la feature
    - Se debe de incluir, al menos, un elemento para poder comprobar que la página se ha cargado
    - Se debe de incluir al menos los métodos:
      - this.get: para indicar como carga dicha página. Si a la pagina no se puede acceder directamente, es decir, solo por navegación desde otras, no es necesario este método.
      - this.waitForLoaded: para indicar como esperar a que esté cargada la página

    Los elementos que se referencien en la página (para comprobar que están o tiene un texto determinado, para escibir valores, pulsar en enlaces, botones, etc.) deben declararse como atributos del objeto página y utilizar los selectores css/xpath de protractor/webdriver para **localizar** los elementos en la página.

    Algunos elementos, como por ejemplo enlaces, botones, etc., deben de declararse como un sufijo determinado (Button, Link, Tab, etc.). Para más detalles, se recomienda reviar el detalle de implementación del step en el fichero ```GeneralStepDefs```.

    **ACTUALIZACIÓN**: Se han llevado las funciones de ejecución de los steps genéricos de ```GeneralStepDefs.js``` al script ```BaseStepDefs.js``` en el subdirectorio support, de forma que se puedan agrupar steps *unitarios* en steps más *genéricos*. Por ejemplo, para el caso del login podriamos crear un step como este:

    ```javascript
    (function() {
        'use strict';
        module.exports = function() {
            this.World = require('../support/World').World;

            this.Given(/^I log on the application$/, function() {
                this.typeField('gescobar', 'username');
                this.typeField('Sanitas123', 'password');
                this.clickField('login', 'Button');
            });

        };
    }).call(this);
    ```

    De forma que se pueda tener un backgroud, para features que necesiten autentificación en la aplicación, del tipo:

    ```gherkin
    Backgroud:
      Given I log on the application

    ```

## Localizacion de elementos

La parte de localizar los elementos para ver su contenidos o ejecutar acciones, como pulsar, arrastrar, doble tap, etc., es fundamental para implementar los page objects, y por tanto los steps de los test de los escenarios de las featuers.

Hay que distinguir entre localizar un elementos por su selector css o por xpath en la página.

Para esto, lo recomendable, en la medida de lo posible, es abrir la versión web de la aplicación ejecutando ```ionic serve```, navegando hasta la página de interés y mediante el inspector de Chrome (recomendado), Safari o Firefox, localizar visualmente el elemento y revisar la estructura en el código html para ver que selector css utilizar (mediante identificador, clase css, atributo, o elemento html, pudiendo anidar varios de ellos para concretar si es necesario).

En caso de ser complicado identificarlo con el selector css se puede optar por xpath, aunque suele generar un mayor acople a la estructura html y si luego se modifica la posición o se añaden elementos intermedios respecto a la raiz del documento, el selector dejaria de ser válido y habría que revisarlo.

Por esa razón, cuanto más sencillo y concreto sea el selector de búsqueda más robusto será este, y por tanto las pruebas que lo usen. La recomendación es desarrollar el HTML incluyendo identificadores para los elementos de interación o de evaluación en los test, pues simplifican enormemente los selectores y los hace además muy robusto a cambios en la UI.

Además en el caso de implementación con AngularJS y uso de Protractor.js, se dispone, además de los selectores de css/xpath, otros relacionado con los modelos y binding especificados en los templates HTML, simplificando en muchas ocasiones la localización de elementos y sin dependenica de la estructura de elementos de la página.

### Selector css / xpath / angularjs

Se recomienda ver los siguientes enlaces para entender los diferentes partes de la que se compone el selector css:

- [How to Use CSS Selector for Identifying Web Elements for Selenium Scripts](http://www.softwaretestinghelp.com/css-selector-selenium-locator-selenium-tutorial-6)
- [W3C CSS selectors](https://www.w3.org/TR/css3-selectors/)
- [XPath, CSS, DOM and Selenium: The Rosetta Stone](https://www.simple-talk.com/dotnet/.net-framework/xpath,-css,-dom-and-selenium-the-rosetta-stone)

Aunque con el inspector de un navegaor, por ejemplo, con Chrome (opción ```Copy > Copy selector``` o ```Copy > Copy XPath```) es facil obtener un posible selector css/xpath para un elemento, en general, salvo que el elemento tenga un identificador, obtendremos uno no optimo y con un gran acople a la estructura de la página.

Con protractor, como hemos comentado, no solo tenemos la opción de utilizar un selector css/xpath, y para facilitar la laborar de comprobación y busqueda de estos selectores, podemos utilzar la herramienta [Elementor](https://github.com/andresdominguez/elementor). En la página enlazada hay disponible un video y una explicación detalla de su uso.

Para ejecutar elementor es necesario:

1. Ejecutar webdriver en una consola

```
webdriver-manager start
```

2. Ejecutar elementor especificando la página bajo pruebas, por ejemplo:

```
elementor http://localhost:8100/
```

**NOTA**: es necesario clonar la pestaña para usar Chrome Inspector, pues cuando se lanza éste se desconecta la página de webdriver y no se sincroniza con el servidor de inspector.

Con inspector es posible validar selectors para comprobar que se seleciona un elemento, ninguno o varios de ellos. Utilizar el inspector para obtener recomendaciones de selectores para un elemento.

Esto también es posible hacer, en cierta medida, sin elementor, utilizando solo el inspector de Chrome [Evaluate and validate XPath/CSS selectors in Chrome Developer Tools](http://yizeng.me/2014/03/23/evaluate-and-validate-xpath-css-selectors-in-chrome-developer-tools/
).

# Ejecucion de pruebas

Es tan sencillo como ejecutar en el raiz del proyecto la tarea e2e. Por ejemplo:

- Modo standalone con mocks (modo típico para probar empaquetados): ```gulp e2e --standalone --mocks```
- Si se tiene ya publicada la aplicacion bajo pruebas (modo típico de desarrollo): ```gulp e2e```

## Configuraciones de resolución de pantallas (RWD)

En el fichero ```protractor.conf.js``` se puede especificar la resoluciones para:

- Resolución global de las prubas para DESKTOP, TABLET, y SMARTPHONE, pudiendose modificar los valores de corte en el fichero de configuración. Por ejemplo, para la ejecucion de TABLET: ```E2E_TABLET=true gulp e2e --standalone --mocks```

- En la configuración de las capacidades de los browsers especificados en ```multiCapabilities```. Esto es util cuando se quiren probar a la vez, en diferentes resoluciones (desktop, tablet y smartphone) en diferentes navegadores (chrome, firefox, ie, safari) a la vez, y incluyendolas en un único reporte de ruebas.

# Reportes de pruebas

El resultado de las pruebas está disponible en el directorio ```reports/e2e``` en el raiz del proyecto.

Los escenarios fallidos incluyen una captura de pantalla.

# Preguntas frecuentes

## Pregunta 1
- Q: ¿Cómo esperar hasta que elemento sea clickable, visible, etc.?
- A: En general protractor *espera* a que se terminen animaciones y timeouts de AngularJS antes de buscar en la página y realizar acciones sobre los elementos definidos. Pero en algunos casos, puede haber problemas para lo que será necesario realizar una espera explicita hasta que elemento esté visible, se puedar realizar click, etc. Para esto hay que utilizar las [ExpectedConditions](https://angular.github.io/protractor/#/api?view=ExpectedConditions) del API de Protractor. Por ejemplo, para esperar que un elemento sea clickable:

```javascript
var loginOption = element(by.css(...));
browser.wait(protractor.ExpectedConditions.elementToBeClickable(loginOption), 5000);
loginOption.click();
```

## Pregunta 2:
- Q: ¿Como selecionan todos los elementos que cumplen un selector?
- A: Usando el método all de element: ```element.all(by.css(#example))```

## Pregunta 3:
- Q: ¿Como modifico el timeout de ejecución de un step?
- A: En el fichero ```Env.js``` del subdirectorio support se puede especificar el timeout de ejecucuón de un step por Cucumber.js. También se puede especificar un timeout específico para steps. Ver:
  - [Protractor timeouts](https://github.com/angular/protractor/blob/master/docs/timeouts.md)
  - [Cucumber.js timeouts](https://github.com/cucumber/cucumber-js#timeouts).

## Pregunta 4:
  - Q: ¿Se pueden selecionar las pruebas a ejecutar, por ejemplo para lanzar sólo las que se estén implementado en un momento determinado?
  - A: En el fichero protractor.conf.js, en la sección cucumberOpt.tags se pueden definir tags para marcar features/scenarios para ser ejecutados o no ejecutados (con el prefijo ~). Por ejemplo, por defecto se incluyen los tags: @runThis (comentado por defecto) y ~@ignoreThis.

  Si se quire ignorar una feature y/o scenario basta con anotarlos con @ignoreThis. Si se quiere ejecutar solo uno o varias features y/o scenarios basta con anotarlos con @runThis y descomentar el tag en el fichero de configuraion.

## Pregunta 5:
  - Q: ¿Se pueden ejecutar las pruebas en más de un browser?
  - A: Si se pueden especifiar tantos como se necesiten en el el atributo ```multiCapabilities``` del fichero protractor.conf.js. Incluso se pueden incluir combinaciones de browsers y configuracion de éstos, como por ejemplo resolución, para probar simulando diferentes dispositivos (desktop, tablet, smartphone).

## Pregunta 6:
  - Q: ¿Se pueden ejecutar las pruebas contra un servidor remoto con webdriver?
  - A: Si basta descomentar (y comentar el resto: seleniumServerJar y directConnect) la opcion de ```seleniumAddress``` en el fichero protractor.conf.js, especifinado la ip y puerto de webdriver.

## Pregunta 7:
  - Q: ¿Se pueden añadir a contexto this métodos comunes que suelan ser utilizados por la implementación de los steps?
  - A: Si basta con añadirlos al prototype de la clase World.js del subdirectorio support.

## Pregunta 8:
  - Q: Algunos de los tests pueden tener diferente sensibilidad en su implementación con respecto a la necesidad de conexion de red, que hay datos establecidos en la base de datos / servicios, etc. ¿Podría clasificar de alguna forma los scenarios para poder ejecutarlos de forma diferente?
  - A: Si basta con incluir en estos scenarios un tag que los clasifique. Por ejemplo, se podrian tener pruebas de humo (smoke tests) donde no se necesite que haya datos específicos en la respuesta de los servicios/databases, otros que se puedan ejecutar con mocks, otros que se necesiten conexión a servicios, etc.

# Otros enlaces de interes

- [Protractor for AngularJS - Writing end-to-end tests has never been so fun](http://ramonvictor.github.io/protractor/slides/#/)
- [Protractor: Tips & Tricks](http://es.slideshare.net/bolshchikov/protractor-tips-tricks)
- [Meet Protractor](http://slides.com/derekeskens/meet-protractor/#/)
- [15 Expert Tips for Using Cucumber](https://blog.engineyard.com/2009/15-expert-tips-for-using-cucumber)
- [Best Practices for Writing User Stories and Acceptance Criteria in Gherkin](https://blog.grandcentrix.net/gherkin-guidelines-and-best-practices)
- [Automated Acceptance Testing from Scratch](http://es.slideshare.net/excellaco/automated-acceptance-testing-from-scratch)

# TODO
