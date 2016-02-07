'use strict';

var BrowsePage = function BrowsePage() {

    /* jshint -W126*/
    this.World = new (require('../support/World').World)();

    this.titleHeader = element.all(by.css('.title.header-item')).filter(this.World.getVisibleElements).first();

    this.waitForLoaded = function() {
        return browser.wait((function(_this) {
            return function() {
                return _this.titleHeader.isPresent();
            };
        })(this), 30000);
    };
};

module.exports = {
    'class': BrowsePage,
    name: 'Browse'
};
