(function() {
  'use strict';

  var session;

  session = angular.module('App.session', []);

  session.controller('SessionCtrl', [
    '$scope', function($scope) {
      $scope.awesomeShit = [
        {
          name: 'Traveling'
        }, {
          name: 'Hookah smoking'
        }
      ];
      return $scope.fuckingIcons = [
        {
          name: 'accessibility-foundicon-guidedog'
        }, {
          name: 'social-foundicon-github'
        }, {
          name: 'foundicon-tools'
        }, {
          name: 'enclosed-foundicon-cloud'
        }
      ];
    }
  ]);

}).call(this);
