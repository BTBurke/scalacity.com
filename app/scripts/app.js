(function() {
  'use strict';

  var app;

  app = angular.module('App', ['App.session']);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'SessionCtrl'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'SessionCtrl'
      }).when('/learn', {
        templateUrl: 'views/learn.html',
        controller: 'SessionCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
