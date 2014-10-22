'use strict';

/**
 * @ngdoc function
 * @name exemplo43App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exemplo43App
 */
angular.module('exemplo43App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
