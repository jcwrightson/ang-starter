'use strict';

angular.module('app.controllers', []);


// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',

    'app.routes',
    'app.controllers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]);
