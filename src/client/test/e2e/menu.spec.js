/* jshint -W117, -W030, -W098 */
'use strict';

function getVisibleElements(elem) {
    return elem.isDisplayed();
}

describe('Menu', function() {
    var toggleMenu = element.all(by.css('.ion-navicon')).filter(getVisibleElements).first();
    var loginOption = element(by.css('ion-item[ng-click="login()"]'));
    var searchOption = element(by.linkText('Search'));
    var browseOption = element(by.linkText('Browse'));
    var playlistsOption = element(by.css('a[ng-href="#/app/playlists"]'));
    var titleHeader = element.all(by.css('.title.header-item')).filter(getVisibleElements).first();
    var titleLogin = element.all(by.css('h1.title')).get(1);

    beforeEach(function() {
        browser.get('#/');
        toggleMenu.click();
    });

    it('Opción Login', function() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(loginOption), 5000);
        loginOption.click();
        expect(titleLogin.getText()).toEqual('Login');
    });

    it('Opción Search', function() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchOption), 5000);
        searchOption.click();
        expect(titleHeader.getText()).toEqual('Search');
    });

    it('Opción Browse', function() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(browseOption), 5000);
        browseOption.click();
        expect(titleHeader.getText()).toEqual('Browse');
    });

    it('Opción Playlists', function() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(playlistsOption), 5000);
        playlistsOption.click();
        expect(titleHeader.getText()).toEqual('Playlists');
    });
});
