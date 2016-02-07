'use strict';

var PlayListsPage = function PlayListsPage() {

    /* jshint -W126*/
    this.World = new (require('../support/World').World)();

    this.titleHeader = element.all(by.css('.title.header-item')).filter(this.World.getVisibleElements).first();
    this.playlistFirstLink = element.all(by.css('[href="#/app/playlists/1"]')).first();
    this.toggleMenuButton = element.all(by.css('.ion-navicon')).filter(this.World.getVisibleElements).first();

    this.get = function() {
        return browser.get('#/app/playlists');
    };

    var _this = this;

    this.waitForLoaded = function() {
        return _this.titleHeader.isPresent();
    };
};

module.exports = {
    'class': PlayListsPage,
    name: 'PlayLists'
};
