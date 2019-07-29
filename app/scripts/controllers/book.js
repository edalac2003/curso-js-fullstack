'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookControllerCtrl
 * @description
 * # BookControllerCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServices'];

function bookCtrl(spaServices) {
  var vm = this;
  vm.form = {};
  vm.$onInit = onInit();
  vm.submitBook = submitBook; 
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function submitBook(){
    debugger;
    console.log('Formulario' + vm.form);
  }

  function onInit(){
    debugger;
      vm.loadSpaServicesHttp();
  }

  function loadSpaServicesHttp(){
    debugger;
    console.log('Booking loader');
      spaServices.getAllServices()
      .then(function(result){
          vm.serviceList = result.data;
      })
      .catch(function(error){
          alert('AAAAAAAAAAAAAAAAAAAAAAAAAAaa')
      })

  }
}
