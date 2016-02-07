'use strict';

var SearchPage = function SearchPage() {

    /* jshint -W126*/
    this.World = new (require('../support/World').World)();

    this.titleHeader = element.all(by.css('.title.header-item')).filter(this.World.getVisibleElements).first();

    var _this = this;

    this.waitForLoaded = function() {
        return _this.titleHeader.isPresent();
    };
};

module.exports = {
    'class': SearchPage,
    name: 'Search'
};
