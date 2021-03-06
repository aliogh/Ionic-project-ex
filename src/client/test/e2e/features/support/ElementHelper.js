(function() {
    'use strict';
    var ElementHelper;

    ElementHelper = (function() {
        function ElementHelper() {}

        ElementHelper.prototype.hasClass = function(element, cls) {
            return element.getAttribute('class').then(function(classes) {
                return classes.split(' ').indexOf(cls) !== -1;
            });
        };

        return ElementHelper;

    })();

    module.exports = ElementHelper;

}).call(this);
