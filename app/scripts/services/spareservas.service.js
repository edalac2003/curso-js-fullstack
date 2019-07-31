'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaReservas.service
 * @description
 * # spaReservas.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp').service('spaReservas', spaReservas);

spaReservas.$inject = ['$http', '$q', 'httpConfig'];

function spaReservas($http, $q, httpConfig) {

    let services = {
        save : save
    }

    return services;

    function save(reserva){
        var defered = $q.defer();
        var promise = defered.promise;
        const url = httpConfig.url + httpConfig.services.save
        $http.post(url, reserva)
        .then(function(data){
            defered.resolve(data);
        })
        .catch(function(error){
            defered.reject('Error al conectar con el web services');
        });

        return promise;
    }
}