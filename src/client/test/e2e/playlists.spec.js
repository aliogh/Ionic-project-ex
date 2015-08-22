/* jshint -W117, -W030, -W098 */
'use strict';

function getVisibleElements(elem) {
    return elem.isDisplayed();
}

describe('Playlists', function () {
    var playlist = element.all(by.binding('playlist.title')).first();
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
