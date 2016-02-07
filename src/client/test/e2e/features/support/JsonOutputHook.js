'use strict';

var Cucumber = require('cucumber');
var fs = require('fs-extra');
var path = require('path');

var JsonFormatter = Cucumber.Listener.JsonFormatter();

var reportFile = '../../../../../../reports/e2e/cucumber-test-results.json';

module.exports = function JsonOutputHook() {
    JsonFormatter.log = function (json) {
        var destination = path.join(__dirname, reportFile);
        fs.outputFile(destination, json);
        console.log('json file location: ' + destination);
    };

    this.registerListener(JsonFormatter);
};
