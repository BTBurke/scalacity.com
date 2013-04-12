'use strict'

session = angular.module('App.session', [])

session.controller('SessionCtrl', [
  '$scope'

($scope) ->
  
    $scope.awesomeShit = [{name: 'Traveling'},
                  {name: 'Hookah smoking'}]
    $scope.fuckingIcons = [{name: 'accessibility-foundicon-guidedog'},
                            {name: 'social-foundicon-github'},
                            {name: 'foundicon-tools'},
                            {name: 'enclosed-foundicon-cloud'}]

 
])

