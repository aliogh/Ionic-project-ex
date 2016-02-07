'use strict';

var MenuPage = function MenuPage() {

    /* jshint -W126*/
    this.World = new (require('../support/World').World)();

    this.titleMenu = element.all(by.css('h1.title.ng-binding')).filter(this.World.getVisibleElements).first();

    this.loginLink = element(by.css('ion-item[ng-click="login()"]'));
    this.searchLink = element(by.linkText('Search'));
    this.browseLink = element(by.linkText('Browse'));
    this.playListsLink = element(by.css('a[ng-href="#/app/playlists"]'));

    var _this = this;

    this.waitForLoaded = function() {
        return _this.titleMenu.isPresent();
    };
};

module.exports = {
    'class': MenuPage,
    name: 'Menu'
};
