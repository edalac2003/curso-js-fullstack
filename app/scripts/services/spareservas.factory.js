'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spareservas.factory
 * @description
 * # spareservas.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').factory('spaReservas', spaReservas);

spaReservas.$inject = ['spaReservas', '$q'];

function spareservas(spaReservas, $q) {

    var services = {
        saveReserva: saveSpaReserva
    }

    return services;

    function saveSpaReserva(){
        var defered = $q.defer();
        var promise = defered.promise;
        spaReservas.getAll()
        .then(function(result){
            defered.resolve(result);
        })
        .catch(function(error){
            defered.reject(error);
        })

        return promise;
    }

   
};
