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
    var reserva = {};
    vm.$onInit = onInit;
    vm.submitBook = submitBook; 
    vm.loadSpaServicesHttp = loadSpaServicesHttp;

    function submitBook(){
        debugger;
        var fecha = moment(vm.form.fechareserva).format('DD/MM/YYYY');
        var hora = moment(vm.form.fechareserva).format('HH:MM');
        reserva.nombres = vm.form.nombres;
        reserva.apellidos = vm.form.apellidos;
        reserva.email = vm.form.email;
        reserva.fechareserva = fecha;
        reserva.horareserva = vm.form.horareserva;
        reserva.idservicio = hora;
        reserva.estado = 1 ;

        spaReservas.save(reserva)
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
