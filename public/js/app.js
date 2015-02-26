/*jslint node: true */
/*global angular */
"use strict";

var appModule = angular.module('app', []);
appModule.controller('clientsCtrl', function($scope, $http) {
    $http.get("api/clients").success(function(data) {
        $scope.clients = data;
    });
});
