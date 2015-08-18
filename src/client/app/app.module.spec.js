describe('App Module:', function() {
    'use strict';

    var module;
    beforeEach(function() {
        module = angular.module('app');
    });

    it('should be registered', function() {
        expect(module).not.to.equal(null);
    });

    describe('Dependencies:', function() {
      var deps;
      var hasModule = function(m) {
          return deps.indexOf(m) >= 0;
      };
      beforeEach(function() {
          deps = module.value('appName').requires;
      });

      it('should have app.core as a dependency', function() {
          expect(hasModule('app.core')).to.equal(true);
      });

      it('should have app.browse as a dependency', function() {
          expect(hasModule('app.browse')).to.equal(true);
      });

      it('should have app.login as a dependency', function() {
          expect(hasModule('app.login')).to.equal(true);
      });

      it('should have app.menu as a dependency', function() {
          expect(hasModule('app.menu')).to.equal(true);
      });

      it('should have app.playlists as a dependency', function() {
          expect(hasModule('app.playlists')).to.equal(true);
      });

      it('should have app.search as a dependency', function() {
          expect(hasModule('app.search')).to.equal(true);
      });
  });
});
