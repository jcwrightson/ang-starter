'use strict';

angular.module('app.routes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '_landing/landing.tmpl.html',
                controller: 'LandingCtrl'}
            )
    }])
;