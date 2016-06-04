var app = angular.module('slotapp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
	function ($stateProvider,$urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "home.html",
			}).state('slot', {
				url: "/sot",
				templateUrl: "slot.html",
			})
		}
]);


app.controller('homeclr', function($scope,$state,$http){
	$scope.next = function(){
			$state.go('slot');
	};
});

app.controller('slotclr', function($scope,$state,$http){
	$scope.next = function(){
			$state.go('home');
	};

});