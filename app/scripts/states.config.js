'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ['$stateProvider'];

function settings($stateProvider){
    
    var mainState = {
        name : 'main',
        url : '/',
        templateUrl : 'views/main.html'
    }

}