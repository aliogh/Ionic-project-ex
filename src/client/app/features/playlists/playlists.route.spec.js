/* jshint -W117, -W030*/
describe('playlists', function() {
    'use strict';

    describe('state', function() {
        var views = {
            playlists: 'app/features/playlists/playlists.html',
            playlist: 'app/features/playlists/playlist.html',
        };

        beforeEach(function() {
            module('app');
            bard.inject('$location', '$rootScope', '$state');
        });

        it('should map app/playlists route to playlists View template', function() {
            expect($state.get('app.playlists').views.menuContent.templateUrl).toEqual(views.playlists);
        });

        it('should route state app.playlists go view playlists', function() {
            $state.go('app.playlists');
            $rootScope.$digest();
            expect($state.is('app.playlists')).toBeTruthy();
        });

        it('should route url app/playlists go view playlists', function() {
            $location.path('app/playlists');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).toEqual(views.playlists);
        });

        it('should map app/playlist route to playlist View template', function() {
            expect($state.get('app.single').views.menuContent.templateUrl).toEqual(views.playlist);
        });

        it('should route state app.single go view playlist', function() {
            $state.go('app.single');
            $rootScope.$digest();
            expect($state.is('app.single')).toBeTruthy();
        });

        it('should route url app/playlists/:playlistId go view playlist', function() {
            $location.path('app/playlists/1');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).toEqual(views.playlist);
        });
    });
});
