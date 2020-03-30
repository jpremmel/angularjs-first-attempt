'use strict';

//Register `animalList` component, along with its associated controller and template
angular.
module('animalList').
component('animalList', { //This name is what AngularJS uses to match to the `<animal-list>` element
  // Note: The URL is relative to `index.html` file
  templateUrl: 'animal-list/animal-list.template.html',
  controller: function AnimalListController() {
    this.animals = [
      {
        name: 'Sylvie',
        description: 'Grey, lanky, fluffy, distinct underbite'
      }, {
        name: 'Chunk',
        description: 'Floofy McCuddlebug, Diva'
      }, {
        name: 'Toad',
        description: 'Lovebug, Angel, Shy'
      }
    ];
  }
});