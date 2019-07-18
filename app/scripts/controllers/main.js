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
    vm.myNombre = 'Edwin Acosta';
    vm.loadSpaServices = loadSpaServices;

    function onInit(){
        vm.loadSpaServices();
    }

    function loadSpaServices(){
        vm.serviceList = spaServices.getAllServices();
        console.log(vm.serviceList);
    }

};
