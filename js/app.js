'use strict';

angular.module('ngFire', [
	'ngRoute'
])


.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			template: 'main.html',
			controller: 'mainController'
		})

		.when('/instagram', {
			template: 'instagram.html',
			controller: 'instagramController'
		})

		.when('/bom', {
			template: 'bom.html',
			controller: 'bomController'
		})

})

