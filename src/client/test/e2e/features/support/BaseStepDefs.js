(function() {
    'use strict';
    var BaseStepDefs;

    BaseStepDefs = (function() {
        function BaseStepDefs() {}

        BaseStepDefs.prototype.goToPage = function(pageName) {
            if (this.pageObjectMap[pageName] == null) {
                throw new Error('Could not find page with name \'' + pageName +
                '\' in the PageObjectMap, did you remember to add it?');
            }

            this.currentPage = new this.pageObjectMap[pageName]();
            this.currentPage.get();
            return this.currentPage.waitForLoaded();
        };

        BaseStepDefs.prototype.backwards = function() {
            return browser.navigate().back();
        };

        BaseStepDefs.prototype.resizeScreen = function(width, height) {
            return browser.manage().window().setSize(parseInt(width, 10), parseInt(height, 10));
        };

        BaseStepDefs.prototype.typeField = function(text, fieldName) {
            var field;
            field = this.transform.stringToVariableName(fieldName + 'Field');
            this.currentPage[field].clear();
            return this.currentPage[field].sendKeys(text);
        };

        BaseStepDefs.prototype.clickField = function(elementName, elementType) {
            var element;
            elementType = this.transform.elementTypeToVariableName(elementType);
            element = this.transform.stringToVariableName(elementName + elementType);
            console.log('element: ' + elementName + elementType);
            return this.currentPage[element].click();
        };

        BaseStepDefs.prototype.refreshBrowser = function() {
            return browser.refresh();
        };

        BaseStepDefs.prototype.selectDropDownList = function(optionText, list) {
            return this.currentPage[this.transform.stringToVariableName(list + 'Select')]
              .element(protractor.by.cssContainingText('option', optionText)).click();
        };

        BaseStepDefs.prototype.titleEquals = function(text) {
            return this.expect(browser.getTitle()).to.eventually.equal(text);
        };

        BaseStepDefs.prototype.fieldActive = function(tabName, expectation) {
            this.tabName = this.transform.stringToVariableName(tabName);
            this.expectation = this.transform.shouldToBoolean(expectation);
            return this.expect(this.elementHelper.hasClass(this.currentPage[this.tabName], 'active'))
              .to.eventually.equal(this.expectation);
        };

        BaseStepDefs.prototype.fieldPresent = function(el) {
            this.el = this.transform.stringToVariableName(el);
            return this.expect(this.currentPage[this.el].isPresent()).to.eventually.equal(true);
        };

        BaseStepDefs.prototype.beOnPage = function(pageName) {
            this.currentPage = new this.pageObjectMap[pageName]();
            return this.currentPage.waitForLoaded();
        };

        BaseStepDefs.prototype.fieldContainText = function(el, text) {
            var elText;
            this.el = this.currentPage[this.transform.stringToVariableName(el)];
            elText = this.el.getTagName().then((function(_this) {
                return function(tagName) {
                    var isInput;
                    isInput = tagName === 'input';
                    if (isInput) {
                        return _this.el.getAttribute('value');
                    } else {
                        return _this.el.getText();
                    }
                };
            })(this));

            return this.expect(elText).to.eventually.contain(text);
        };

        BaseStepDefs.prototype.valueInDropDownList = function(option, list) {
            var optionsText;
            this.list = this.currentPage[this.transform.stringToVariableName(list + 'Select')];
            optionsText = this.list.all(by.tagName('option')).map(function(element/*, index*/) {
                return element.getText();
            });

            return this.expect(optionsText).to.eventually.contain(option);
        };

        BaseStepDefs.prototype.fieldDisplayed = function(el, shouldBeDisplayed) {
            this.shouldBeDisplayed = this.transform.shouldToBoolean(shouldBeDisplayed);
            this.el = this.transform.stringToVariableName(el);
            return this.currentPage[this.el].isDisplayed().then((function(_this) {
                return function(isDisplayed) {
                    return _this.expect(isDisplayed).to.equal(_this.shouldBeDisplayed);
                };

            })(this), (function(_this) {

                return function(err) {
                    if (err.name === 'NoSuchElementError') {
                        return _this.expect(false).to.equal(_this.shouldBeDisplayed);
                    }

                    throw err;
                };
            })(this));
        };

        BaseStepDefs.prototype.fieldContainPlaceholderText = function(el, text) {
            this.el = this.currentPage[this.transform.stringToVariableName(el)];
            return this.expect(this.el.getAttribute('placeholder')).to.eventually.contain(text);
        };

        BaseStepDefs.prototype.fieldEnable = function(el, elType, expectation) {
            var elementType;
            elementType = this.transform.elementTypeToVariableName(elType);
            this.el = this.transform.stringToVariableName(el + elementType);
            this.expectation = this.transform.shouldToBoolean(expectation);
            return this.expect(this.currentPage[this.el].isEnabled()).to.eventually.equal(this.expectation);
        };

        BaseStepDefs.prototype.valueSelectedInDropDrowList = function(optionText, list) {
            var option;
            this.list = this.currentPage[this.transform.stringToVariableName(list + 'Select')];
            option = this.list.element(by.cssContainingText('option', optionText));
            return this.expect(option.isSelected()).to.eventually.be['true'];
        };

        BaseStepDefs.prototype.checkboxSelected = function(el, elType, expectation) {
            var elementType;
            elementType = this.transform.elementTypeToVariableName(elType);
            this.el = this.transform.stringToVariableName(el + elementType);
            this.expectation = this.transform.shouldToBoolean(expectation);
            return this.expect(this.currentPage[this.el].isSelected()).to.eventually.equal(this.expectation);
        };

        return BaseStepDefs;

    })();

    module.exports = BaseStepDefs;
}).call(this);
