(function() {
    'use strict';

    var ElementHelper, Transform, _World, chai, chaiAsPromised, BaseStepDefs;

    chai = require('chai');

    chaiAsPromised = require('chai-as-promised');

    ElementHelper = require('./ElementHelper.js');

    Transform = require('./Transform.js');

    var getVisibleElements = function(elem) {
        return elem.isDisplayed();
    };

    /*jshint -W126 */
    BaseStepDefs = new (require('./BaseStepDefs.js'))();

    _World = (function() {
        World.prototype.Q = require('q');

        World.prototype.elementHelper = new ElementHelper();

        World.prototype.transform = new Transform();

        World.prototype.currentPage = null;

        World.prototype.pageObjectMap = require('./PageObjectMap');

        World.prototype.getVisibleElements = getVisibleElements;

        World.prototype.typeField = BaseStepDefs.typeField;

        World.prototype.goToPage = BaseStepDefs.goToPage;

        World.prototype.clickField = BaseStepDefs.clickField;

        World.prototype.backwards = BaseStepDefs.backwards;

        World.prototype.resizeScreen = BaseStepDefs.resizeScreen;

        World.prototype.refreshBrowser = BaseStepDefs.refreshBrowser;

        World.prototype.selectDropDownList = BaseStepDefs.selectDropDownList;

        World.prototype.titleEquals = BaseStepDefs.titleEquals;

        World.prototype.fieldActive = BaseStepDefs.fieldActive;

        World.prototype.fieldPresent = BaseStepDefs.fieldPresent;

        World.prototype.beOnPage = BaseStepDefs.beOnPage;

        World.prototype.fieldContainText = BaseStepDefs.fieldContainText;

        World.prototype.valueInDropDownList = BaseStepDefs.valueInDropDownList;

        World.prototype.fieldDisplayed = BaseStepDefs.fieldDisplayed;

        World.prototype.fieldContainPlaceholderText = BaseStepDefs.fieldContainPlaceholderText;

        World.prototype.fieldEnable = BaseStepDefs.fieldEnable;

        World.prototype.valueSelectedInDropDrowList = BaseStepDefs.valueSelectedInDropDrowList;

        World.prototype.checkboxSelected = BaseStepDefs.checkboxSelected;

        function World() {
            chai.use(chaiAsPromised);
            this.expect = chai.expect;
        }

        return World;

    })();

    module.exports.World = _World;

}).call(this);
