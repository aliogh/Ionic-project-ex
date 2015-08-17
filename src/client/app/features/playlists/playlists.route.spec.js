/* jshint -W117, -W030*/
describe('playlists', function() {
    'use strict';
    describe('state', function() {
        var views = {
            playlists: 'app/features/playlists/playlists.html',
            playlist: 'app/features/playlists/playlist.html',
            menu: 'app/layout/menu.html'
        };

        beforeEach(function() {
            module('app.playlists');
            bard.inject('$location', '$rootScope', '$state', '$templateCache', '$urlRouter');
            $templateCache.put(views.playlists, '');
            $templateCache.put(views.playlist, '');
            $templateCache.put(views.menu, '');
        });

        it('should map app/playlists route to playlists View template', function() {
            expect($state.get('app.playlists').views.menuContent.templateUrl).to.equal(views.playlists);
        });

        it('should route state app.playlists go view playlists', function() {
            $state.go('app.playlists');
            $rootScope.$digest();
            expect($state.is('app.playlists')).to.be.true;
        });

        it('should route url app/playlists go view playlists', function() {
            $location.path('app/playlists');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).to.equal(views.playlists);
        });

        it('should map app/playlist route to playlist View template', function() {
            expect($state.get('app.single').views.menuContent.templateUrl).to.equal(views.playlist);
        });

        it('should route state app.single go view playlist', function() {
            $state.go('app.single');
            $rootScope.$digest();
            expect($state.is('app.single'));
        });

        it('should route url app/playlists/:playlistId go view playlist', function() {
            $location.path('app/playlists/1');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).to.equal(views.playlist);
        });
    });
});
