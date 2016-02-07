(function() {
    'use strict';
    module.exports = function() {
        /*jshint -W126 */
        this.World = new (require('../support/World').World)();

        this.Given(/^.*\(covered by .*\)$/, function() {});

        this.Given(/^I (?:am on|go to) the "([^"]*)" page$/, this.World.goToPage);

        this.Given(/^I (?:have|change to|resize to|rotate to) a (\d+)x(\d+) screen size$/, this.World.resizeScreen);

        this.When(/^I (?:navigate|click) (?:backwards|back) in my browser$/, this.World.backwards);

        this.When(/^I type "([^"]*)" in(?:to)? the "([^"]*)" field$/, this.World.typeField);

        this.When(/^I click the "([^"]*)"(?: )?(link|button|drop down list|tab|)$/, this.World.clickField);

        this.When(/^I refresh the page$/, this.World.refreshBrowser);

        this.When(/^I select "([^"]*)" in the "([^"]*)" drop down list$/, this.World.selectDropDownList);

        this.Then(/^the title should equal "([^"]*)"$/, this.World.titleEquals);

        this.Then(/^the "([^"]*)" (should|should not) be active$/, this.World.fieldActive);

        this.Then(/^the "([^"]*)" should be present$/, this.World.fieldPresent);

        this.Then(/^I (?:should be on|reach|am taken to) the "([^"]*)" page$/, this.World.beOnPage);

        this.Then(/^(?:the )?"([^"]*)" should (?:have|contain) the text "([^"]*)"$/, this.World.fieldContainText);

        this.Then(/^"([^"]*)" should appear in the "([^"]*)" drop down list$/, this.World.valueInDropDownList);

        this.Then(/^the "([^"]*)" (should|should not) be displayed$/, this.World.fieldDisplayed);

        this.Then(/^(?:the )?"([^"]*)" should (?:have|contain) the placeholder text "([^"]*)"$/, this.World.fieldContainPlaceholderText);

        this.Then(/^the "([^"]*)"(?: )?(button|field|drop down list|) (should|should not) be enabled$/, this.World.fieldEnable);

        this.Then(/^"([^"]*)" should be (?:selected|displayed) in the "([^"]*)" drop down list$/, this.World.valueSelectedInDropDrowList);

        this.Then(/^the "([^"]*)"(?: )?(checkbox|) (should|should not) be checked$/, this.World.checkboxSelected);
    };

}).call(this);
