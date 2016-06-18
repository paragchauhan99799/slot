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

	$scope.profinfo;
	$http.get("http://localhost:3000/home/prof/").success(function(response1){
		$scope.profinfo = response1
	});

	$scope.next = function(){
			$state.go('slot');
	};
});


app.controller('slotclr',function($scope,$state,$http){
	
	$scope.slot = {};
	
	var bt1 = [];bt1["slot1"] = 0;bt1["slot2"] = 0;bt1["slot3"] = 0;bt1["slot4"] = 0;bt1["slot5"] = 0;bt1["slot6"] = 0;bt1["slot7"] = 0;
	var bt2 = [];bt2["slot1"] = 0;bt2["slot2"] = 0;bt2["slot3"] = 0;bt2["slot4"] = 0;bt2["slot5"] = 0;bt2["slot6"] = 0;bt2["slot7"] = 0;
	var bt3 = [];bt3["slot1"] = 0;bt3["slot2"] = 0;bt3["slot3"] = 0;bt3["slot4"] = 0;bt3["slot5"] = 0;bt3["slot6"] = 0;bt3["slot7"] = 0;
	var bt4 = [];bt4["slot1"] = 0;bt4["slot2"] = 0;bt4["slot3"] = 0;bt4["slot4"] = 0;bt4["slot5"] = 0;bt4["slot6"] = 0;bt4["slot7"] = 0;
	
	var mt1 = [];mt1["slot1"] = 0;mt1["slot2"] = 0;mt1["slot3"] = 0;mt1["slot4"] = 0;mt1["slot5"] = 0;mt1["slot6"] = 0;mt1["slot7"] = 0;	
	var mt2 = [];mt2["slot1"] = 0;mt2["slot2"] = 0;mt2["slot3"] = 0;mt2["slot4"] = 0;mt2["slot5"] = 0;mt2["slot6"] = 0;mt2["slot7"] = 0;	
	
	var msc1 = [];msc1["slot1"] = 0;msc1["slot2"] = 0;msc1["slot3"] = 0;msc1["slot4"] = 0;msc1["slot5"] = 0;msc1["slot6"] = 0;msc1["slot7"] = 0;	
	var msc2 = [];msc2["slot1"] = 0;msc2["slot2"] = 0;msc2["slot3"] = 0;msc2["slot4"] = 0;msc2["slot5"] = 0;msc2["slot6"] = 0;msc2["slot7"] = 0;

	var mrd1 = [];mrd1["slot1"] = 0;mrd1["slot2"] = 0;mrd1["slot3"] = 0;mrd1["slot4"] = 0;mrd1["slot5"] = 0;mrd1["slot6"] = 0;mrd1["slot7"] = 0;
	var mrd2 = [];mrd2["slot1"] = 0;mrd2["slot2"] = 0;mrd2["slot3"] = 0;mrd2["slot4"] = 0;mrd2["slot5"] = 0;mrd2["slot6"] = 0;mrd2["slot7"] = 0;

	var mdes1 = [];mdes1["slot1"] = 0;mdes1["slot2"] = 0;mdes1["slot3"] = 0;mdes1["slot4"] = 0;mdes1["slot5"] = 0;mdes1["slot6"] = 0;mdes1["slot7"] = 0;
	var mdes2 = [];mdes2["slot1"] = 0;mdes2["slot2"] = 0;mdes2["slot3"] = 0;mdes2["slot4"] = 0;mdes2["slot5"] = 0;mdes2["slot6"] = 0;mdes2["slot7"] = 0;

	$scope.slot["BTECH1"] = bt1;
	$scope.slot["BTECH2"] = bt2;
	$scope.slot["BTECH3"] = bt3;
	$scope.slot["BTECH4"] = bt4;
	
	$scope.slot["MTECH1"] = mt1;
	$scope.slot["MTECH2"] = mt2;
	
	$scope.slot["MSCIT1"] = msc1;
	$scope.slot["MSCIT2"] = msc2;
	
	$scope.slot["MSCARD1"] = mrd1;
	$scope.slot["MSCARD2"] = mrd2;
	
	$scope.slot["MDES1"] = mdes1;
	$scope.slot["MDES2"] = mdes2;

	//BTECH 1//
	var subbt1slot1 = [];subbt1slot1[0]=0;$scope.slot.BTECH1.slot1 =subbt1slot1;
	var subbt1slot2 = [];subbt1slot2[0]=0;$scope.slot.BTECH1.slot2 =subbt1slot2;
	var subbt1slot3 = [];subbt1slot3[0]=0;$scope.slot.BTECH1.slot3 =subbt1slot3;
	var subbt1slot4 = [];subbt1slot4[0]=0;$scope.slot.BTECH1.slot4 =subbt1slot4;
	var subbt1slot5 = [];subbt1slot5[0]=0;$scope.slot.BTECH1.slot5 =subbt1slot5;
	var subbt1slot6 = [];subbt1slot6[0]=0;$scope.slot.BTECH1.slot6 =subbt1slot6;
	var subbt1slot7 = [];subbt1slot7[0]=0;$scope.slot.BTECH1.slot7 =subbt1slot7;

	//BTECH 2//
	var subbt2slot1 = [];subbt2slot1[0]=0;$scope.slot.BTECH2.slot1 =subbt2slot1;
	var subbt2slot2 = [];subbt2slot2[0]=0;$scope.slot.BTECH2.slot2 =subbt2slot2;
	var subbt2slot3 = [];subbt2slot3[0]=0;$scope.slot.BTECH2.slot3 =subbt2slot3;
	var subbt2slot4 = [];subbt2slot4[0]=0;$scope.slot.BTECH2.slot4 =subbt2slot4;
	var subbt2slot5 = [];subbt2slot5[0]=0;$scope.slot.BTECH2.slot5 =subbt2slot5;
	var subbt2slot6 = [];subbt2slot6[0]=0;$scope.slot.BTECH2.slot6 =subbt2slot6;
	var subbt2slot7 = [];subbt2slot7[0]=0;$scope.slot.BTECH2.slot7 =subbt2slot7;

	//BTECH 3//
	var subbt3slot1 = [];for(var a=0;a<5;a++){subbt3slot1[a]=0};$scope.slot.BTECH3.slot1 =subbt3slot1;
	var subbt3slot2 = [];for(var a=0;a<5;a++){subbt3slot2[a]=0};$scope.slot.BTECH3.slot2 =subbt3slot2;
	var subbt3slot3 = [];for(var a=0;a<5;a++){subbt3slot3[a]=0};$scope.slot.BTECH3.slot3 =subbt3slot3;
	var subbt3slot4 = [];for(var a=0;a<5;a++){subbt3slot4[a]=0};$scope.slot.BTECH3.slot4 =subbt3slot4;
	var subbt3slot5 = [];for(var a=0;a<5;a++){subbt3slot5[a]=0};$scope.slot.BTECH3.slot5 =subbt3slot5;
	var subbt3slot6 = [];for(var a=0;a<5;a++){subbt3slot6[a]=0};$scope.slot.BTECH3.slot6 =subbt3slot6;
	var subbt3slot7 = [];for(var a=0;a<5;a++){subbt3slot7[a]=0};$scope.slot.BTECH3.slot7 =subbt3slot7;

	//BTECH 4//
	var subbt4slot1 = [];for(var a=0;a<5;a++){subbt4slot1[a]=0};$scope.slot.BTECH4.slot1 =subbt4slot1;
	var subbt4slot2 = [];for(var a=0;a<5;a++){subbt4slot2[a]=0};$scope.slot.BTECH4.slot2 =subbt4slot2;
	var subbt4slot3 = [];for(var a=0;a<5;a++){subbt4slot3[a]=0};$scope.slot.BTECH4.slot3 =subbt4slot3;
	var subbt4slot4 = [];for(var a=0;a<5;a++){subbt4slot4[a]=0};$scope.slot.BTECH4.slot4 =subbt4slot4;
	var subbt4slot5 = [];for(var a=0;a<5;a++){subbt4slot5[a]=0};$scope.slot.BTECH4.slot5 =subbt4slot5;
	var subbt4slot6 = [];for(var a=0;a<5;a++){subbt4slot6[a]=0};$scope.slot.BTECH4.slot6 =subbt4slot6;
	var subbt4slot7 = [];for(var a=0;a<5;a++){subbt4slot7[a]=0};$scope.slot.BTECH4.slot7 =subbt4slot7;

	//MTECH 1//
	var submt1slot1 = [];for(var a=0;a<5;a++){submt1slot1[a]=0};$scope.slot.MTECH1.slot1 =submt1slot1;
	var submt1slot2 = [];for(var a=0;a<5;a++){submt1slot2[a]=0};$scope.slot.MTECH1.slot2 =submt1slot2;
	var submt1slot3 = [];for(var a=0;a<5;a++){submt1slot3[a]=0};$scope.slot.MTECH1.slot3 =submt1slot3;
	var submt1slot4 = [];for(var a=0;a<5;a++){submt1slot4[a]=0};$scope.slot.MTECH1.slot4 =submt1slot4;
	var submt1slot5 = [];for(var a=0;a<5;a++){submt1slot5[a]=0};$scope.slot.MTECH1.slot5 =submt1slot5;
	var submt1slot6 = [];for(var a=0;a<5;a++){submt1slot6[a]=0};$scope.slot.MTECH1.slot6 =submt1slot6;
	var submt1slot7 = [];for(var a=0;a<5;a++){submt1slot7[a]=0};$scope.slot.MTECH1.slot7 =submt1slot7;

	//MTECH 2//
	var submt2slot1 = [];for(var a=0;a<5;a++){submt2slot1[a]=0};$scope.slot.MTECH2.slot1 =submt2slot1;
	var submt2slot2 = [];for(var a=0;a<5;a++){submt2slot2[a]=0};$scope.slot.MTECH2.slot2 =submt2slot2;
	var submt2slot3 = [];for(var a=0;a<5;a++){submt2slot3[a]=0};$scope.slot.MTECH2.slot3 =submt2slot3;
	var submt2slot4 = [];for(var a=0;a<5;a++){submt2slot4[a]=0};$scope.slot.MTECH2.slot4 =submt2slot4;
	var submt2slot5 = [];for(var a=0;a<5;a++){submt2slot5[a]=0};$scope.slot.MTECH2.slot5 =submt2slot5;
	var submt2slot6 = [];for(var a=0;a<5;a++){submt2slot6[a]=0};$scope.slot.MTECH2.slot6 =submt2slot6;
	var submt2slot7 = [];for(var a=0;a<5;a++){submt2slot7[a]=0};$scope.slot.MTECH2.slot7 =submt2slot7;

	//MSCIT 1//
	var submsc1slot1 = [];for(var a=0;a<3;a++){submsc1slot1[a]=0};$scope.slot.MSCIT1.slot1 =submsc1slot1;
	var submsc1slot2 = [];for(var a=0;a<3;a++){submsc1slot2[a]=0};$scope.slot.MSCIT1.slot2 =submsc1slot2;
	var submsc1slot3 = [];for(var a=0;a<3;a++){submsc1slot3[a]=0};$scope.slot.MSCIT1.slot3 =submsc1slot3;
	var submsc1slot4 = [];for(var a=0;a<3;a++){submsc1slot4[a]=0};$scope.slot.MSCIT1.slot4 =submsc1slot4;
	var submsc1slot5 = [];for(var a=0;a<3;a++){submsc1slot5[a]=0};$scope.slot.MSCIT1.slot5 =submsc1slot5;
	var submsc1slot6 = [];for(var a=0;a<3;a++){submsc1slot6[a]=0};$scope.slot.MSCIT1.slot6 =submsc1slot6;
	var submsc1slot7 = [];for(var a=0;a<3;a++){submsc1slot7[a]=0};$scope.slot.MSCIT1.slot7 =submsc1slot7;

	//MSCIT 2//
	var submsc2slot1 = [];for(var a=0;a<3;a++){submsc2slot1[a]=0};$scope.slot.MSCIT2.slot1 =submsc2slot1;
	var submsc2slot2 = [];for(var a=0;a<3;a++){submsc2slot2[a]=0};$scope.slot.MSCIT2.slot2 =submsc2slot2;
	var submsc2slot3 = [];for(var a=0;a<3;a++){submsc2slot3[a]=0};$scope.slot.MSCIT2.slot3 =submsc2slot3;
	var submsc2slot4 = [];for(var a=0;a<3;a++){submsc2slot4[a]=0};$scope.slot.MSCIT2.slot4 =submsc2slot4;
	var submsc2slot5 = [];for(var a=0;a<3;a++){submsc2slot5[a]=0};$scope.slot.MSCIT2.slot5 =submsc2slot5;
	var submsc2slot6 = [];for(var a=0;a<3;a++){submsc2slot6[a]=0};$scope.slot.MSCIT2.slot6 =submsc2slot6;
	var submsc2slot7 = [];for(var a=0;a<3;a++){submsc2slot7[a]=0};$scope.slot.MSCIT2.slot7 =submsc2slot7;

	//MDES 1//
	var submdes1slot1 = [];submdes1slot1[0]=0;$scope.slot.MDES1.slot1 =submdes1slot1;
	var submdes1slot2 = [];submdes1slot2[0]=0;$scope.slot.MDES1.slot2 =submdes1slot2;
	var submdes1slot3 = [];submdes1slot3[0]=0;$scope.slot.MDES1.slot3 =submdes1slot3;
	var submdes1slot4 = [];submdes1slot4[0]=0;$scope.slot.MDES1.slot4 =submdes1slot4;
	var submdes1slot5 = [];submdes1slot5[0]=0;$scope.slot.MDES1.slot5 =submdes1slot5;
	var submdes1slot6 = [];submdes1slot6[0]=0;$scope.slot.MDES1.slot6 =submdes1slot6;
	var submdes1slot7 = [];submdes1slot7[0]=0;$scope.slot.MDES1.slot7 =submdes1slot7;

	//MDES 2//
	var submdes2slot1 = [];submdes2slot1[0]=0;$scope.slot.MDES2.slot1 =submdes2slot1;
	var submdes2slot2 = [];submdes2slot2[0]=0;$scope.slot.MDES2.slot2 =submdes2slot2;
	var submdes2slot3 = [];submdes2slot3[0]=0;$scope.slot.MDES2.slot3 =submdes2slot3;
	var submdes2slot4 = [];submdes2slot4[0]=0;$scope.slot.MDES2.slot4 =submdes2slot4;
	var submdes2slot5 = [];submdes2slot5[0]=0;$scope.slot.MDES2.slot5 =submdes2slot5;
	var submdes2slot6 = [];submdes2slot6[0]=0;$scope.slot.MDES2.slot6 =submdes2slot6;
	var submdes2slot7 = [];submdes2slot7[0]=0;$scope.slot.MDES2.slot7 =submdes2slot7;

	//MARD 1//
	var submard1slot1 = [];submard1slot1[0]=0;$scope.slot.MSCARD1.slot1 =submard1slot1;
	var submard1slot2 = [];submard1slot2[0]=0;$scope.slot.MSCARD1.slot2 =submard1slot2;
	var submard1slot3 = [];submard1slot3[0]=0;$scope.slot.MSCARD1.slot3 =submard1slot3;
	var submard1slot4 = [];submard1slot4[0]=0;$scope.slot.MSCARD1.slot4 =submard1slot4;
	var submard1slot5 = [];submard1slot5[0]=0;$scope.slot.MSCARD1.slot5 =submard1slot5;
	var submard1slot6 = [];submard1slot6[0]=0;$scope.slot.MSCARD1.slot6 =submard1slot6;
	var submard1slot7 = [];submard1slot7[0]=0;$scope.slot.MSCARD1.slot7 =submard1slot7;

	//MARD 1//
	var submard2slot1 = [];submard2slot1[0]=0;$scope.slot.MSCARD2.slot1 =submard2slot1;
	var submard2slot2 = [];submard2slot2[0]=0;$scope.slot.MSCARD2.slot2 =submard2slot2;
	var submard2slot3 = [];submard2slot3[0]=0;$scope.slot.MSCARD2.slot3 =submard2slot3;
	var submard2slot4 = [];submard2slot4[0]=0;$scope.slot.MSCARD2.slot4 =submard2slot4;
	var submard2slot5 = [];submard2slot5[0]=0;$scope.slot.MSCARD2.slot5 =submard2slot5;
	var submard2slot6 = [];submard2slot6[0]=0;$scope.slot.MSCARD2.slot6 =submard2slot6;
	var submard2slot7 = [];submard2slot7[0]=0;$scope.slot.MSCARD2.slot7 =submard2slot7;
	

	///////////////////////////////////////..............................If prof has two course................///////////////////////////////////////////
	
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

					if(respo.results.length==2 && respo.results[0].courseCode!=respo.results[1].courseCode){
						if(respo.results[0].courseType=='CORE' && respo.results[1].courseType=='CORE'){
							console.log("CORE and CORE"+respo.results[0].profShortName+" "+respo.results[1].profShortName);

							if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0])==0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][0] = respo.results[1];
							}
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0]) == 0){
								$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0] = respo.results[0];
								$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0] = respo.results[1];
							}
								else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0]) == 0){
									$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0] = respo.results[0];
									$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0] = respo.results[1];
								}
								else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0]) == 0){
									$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0] = respo.results[0];
									$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0] = respo.results[1];
								}
									//check for slot 1 and slot 2//
									else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0]) == 0){
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0] = respo.results[0];
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0] = respo.results[1];
										
									}
									else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0]) == 0){
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0] = respo.results[0];
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0] = respo.results[1];
										
									}
									else{
										console.log("No slot avalaible for CORE and CORE"+respo.results[0].courseCode+respo.results[1].courseCode);
									}
						}
						else if((respo.results[0].courseType=='CORE' && respo.results[1].courseType!='CORE')){
							//check for slot 5 and slot 6//
							if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType) == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][0] = respo.results[0];
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][p] = respo.results[1];
										break;
									}
								}

							}
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0]) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType) == undefined)){
					
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][p] == 0){
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0] = respo.results[0];
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][p] = respo.results[1];
										break;
									}
								
								}
							}
								//check for slot 3 and slot 4//
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0]) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType) == undefined)){
									
									for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length;p++){
										if($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][p] == 0){
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0] = respo.results[0];
											$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][p] = respo.results[1];
											break;
										}
									}
								}
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType) == undefined)){
									
									for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length;p++){
										if($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][p] == 0){
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0] = respo.results[0];
											$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][p] = respo.results[1];
											break;
										}
									}
								}
									//check for slot 1 and slot 2//
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType) == undefined)){
										
									for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length;p++){
										if($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][p] == 0){
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0] = respo.results[0];
											$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][p] = respo.results[1];
											break;
										}
									}
							}
							else if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0]) == 0 && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"])) && (($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType) != 'CORE' | ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType) == undefined)){
										
									for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length;p++){
										if($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][p] == 0){
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0] = respo.results[0];
											$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][p] = respo.results[1];
											break;
										}
									}
							}
							else{
									console.log("No slot is avalaible for CORE AND NOTCORE"+respo.results[0].courseCode+respo.results[1].courseCode);
							}
						}
						else if(respo.results[0].courseType!='CORE' && respo.results[1].courseType=='CORE'){
							console.log("NOT CORE and CORE"+respo.results[0].profShortName+" "+respo.results[1].profShortName);

							//check for slot 5 and slot 6//
							if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType) == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][0] = respo.results[1];
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][p] = respo.results[0];
										break;
									}
								}
							}
							else if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0]) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType) == undefined)){
					
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][p] == 0){
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0] = respo.results[1];
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][p] = respo.results[0];
										break;
									}
								}
							}
								//check for slot 3 and slot 4//
							else if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0]) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType) == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][p] == 0){
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0] = respo.results[1];
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][p] = respo.results[0];
										break;
									}
								}
							}
							else if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType) == undefined)){
									
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][p] == 0){
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0] = respo.results[1];
										$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][p] = respo.results[0];
										break;
									}
								}
							}
									//check for slot 1 and slot 2//
							else if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType) == undefined)){
										
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][p] == 0){
										$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0] = respo.results[1];
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][p] = respo.results[0];
											break;
										}
									}
								}
							else if(($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0]) == 0 && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"])) && (($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType) != 'CORE' | ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType) == undefined)){
										
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length;p++){
										if($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][p] == 0){
											$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0] = respo.results[1];
											$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][p] = respo.results[0];
											break;
										}
									}
								}
								else{
									console.log("No slot is avalaible for CORE AND NOTCORE"+respo.results[0].courseCode+respo.results[1].courseCode);
								}		
							}

							else if(respo.results[0].courseType!='CORE' && respo.results[1].courseType!='CORE'){	
							
							console.log("NOT CORE and NOT CORE"+respo.results[0].profShortName+" "+respo.results[1].profShortName);

							//check for slot 5 and slot 6//
							if(($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType != 'CORE'  | $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"]))&& ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][p] = respo.results[0];
										break;
									}
									if(p==$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length-1){
										console.log("slot 5 is full: ");
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][q] = respo.results[1];
										break;
									}
									if(q==$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length-1){
										console.log("slot 6 is full: "+respo.results[0].courseCode+" "+respo.results[0].profShortName);
									}
								}
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType != 'CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"]))&& ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"])) &&($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][q] = respo.results[1];
										break;
									}
								}
							}
								//check for slot 3 and slot 4//
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType != 'CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"])) &&($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot3"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot4"][q] = respo.results[1];
										break;
									}
								}
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType != 'CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"]))&& ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot4"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot3"][q] = respo.results[1];
										break;
									}
								}
								
							}
									//check for slot 1 and slot 2//
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType != 'CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType == undefined) ){
								
									for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length;p++){
											if($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][p] == 0){
												$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][p] = respo.results[0];
												break;
											}
										}

										for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length;q++){
											if($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][q] == 0){
												$scope.slot[ respo.results[1].field+respo.results[1].year]["slot2"][q] = respo.results[1];
												break;
											}
										}
										
									}	
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType != 'CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType == undefined) && ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"])) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType != 'CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType == undefined) ){
								
										for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length;p++){
											if($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][p] == 0){
												$scope.slot[ respo.results[0].field+respo.results[0].year]["slot2"][p] = respo.results[0];
												break;
											}
										}

										for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length;q++){
											if($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][q] == 0){
												$scope.slot[ respo.results[1].field+respo.results[1].year]["slot1"][q] = respo.results[1];
												break;
											}
										}
										
							}	
						}
					}
					else if(respo.results.length==2 && respo.results[0].courseCode==respo.results[1].courseCode){
							console.log("CourseCode: "+respo.results[0].courseCode+" "+respo.results[1].courseCode);
							console.log("Prof Name: "+respo.results[0].profShortName+" "+respo.results[1].profShortName);

						if(respo.results[0].courseType=='CORE' && respo.results[1].courseType=='CORE'){
							if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot7"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot7"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot4"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot4"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot3"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot3"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot2"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot2"][0] = respo.results[1];
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0]== 0){
								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][0] = respo.results[0];
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot1"][0] = respo.results[1];
							}
							else{
								console.log("No slot avalaible for course offered for both field:s");
							}
						}
						else if(respo.results[0].courseType=='CORE' && respo.results[1].courseType!='CORE'){
							if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot7"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot7"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot7"][0] = respo.results[0];
								
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][0] = respo.results[0];
							
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][0] = respo.results[0];
								
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot4"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot4"][0] = respo.results[0];
								
							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot3"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot3"][0] = respo.results[0];

							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot2"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot2"][0] = respo.results[0];

							}
							else if( $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0] == 0 && $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType == undefined) ){
								
								for(var p=0;p<$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length;p++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][p] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot1"][p] = respo.results[1];
										break;
									}
								}

								$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][0] = respo.results[0];

							}
							else{
								console.log("No slot avalaible for course offered for both field:s");
							}
						}
						else if(respo.results[0].courseType!='CORE' && respo.results[1].courseType=='CORE'){
							if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot7"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot7"][0] = respo.results[1];
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][0] = respo.results[1];
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][0] = respo.results[1];
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot4"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot4"][0] = respo.results[1];

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot3"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot3"][0] = respo.results[1];

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot2"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot2"][0] = respo.results[1];
							
							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0]== 0){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][p] = respo.results[0];
										break;
									}
								}
								
								$scope.slot[ respo.results[1].field+respo.results[1].year]["slot1"][0] = respo.results[1];
							
							}
							else{
								console.log("No slot avalaible for course offered for both field:s");
							}
						}
						else if(respo.results[0].courseType!='CORE' && respo.results[1].courseType!='CORE'){
							if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot7"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot7"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot7"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot7"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot7"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot7"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot7"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot6"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot6"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot6"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot6"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot6"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot6"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot5"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot5"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot5"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot5"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot5"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot5"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot4"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot4"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot4"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot4"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot4"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot4"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot3"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot3"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot3"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot3"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot3"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot3"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot2"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot2"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot2"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot2"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot2"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot2"][q] = respo.results[1];
										break;
									}
								}

							}
							else if( ($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType !='CORE' | $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][0].courseType == undefined) && $scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"]) && $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length > $scope.minslot($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"]) && ($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType !='CORE' | $scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][0].courseType == undefined)){
								
								for(var p=0;p<$scope.slot[respo.results[0].field+respo.results[0].year]["slot1"].length;p++){
									if($scope.slot[respo.results[0].field+respo.results[0].year]["slot1"][p] == 0){
										$scope.slot[ respo.results[0].field+respo.results[0].year]["slot1"][p] = respo.results[0];
										break;
									}
								}

								for(var q=0;q<$scope.slot[respo.results[1].field+respo.results[1].year]["slot1"].length;q++){
									if($scope.slot[respo.results[1].field+respo.results[1].year]["slot1"][q] == 0){
										$scope.slot[ respo.results[1].field+respo.results[1].year]["slot1"][q] = respo.results[1];
										break;
									}
								}

							}
							else{
								console.log("No slot avalaible for course offered for both field:s");
							}
						}
						else{
							console.log("Complete all for: ");
						}

						//CORE CORE NOT CORE NOT CORE COMPLETE FOR PROF HAS TWO SUBJECT...

					}
				});		
		}		
	});

	///////////////////////////////.....................CORE COURSE.....................///////////////////////////
	
	$http.get("http://localhost:3000/home/prof/").success(function(response){			
			var prof = {
				results : response
			}

			for(var j = 0 ; j < prof.results.length ; j++){
				var path = "http://localhost:3000/home/courseinfo/profShortName/"+prof.results[j].profShortName;
			
				$http.get(path).success(function(response){
					var coreprof = {
						results : response
					}

					if(coreprof.results.length == 1 && coreprof.results[0].courseType=='CORE'){
					/*	console.log("CORE COURSE");*/

					console.log("length:  :"+$scope.minslot($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot5"]));							
						
						if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot1"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot1"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot2"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot2"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot3"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot3"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot4"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot4"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot5"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot5"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot6"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot6"][0] = coreprof.results[0];
						}
						else if($scope.slot[coreprof.results[0].field+coreprof.results[0].year]["slot7"][0]==0){
							$scope.slot[ coreprof.results[0].field+coreprof.results[0].year]["slot7"][0] = coreprof.results[0];
						}else{
							console.log("No slot avalaible for core: "+coreprof.results[0].courseCode);
						}
						
					}

				});
			}
	});

		///////////////////////////////.....................other COURSE.....................///////////////////////////
	
	$http.get("http://localhost:3000/home/prof/").success(function(response){			
			var othercourseprof = {
				results : response
			}

			/*console.log(othercourseprof.results);*/

			for(var k = 0 ; k < othercourseprof.results.length ; k++){
				
				var path = "http://localhost:3000/home/courseinfo/profShortName/"+othercourseprof.results[k].profShortName;
				
				$http.get(path).success(function(response){
					var otherprof = {
						results : response
					}

					if(otherprof.results.length == 1 && otherprof.results[0].courseType!='CORE'){			
						
						/*console.log(otherprof.results[0].field+otherprof.results[0].year);*/

						//..............slot1 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot1"][0].courseType!='CORE'){
							var slot1len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot1"]);
						}
						else{
							var slot1len=10;
						}

						//..............slot2 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot2"][0].courseType!='CORE'){
							var slot2len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot2"]);
						}
						else{
							var slot2len=10;
						}

						//..............slot3 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot3"][0].courseType!='CORE'){
							var slot3len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot3"]);
						}
						else{
							var slot3len=10;
						}

						//..............slot4 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot4"][0].courseType!='CORE'){
							var slot4len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot4"]);
						}
						else{
							var slot4len=10;
						}

						//..............slot5 length.........../////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot5"][0].courseType!='CORE'){
							var slot5len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot5"]);
						}
						else{
							var slot5len=10;
						}


						//..............slot6 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot6"][0].courseType!='CORE'){
							var slot6len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot6"]);
						}
						else{
							var slot6len=10;
						}
						
						//..............slot7 length...........//////
						if($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot7"][0].courseType!='CORE'){
							var slot7len=$scope.minslot($scope.slot[otherprof.results[0].field+otherprof.results[0].year]["slot7"]);
						}
						else{
							var slot7len=10;
						}

						///////////...........put course in lowest size array.........///////////////

						// console.log(slot1len+" "+slot2len+" "+slot3len+" "+slot4len+" "+slot5len+" "+slot6len+" "+slot7len);
						var newminslotname =$scope.findminslotname(slot1len,slot2len,slot3len,slot4len,slot5len,slot6len,slot7len);
						
						for(var p=0;p<$scope.slot[otherprof.results[0].field+otherprof.results[0].year][newminslotname].length;p++){
							if($scope.slot[otherprof.results[0].field+otherprof.results[0].year][newminslotname][p] == 0){
								$scope.slot[ otherprof.results[0].field+otherprof.results[0].year][newminslotname][p] = otherprof.results[0];
								break;
							}
							if(p==$scope.slot[otherprof.results[0].field+otherprof.results[0].year][newminslotname].length-1){
								console.log("slot is full: "+otherprof.results[0].courseCode);
							}
						}

					}
				});

			}
	});

	$scope.minslot = function(parag){
		/*	console.log("hihihihihi "+parag[0].courseCode+" "+parag.length);*/
			var length=0;
			for(var t=0;t<parag.length;t++){
				if(parag[t].courseType!=undefined){
					length++;
				}
			}
			return length;
	};

	$scope.findminslotname = function(l1,l2,l3,l4,l5,l6,l7){
		/*console.log(l1,l2,l3,l4,l5,l6,l7);*/

		var minslot=10;
		var minslotname;

		if(l1<minslot){
			minslot=l1;
			minslotname="slot1";
		}
		if(l2<minslot){
			minslot=l2;
			minslotname="slot2";
		}
		if(l3<minslot){
			minslot=l3;
			minslotname="slot3";
		}
		if(l4<minslot){
			minslot=l4;
			minslotname="slot4";
		}
		if(l5<minslot){
			minslot=l5;
			minslotname="slot5";
		}
		if(l6<minslot){
			minslot=l6;
			minslotname="slot6";
		}
		if(l7<minslot){
			minslot=l7;
			minslotname="slot7";
		}
	
		return minslotname;
	};

	$scope.next = function(){
			$state.go('home');
	};
});