'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookControllerCtrl
 * @description
 * # BookControllerCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServicesHttp'];

function bookCtrl(spaServicesHttp) {
  var vm = this;
  vm.form = {};
  vm.submitBook = submitBook; 
  vm.$onInit = onInit();
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function onInit(){
    vm.loadSpaServices;
    vm.loadSpaServicesHttp;
    console.log('Book Controller loader. . .');
  }

  function submitBook(){
    console.log('Formulario' + vm.form);
  }

  function loadSpaServicesHttp(){
    console.log('loadSpaServicesHttp loader');
    spaServicesHttp.getAll()
    .then(function(result){
        vm.serviceList = result.data;
    })
    .catch(function(error){
        alert('AAAAAAAAAAAAAAAAAAAAAAAAAAaa')
    })

  }
};
