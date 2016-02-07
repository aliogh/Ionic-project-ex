'use strict';
exports.config = {
    baseUrl: 'http://localhost:8100/',
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
    //directConnect: true,
    specs: ['./src/client/test/e2e/features/*.feature'],
    resultJsonOutputFile: './reports/e2e/protractor-test-results.json',
    cucumberOpts: {
        require: [
            './src/client/test/e2e/features/steps/*.js',
            './src/client/test/e2e/features/support/*.js',
            './src/client/test/e2e/features/pages/*.js'
        ],
        format: 'pretty',
        tags: [
            //'@runThis',
            '~@ignoreThis'
        ]
    },
    // Se pueden especificar resoluciones generales con onPrepare
    // o se pueden especificar varios browsers/resolucionts en
    // la configuraciónd de multiCapabilities si se quiere tener
    // un único reporte de pruebas
    onPrepare: function() {
        browser.manage().window().setPosition(0, 0);

        if (process.env.E2E_TABLET) {
            browser.manage().window().setSize(1024, 768);
        } else if (process.env.E2E_SMARTPHONE) {
            browser.manage().window().setSize(360, 598);
        } else if (process.env.E2E_DESKTOP) {
            setTimeout(function() {
                browser.driver.executeScript(function() {
                    return {
                        width: window.screen.availWidth,
                        height: window.screen.availHeight
                    };
                }).then(function(result) {
                    browser.driver.manage().window().setSize(result.width, result.height);
                });
            });
        }
    },
    multiCapabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--lang=es', '--window-size=360,598']
        }
    }/*, {
        browserName: 'firefox'
    }, {
        browserName: 'safari'
    }*/]
};
