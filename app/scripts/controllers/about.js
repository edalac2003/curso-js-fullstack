'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('AboutCtrl', aboutController);

  aboutController.$inject = ['$state'];
  
  function aboutController($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('id: ', $state.params.id);
  };
