'use strict';

var gruntConfig = {
  config: require('./config'),

  clean: require('./clean'),
  compass: require('./compass'),
  concurrent: require('./concurrent'),
  connect: require('./connect'),
  copy: require('./copy'),
  cssmin: require('./cssmin'),
  htmlmin: require('./htmlmin'),
  jshint: require('./jshint'),
  mocha_phantomjs: require('./mocha_phantomjs'),
  replace: require('./replace'),
  requirejs: require('./requirejs'),
  uglify: require('./uglify'),
  watch: require('./watch'),

  tasks: [
    'grunt-concurrent',
    'grunt-connect-proxy',
    'grunt-connect-rewrite',
    'grunt-contrib-clean',
    'grunt-contrib-compass',
    'grunt-contrib-connect',
    'grunt-contrib-copy',
    'grunt-contrib-cssmin',
    'grunt-contrib-htmlmin',
    'grunt-contrib-jshint',
    'grunt-contrib-requirejs',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-mocha-phantomjs',
    'grunt-text-replace'
  ]
};

module.exports = gruntConfig;
