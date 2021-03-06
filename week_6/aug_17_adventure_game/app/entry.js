'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm  modules
const angular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./controller/game-controller.js');
