/* jshint -W117, -W030, -W098 */
'use strict';

function getVisibleElements(elem) {
    return elem.isDisplayed();
}

describe('Menu', function() {
    var toggleMenu = element.all(by.css('.ion-navicon')).filter(getVisibleElements).first();
    var loginOption = element(by.css('ion-item[ng-click="login()"]'));
    var searchOption = element(by.css('a[ng-href="#/app/search"]'));
    var browseOption = element(by.css('a[ng-href="#/app/browse"]'));
    var playlistsOption = element(by.css('a[ng-href="#/app/playlists"]'));
    var titleHeader = element.all(by.css('div[class="title title-left header-item"]'))
          .filter(getVisibleElements).first();
    var titleLogin = element(by.css('h1[class="title title-left"]'));

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

describe('Playlists', function () {
    var playlist = element(by.css('a[ng-href="#/app/playlists/1"]'));
    var detailPlayList = element.all(by.css('ion-content')).filter(getVisibleElements).first().$('h1');

    beforeEach(function() {
        browser.get('#/app/playlists');
    });

    it('El primer resultado es Reggae', function() {
        expect(playlist.getText()).toEqual('Reggae');
    });

    it('Página de detalle de la playlist Reggae', function() {
        playlist.click();
        expect(detailPlayList.getText()).toEqual('Playlist');
    });
});
