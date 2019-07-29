'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').factory('spaServices', spaServices);

spaServices.$inject = ['spaServicesHttp', '$q'];

function spaServices(spaServicesHttp, $q) {

    // var dataServices = [
    //     {id:1, name: 'Masaje Sencillo', cost: '60.000', description: '30 min de un genial masaje sin final', endHappy: false,
    //     image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'},
    //     {id:2, name: 'Exfoliación', cost: '120.000', description: '30 min de una maravillosa exfoliacion', endHappy: false,
    //     image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'},
    //     {id : 3, name: 'Masaje full', cost: '220.000', description: '60 min de un genial masaje sin final', endHappy: true,
    //     image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'}
    // ];

    var services = {
        getAllServices: loadSpaServicesHttp,
        getServicesById : getServicesById
    }

    return services;

    function loadSpaServicesHttp(){
        var defered = $q.defer();
        var promise = defered.promise;
        console.log('loadSpaServicesHttp loader');
        spaServicesHttp.getAll()
        .then(function(result){
            defered.resolve(result);
        })
        .catch(function(error){
            defered.reject(error);
        })

        return promise;
    }

    function getServicesById(id){
        for (var i=0; i < dataServices.length; i++){
            if(id == dataServices[i].id) return dataServices[i];
        }

        return null;
    }
    
};
