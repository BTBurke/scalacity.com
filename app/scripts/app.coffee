'use strict'

app = angular.module('App', [
  'App.session'
  ])


app.config(['$routeProvider', 

($routeProvider) ->
  
  $routeProvider
    
    # Named routes
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SessionCtrl'
      })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'SessionCtrl'
    })
    .when('/learn', {
        templateUrl: 'views/learn.html',
        controller: 'SessionCtrl'
    })
    # Catch all redirect to index
    .otherwise({
        redirectTo: '/'
      })
])
