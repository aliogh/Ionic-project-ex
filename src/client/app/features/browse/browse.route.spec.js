/* jshint -W117, -W030*/
describe('browse', function() {
    'use strict';

    describe('state', function() {
        var views = {
            browse: 'app/features/browse/browse.html',
        };

        beforeEach(function() {
            module('app');
            bard.inject('$location', '$rootScope', '$state');
        });

        it('should map app/browse route to browse View template', function() {
            expect($state.get('app.browse').views.menuContent.templateUrl).toEqual(views.browse);
        });

        it('should route state app.browse go view browse', function() {
            $state.go('app.browse');
            $rootScope.$digest();
            expect($state.is('app.browse')).toBeTruthy();
        });

        it('should route url app/browse go view browse', function() {
            $location.path('app/browse');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).toEqual(views.browse);
        });
    });
});
