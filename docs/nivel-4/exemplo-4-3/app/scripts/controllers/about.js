'use strict';

/**
 * @ngdoc function
 * @name exemplo43App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exemplo43App
 */
angular.module('exemplo43App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
