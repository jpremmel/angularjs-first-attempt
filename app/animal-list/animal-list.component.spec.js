'use strict';

describe('animalList', function() {

  //Load the module that contains the `animalList` component before each test
  beforeEach(module('animalList'));

  //Test the controller
  describe('AnimalListController', function() {
    it('Should create an `animals` model with 3 animals', inject(function($componentController) {
      var ctrl = $componentController('animalList');
      expect(ctrl.animals.length).toBe(3);
    }));
  });

});