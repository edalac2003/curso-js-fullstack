'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ['$stateProvider','$urlRouterProvider'];

function settings($stateProvider, $urlRouterProvider){
    
    var homeState = {
        abstract: true,
        name : 'home',
        templateUrl : 'views/home.html'
    }

    var mainState = {
        name : 'home.main',
        url : '/',
        templateUrl : 'views/main.html',
        controller: 'MainCtrl as contexto'
    }

    var aboutState = {
        name : 'home.about2',
        url : '/about',
        templateUrl : 'views/about.html'
    }

    var detailState = {
        name : 'home.about',
        url : '/about/{id}',
        templateUrl : 'views/about.html',
        controller : 'AboutCtrl as vm'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    $stateProvider.state(detailState);

    $urlRouterProvider.when('', '/');


}