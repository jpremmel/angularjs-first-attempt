'use strict';
const angular = require('angular');

// Define `petsApp` module
angular.module('petsApp', [
  ///...which depends on the `animalList` module
  'animalList'
]);