/* jshint -W117, -W030*/
'use strict';
describe('browse', function() {
    describe('state', function() {
        var views = {
            browse: 'app/features/browse/browse.html',
            menu: 'app/features/menu/menu.html'
        };

        beforeEach(function() {
            module('app.browse');
            bard.inject('$location', '$rootScope', '$state', '$templateCache', '$urlRouter');
            $templateCache.put(views.browse, '');
            $templateCache.put(views.menu, '');
        });

        it('should map app/browse route to browse View template', function() {
            expect($state.get('app.browse').views.menuContent.templateUrl).to.equal(views.browse);
        });

        it('should route state app.browse go view browse', function() {
            $state.go('app.browse');
            $rootScope.$digest();
            expect($state.is('app.brose'));
        });

        it('should route url app/browse go view browse', function() {
            $location.path('app/browse');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).to.equal(views.browse);
        });
    });
});
