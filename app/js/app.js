var pollApp = angular.module('pollApp', [
	'ngRoute',
	'pollControllers',
	'pollServices'
]);

pollApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/indexView.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/loginView.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
      	templateUrl: 'views/signupView.html',
      	controller: 'LoginCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profileView.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);