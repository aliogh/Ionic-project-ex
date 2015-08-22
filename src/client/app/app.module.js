(function() {
    'use strict';

    angular
        .module('app', [
            'app.mocks',
            'app.core',
            'app.browse',
            'app.login',
            'app.menu',
            'app.playlists',
            'app.search'
        ]);
})();
