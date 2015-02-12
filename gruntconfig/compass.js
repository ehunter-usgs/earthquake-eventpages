'use strict';

var config = require('./config');

var CWD = process.cwd(),
    NODE_MODULES = CWD + '/node_modules';


var compass = {
  dev: {
    options: {
      sassDir: config.src + '/htdocs',
      cssDir: config.tmp,
      environment: 'development',
      importPath: [
        CWD + '/' + config.src,
        CWD + '/' + config.src + '/htdocs/modules',
        NODE_MODULES + '/hazdev-accordion/src',
        NODE_MODULES + '/hazdev-location-view/src',
        NODE_MODULES + '/hazdev-question-view/src',
        NODE_MODULES + '/hazdev-svgimagemap/src',
        NODE_MODULES + '/hazdev-tablist/src',
        NODE_MODULES + '/hazdev-template/src',
        NODE_MODULES + '/hazdev-webutils/src',
        NODE_MODULES + '/quakeml-parser-js/src'
      ]
    }
  }
};

module.exports = compass;
