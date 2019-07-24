'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */


angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices', 'spaServicesHttp'];

function mainCtrl(spaServices, spaServicesHttp) {
    var vm = this;
    vm.$onInit = onInit;
    vm.myNombre = 'Edwin Acosta';
    vm.loadSpaServices = loadSpaServices;
    vm.loadSpaServicesHttp = loadSpaServicesHttp;

    function onInit(){
        vm.loadSpaServices();
        vm.loadSpaServicesHttp;
    }

    function loadSpaServices(){
        vm.serviceList = spaServices.getAllServices();
        console.log(vm.serviceList);
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
