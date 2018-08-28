'use strict';
angular.module('wegowApp')
.component('events', {
    templateUrl: './components/events/events.component.html',
    controller: 'eventsController'
})
.controller('eventsController', ['$scope', 'httpService',
  function($scope, httpService) {
 	console.log(1)
   httpService.getEvents().
	then(function(response) {
	      $scope.events = response.data;
	}, function(response) {
		
	});
}]);



