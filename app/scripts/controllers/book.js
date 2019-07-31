'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookControllerCtrl
 * @description
 * # BookControllerCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServices', 'spaReservas'];

function bookCtrl(spaServices, spaReservas) {
    var vm = this;
    vm.form = {};
    vm.$onInit = onInit;
    vm.submitBook = submitBook; 
    vm.loadSpaServicesHttp = loadSpaServicesHttp;

    function submitBook(){
        debugger;
        console.log('Formulario' + vm.form);
        spaReservas.save()
        .then(function(result){
            
        })
        .catch(function(error){
            alert('Error: ' + error)
        })
    }

    function onInit(){
        vm.loadSpaServicesHttp();
    }

    function loadSpaServicesHttp(){
        console.log('Booking loader');
        spaServices.getAllServices()
        .then(function(result){
            vm.serviceList = result.data;
        })
        .catch(function(error){
            alert('Error: ' + error)
        })
    }
}
