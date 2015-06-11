'use strict';

angular.module('spinnaker.deploymentStrategy.rollingPush', [])
  .config(function(deploymentStrategyConfigProvider) {
    deploymentStrategyConfigProvider.registerStrategy({
      label: 'Rolling Push (deprecated)',
      description: 'Updates the launch configuration for this server group, then terminates instances incrementally, replacing them with instances launched with the updated configuration',
      key: 'rollingpush',
      providers: ['aws'],
      additionalFields: ['termination.totalRelaunches', 'termination.concurrentRelaunches', 'termination.order', 'termination.relaunchAllInstances'],
      additionalFieldsTemplateUrl: 'scripts/modules/deploymentStrategy/strategies/rollingPush/additionalFields.html',
      initializationMethod: function(command) {
        command.termination = {
          order: 'oldest',
          relaunchAllInstances: true,
          concurrentRelaunches: 1,
          totalRelaunches: command.capacity.max
        };
      }
    });
  });