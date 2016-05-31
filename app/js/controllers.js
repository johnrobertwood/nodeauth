angular.module('pollControllers', [])

.controller('LoginCtrl', ['$scope', '$http', 'userService', 'authService', function($scope, $http, userService, authService) {

	$scope.showLogin = function() {
		window.location.href = '#/login';
		$http.get('/login').success(function(res) {

		})
	}

	$scope.userLogin = function() {
		$http.post('/login', $scope.loginData).success(function(res) {
			userService.setUser(res.local.email, res.local.password);
			window.location.href = '#/profile';
		});
	};
}])

.controller('ProfileCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {

	$scope.user = userService.getUser();

}]);