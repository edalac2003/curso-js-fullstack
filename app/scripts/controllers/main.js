'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */


angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices'];

function mainCtrl(spaServices) {
    var vm = this;
    vm.$onInit = onInit;
    vm.loadSpaServicesHttp = loadSpaServicesHttp;

    function onInit(){
        vm.loadSpaServicesHttp();
    }

    function loadSpaServicesHttp(){
        console.log('loadSpaServicesHttp loader');
        spaServices.getAllServices()
        .then(function(result){
            vm.serviceList = result.data;
        })
        .catch(function(error){
            alert('AAAAAAAAAAAAAAAAAAAAAAAAAAaa')
        })

    }
};
