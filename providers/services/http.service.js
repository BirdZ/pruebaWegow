'use strict';
angular.module('services', [])
.service('httpService', function($http) {
    this.getEvents = function() {
        return $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/5b84f4ad3000001000728fcb'
        });
    }
})