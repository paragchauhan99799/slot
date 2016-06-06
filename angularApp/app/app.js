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
	$scope.courseinfo;
	$http.get("http://localhost:3000/home/courseinfo/").success(function(response){
		$scope.courseinfo = response
	});

	$scope.next = function(){
			$state.go('slot');
	};
});

var btech_g = {}

app.controller('slotclr',function($scope,$state,$http){
	$scope.slot = {};
	
	var ar1 = []
	ar1["slot1"] = 0;
	ar1["slot2"] = 0;
	ar1["slot3"] = 0;
	ar1["slot4"] = 0;
	ar1["slot5"] = 0;
	ar1["slot6"] = 0;
	ar1["slot7"] = 0;

	var ar2 = []
	ar2["slot1"] = 0;
	ar2["slot2"] = 0;
	ar2["slot3"] = 0;
	ar2["slot4"] = 0;
	ar2["slot5"] = 0;
	ar2["slot6"] = 0;
	ar2["slot7"] = 0;

	var ar3 = []
	ar3["slot1"] = 0;
	ar3["slot2"] = 0;
	ar3["slot3"] = 0;
	ar3["slot4"] = 0;
	ar3["slot5"] = 0;
	ar3["slot6"] = 0;
	ar3["slot7"] = 0;

	$scope.slot["BTECH1"] = ar1;
	$scope.slot["BTECH2"] = ar2;
	$scope.slot["MTECH1"] = ar3;

	$http.get("http://localhost:3000/home/prof/").success(function(response){			
			var resp = {
				results : response
			}

			for(var j = 0 ; j < resp.results.length ; j++){
				var path = "http://localhost:3000/home/courseinfo/profShortName/"+resp.results[j].profShortName;
				
				$http.get(path).success(function(response){
					var respo = {
						results : response
					}

					if(respo.results.length==2){
						if(respo.results[0].courseType=='CORE' && respo.results[1].courseType=='CORE'){
							console.log("CORE && CORE");
							var t0 = respo.results[0].field.split('.');
							var t1 = respo.results[1].field.split('.')
							
							//check for slot 5 and slot 6//
							if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot5"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot6"])==0){
								$scope.slot[ t0[0]+t0[1]+respo.results[0].year]["slot5"] = respo.results[0];
								$scope.slot[ t1[0]+t1[1]+respo.results[1].year]["slot6"] = respo.results[1];
								console.log($scope.slot);
							}
							else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot6"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot5"]) == 0){
								$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot6"] = respo.results[0];
								$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot5"] = respo.results[1];
								console.log($scope.slot);
							}
								//check for slot 3 and slot 4//
								else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot3"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot4"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot3"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot4"] = respo.results[1];
									console.log($scope.slot);
								}
								else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot4"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot3"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot4"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot3"] = respo.results[1];
									console.log($scope.slot);
								}
									//check for slot 1 and slot 2//
									else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot1"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot2"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot1"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot2"] = respo.results[1];
										console.log($scope.slot);
									}
									else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot2"]) == 0 && ($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot1"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot2"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot1"] = respo.results[1];
										console.log($scope.slot);
									}
									else{
										console.log("No slot avalaible for CORE and CORE");
									}
						}
						else if((respo.results[0].courseType=='CORE' && respo.results[1].courseType!='CORE')){
							console.log("CORE && CORE");
							var t0 = respo.results[0].field.split('.');
							var t1 = respo.results[1].field.split('.')
							
							//check for slot 5 and slot 6//
							if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot5"]) == 0){
								$scope.slot[ t0[0]+t0[1]+respo.results[0].year]["slot5"] = respo.results[0];
								$scope.slot[ t1[0]+t1[1]+respo.results[1].year]["slot6"] = respo.results[1];
								console.log($scope.slot);
							}
							else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot6"]) == 0){
								$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot6"] = respo.results[0];
								$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot5"] = respo.results[1];
								console.log($scope.slot);
							}
								//check for slot 3 and slot 4//
								else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot3"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot3"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot4"] = respo.results[1];
									console.log($scope.slot);
								}
								else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot4"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot4"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot3"] = respo.results[1];
									console.log($scope.slot);
								}
									//check for slot 1 and slot 2//
									else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot1"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot1"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot2"] = respo.results[1];
										console.log($scope.slot);
									}
									else if(($scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot2"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot2"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot1"] = respo.results[1];
										console.log($scope.slot);
									}
									else{
										console.log("No slot is avalaible for CORE AND NOTCORE");
									}
						}
						else if(respo.results[0].courseType!='CORE' && respo.results[1].courseType=='CORE'){
							console.log("CORE && CORE");
							var t0 = respo.results[0].field.split('.');
							var t1 = respo.results[1].field.split('.')
							
							//check for slot 5 and slot 6//
							if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot6"])==0){
								$scope.slot[ t0[0]+t0[1]+respo.results[0].year]["slot5"] = respo.results[0];
								$scope.slot[ t1[0]+t1[1]+respo.results[1].year]["slot6"] = respo.results[1];
								console.log($scope.slot);
							}
							else if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot5"]) == 0){
								$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot6"] = respo.results[0];
								$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot5"] = respo.results[1];
								console.log($scope.slot);
							}
								//check for slot 3 and slot 4//
								else if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot4"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot3"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot4"] = respo.results[1];
									console.log($scope.slot);
								}
								else if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot3"]) == 0){
									$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot4"] = respo.results[0];
									$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot3"] = respo.results[1];
									console.log($scope.slot);
								}
									//check for slot 1 and slot 2//
									else if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot2"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot1"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot2"] = respo.results[1];
										console.log($scope.slot);
									}
									else if(($scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot1"]) == 0){
										$scope.slot[t0[0]+t0[1]+respo.results[0].year]["slot2"] = respo.results[0];
										$scope.slot[t1[0]+t1[1]+respo.results[1].year]["slot1"] = respo.results[1];
										console.log($scope.slot);
									}
									else{
										console.log("No slot avalaible for NOTCORE and CORE");
									}
						}
						else{

						}
					}
					
					//length is not 2//
					else{
						console.log("Length is not 2");
					}
				});	

			}
			
		});


	$scope.next = function(){
			$state.go('home');
	};

});