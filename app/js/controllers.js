angular.module('pollControllers', [])

.controller('LoginCtrl', ['$scope', '$http', 'userService', 
	function($scope, $http, userService) {

	$scope.showLogin = function() {
		window.location.href = '#/login';
		$http.get('/login').success(function(res) {

		});
	};

	$scope.userLogin = function() {
		$http.post('/login', $scope.loginData).success(function(res) {
			userService.setUser(res.local.email, res.local.password);
			window.location.href = '#/profile';
		});
	};

	$scope.showSignup = function() {
		window.location.href = '#/signup';
		$http.get('/signup').success(function(res) {

		});
	};

	$scope.userSignup = function() {
		$http.post('/signup', $scope.signupData).success(function(res) {
			window.location.href = '#/login';
		})
	}

	// $scope.fbLogin = function() {
	// 	$http.get('/auth/facebook').success(function(res) {
	// 		userService.setUser(res.local.email, res.local.password);
	// 		window.location.href = '#/profile';
	// 	});
	// };

}])

.controller('ProfileCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {

	$scope.user = userService.getUser();

}]);