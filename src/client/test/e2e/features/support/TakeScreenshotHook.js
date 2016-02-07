'use strict';

//var util = require('util');

module.exports = function TakeScreenshot() {
    this.After(function (scenario, callback) {
        //console.log(util.inspect(scenario, { showHidden: true, depth: null }));
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'base64').toString('binary');
                scenario.attach(decodedImage, 'image/png');
                callback();
            });
        } else {
            callback();
        }
    });
};
