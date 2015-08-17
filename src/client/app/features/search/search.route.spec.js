/* jshint -W117, -W030*/
describe('search', function() {
    'use strict';
    describe('state', function() {
        var views = {
            search: 'app/features/search/search.html',
            menu: 'app/features/menu/menu.html'
        };

        beforeEach(function() {
            module('app.search');
            bard.inject('$location', '$rootScope', '$state', '$templateCache', '$urlRouter');
            $templateCache.put(views.search, '');
            $templateCache.put(views.menu, '');
        });

        it('should map app/search route to search View template', function() {
            expect($state.get('app.search').views.menuContent.templateUrl).to.equal(views.search);
        });

        it('should route state app.search go view search', function() {
            $state.go('app.search');
            $rootScope.$digest();
            expect($state.is('app.search')).to.be.true;
        });

        it('should route url app/search go view search', function() {
            $location.path('app/search');
            $rootScope.$digest();
            expect($state.current.views.menuContent.templateUrl).to.equal(views.search);
        });
    });
});
