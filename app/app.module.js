'use strict';
import 'angular';

// Define `petsApp` module
angular.module('petsApp', [
  ///...which depends on the `animalList` module
  'animalList'
]);