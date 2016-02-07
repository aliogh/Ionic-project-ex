'use strict';

var LoginPage = function LoginPage() {

    this.titleHeader = element.all(by.css('h1.title')).get(1);
    this.usernameField = element(by.model('loginData.username'));
    this.passwordField = element(by.model('loginData.password'));
    this.loginButton = element(by.buttonText('Log in'));

    var _this = this;

    this.waitForLoaded = function() {
        return _this.titleHeader.isPresent();
    };
};

module.exports = {
    'class': LoginPage,
    name: 'Login'
};
