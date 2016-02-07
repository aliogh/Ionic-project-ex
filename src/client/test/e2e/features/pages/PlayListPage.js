'use strict';

var PlayListPage = function PlayListPage() {

    /* jshint -W126*/
    this.World = new (require('../support/World').World)();

    this.titleHeader = element.all(by.css('.title.header-item')).filter(this.World.getVisibleElements).first();
    this.detailPlayListTitle = element.all(by.css('ion-content')).filter(this.World.getVisibleElements).first().$('h1');

    var _this = this;

    this.waitForLoaded = function() {
        return _this.titleHeader.isPresent();
    };
};

module.exports = {
    'class': PlayListPage,
    name: 'PlayList'
};
