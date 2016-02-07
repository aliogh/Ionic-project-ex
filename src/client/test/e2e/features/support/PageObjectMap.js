'use strict';

var files, globule, i, page, path;

globule = require('globule');
path = require('path');

files = globule.find('./src/client/test/e2e/features/pages/*.js');

for (i = 0; i < files.length; i++) {
    page = require(path.resolve(files[i]));
    module.exports[page.name] = page['class'];
}
