'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.deck.gce.backendServiceSelector.component', [])
  .component('gceBackendServiceSelector', {
    bindings: {
      command: '=',
      loadBalancerName: '='
    },
    templateUrl: require('./backendServiceSelector.component.html'),
    controller: function($scope) {

      $scope.$on('$destroy', () => {
        delete this.command.backendServices[this.loadBalancerName];
      });

      $scope.$on('uis:select', function(event) {
        event.preventDefault();
      });
    }
  });
