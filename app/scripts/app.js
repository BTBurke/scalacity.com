(function() {
  'use strict';

  var app;

  app = angular.module('App', ['App.session']);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'SessionCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
