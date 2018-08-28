'use strict';
angular.module('wegowApp')
.component('event', {
    templateUrl: './components/event/event.component.html',
    controller: 'eventController',
    bindings: {
        event: '='
    }

})
.controller('eventController', ['$scope',
  function($scope, dataService) {
  
}])