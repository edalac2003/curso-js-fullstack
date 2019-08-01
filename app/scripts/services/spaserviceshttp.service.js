(function(){

'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').service('spaServicesHttp', spaServicesHttp);

spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesHttp($http, $q, httpConfig) {

    let services = {
        getAll : getAll
    }

    return services;

    function getAll(){
        var defered = $q.defer();
        var promise = defered.promise;
        const url = httpConfig.url + httpConfig.services.all
        $http.get(url)
        .then(function(data){
            console.log(data);
            defered.resolve(data);
        })
        .catch(function(error){
            defered.reject('Error : ' + error);
        });

        return promise;
    }
    
}
})();
