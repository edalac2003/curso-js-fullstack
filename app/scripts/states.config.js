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
        controller: 'MainCtrl as vm'
    }

    var detailState = {
        name : 'home.detail',
        url : '/detail/{id}',
        templateUrl : 'views/detail.html',
        controller : 'AboutCtrl as vm'
    }

    var bookState = {
        name : 'home.book',
        url : '/book',
        templateUrl : 'views/book.html',
        controller : 'BookCtrl as vm'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    $stateProvider.state(detailState);
    $stateProvider.state(bookState);

    $urlRouterProvider.when('', '/');


}