/*jslint node: true */
/*global angular */
"use strict";

var appModule = angular.module('app', ['ui.router']);
appModule.controller('clientsCtrl', function($scope, $http) {
    $http.get("api/clients").success(function(data) {
        $scope.clients = data;
    });
});

appModule.controller('mainCtrl', function($scope, $http, $state) {
    $scope.gotoClients = function() {
        $state.go('clients');
    };

});

appModule.controller('homeCtrl', function($scope, $http) {

});

appModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        });

    $stateProvider
        .state("clients", {
            url: "/clients",
            templateUrl: 'clients.html',
            controller: 'clientsCtrl'
        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
});

