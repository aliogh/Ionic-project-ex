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
