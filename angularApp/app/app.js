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
			}).state('autumn', {
				url: "/autumn",
				templateUrl: "autumn.html",
			}).state('winter', {
				url: "/winter",
				templateUrl: "winter.html",
			}).state('addautumncourse', {
				url: "/addautumncourse",
				templateUrl: "addautumncourse.htm",
			}).state('addwintercourse', {
				url: "/addwintercourse",
				templateUrl: "addwintercourse.htm",
			}).state('autumnslot', {
				url: "/autumnslot",
				templateUrl: "autumnslot.html",
			}).state('timetable', {
				url: "/timetable",
				templateUrl: "timetable.html",
			}).state('deleteautumncourse', {
				url: "/deleteautumncourse",
				templateUrl: "deleteautumncourse.html",
			}).state('addprofessor', {
				url: "/addprofessor",
				templateUrl: "addprofessor.html",
			})


		}
]);


app.controller('homeclr', function($scope,$state,$http){
	$scope.autumn = function(){
			$state.go('autumn');
	};

	$scope.winter = function(){
			$state.go('winter');
	};

	$scope.professor = function(){
			$state.go('addprofessor');
	};

	$scope.timetable = function(){
			$state.go('timetable');
	};

});

app.controller('autumnclr', function($scope,$state,$http){
	$scope.courseinfo;

	$http.get("home/courseinfo/").success(function(response){
		$scope.courseinfo = response;
	});

	$scope.addautumncourse = function(){
			$state.go('addautumncourse');
	};

	$scope.createtimetable = function(){
			$state.go('autumnslot');
	};

	$scope.delete = function(){
			$state.go('deleteautumncourse');
	};
	
});

app.controller('winterclr', function($scope,$state,$http){
	$scope.courseinfo;

	$http.get("home/courseinfo/").success(function(response){
		$scope.courseinfo = response;
	});

	$scope.addwintercourse = function(){
			$state.go('addwintercourse');
	};
});

app.controller('deleteautumncourseclr', function($scope,$state,$http){
	$scope.courseCode;
	
	$scope.delete = function(){
			/*console.log($scope.courseCode);
*/
			$http.get("home/courseinfo/").success(function(response){
				$scope.courseinfo = response;

				var resp = {
					results : response
				}

				for(var i =0;i<resp.results.length;i++){
					if($scope.courseCode==resp.results[i].courseCode){
						console.log(resp.results[i]._id);

						var idnum = resp.results[i]._id;
						var url = "home/courseinfodelete/"+idnum;

						$http.delete(url).success(function(response){
							console.log("delete");
						});

						break;
					}
					else{
						if(i==resp.results.length-1){
							console.log(i+" "+"Not Found"+" "+$scope.courseCode);
						}
					}
				}
			});

			$state.go('autumn',{ reload: true });
	};

	$http.get("home/courseinfo/").success(function(response){
		$scope.courseinfo = response;
	});
});

app.controller('addautumncourseclr', function($scope,$state,$http){
	console.log("add course");

	$scope.submit = function(){
		console.log("Couser add");
		$http({
			    url: "home/courseinfo",
			    method: "POST",
			    data: {courseName: $scope.courseName,courseCode: $scope.courseCode,profShortName: $scope.profShortName, field: $scope.field , year:$scope.year,courseType:$scope.courseType}
			}).success(function(data){
				$state.go('autumn');
			  	// alert('success post');
			}).error(function(){
				Materialize.toast("Error", 3000);
			  	// alert('error');
			  	console.log(err);
			});
	}
});

app.controller('addwintercourseclr', function($scope,$state,$http){
	
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
	
	$http.get("home/prof/").success(function(response){			
			var resp = {
				results : response
			}

			resp.results = $scope.shuffle(resp.results);

			for(var j = 0 ; j < resp.results.length ; j++){
				var path = "home/courseinfo/profShortName/"+resp.results[j].profShortName;
				
				$http.get(path).success(function(response){
					var respo = {
						results : response
					}

					if(respo.results.length==3){
						if(respo.results[0].courseCode==respo.results[1].courseCode){
							$scope.profhassamecourse(respo.results[0],respo.results[1]);
							
							if(respo.results[2].courseType=='CORE'){
								$scope.addcore(respo.results[2]);
							}
							else{
								$scope.addother(respo.results[2]);
							}

						}
						else if(respo.results[1].courseCode==respo.results[2].courseCode){
							$scope.profhassamecourse(respo.results[1],respo.results[2]);

							if(respo.results[0].courseType=='CORE'){
								$scope.addcore(respo.results[0]);
							}
							else{
								$scope.addother(respo.results[0]);
							}

						}
						else if(respo.results[0].courseCode!=respo.results[2].courseCode){
							$scope.profhassamecourse(respo.results[0],respo.results[2]);

							if(respo.results[1].courseType=='CORE'){
								$scope.addcore(respo.results[1]);
							}
							else{
								$scope.addother(respo.results[1]);
							}
						}
					}
					else if(respo.results.length==2 && respo.results[0].courseCode!=respo.results[1].courseCode){
						$scope.profhasdiffrentcourse(respo.results[0],respo.results[1]);
					}
					else if(respo.results.length==2 && respo.results[0].courseCode==respo.results[1].courseCode){
						$scope.profhassamecourse(respo.results[0],respo.results[1]);
					}
					else{
						console.log();
					}
				});		
			}		
	});

	///////////////////////////////.....................CORE COURSE.....................///////////////////////////
	$http.get("home/prof/").success(function(response){			
			var prof = {
				results : response
			}

			prof.results = $scope.shuffle(prof.results);

			for(var j = 0 ; j < prof.results.length ; j++){
				var path = "home/courseinfo/profShortName/"+prof.results[j].profShortName;
			
				$http.get(path).success(function(response){
					var coreprof = {
						results : response
					}

					if(coreprof.results.length == 1 && coreprof.results[0].courseType=='CORE'){
						$scope.addcore(coreprof.results[0]);
					}

				});
			}
	});

	///////////////////////////////.....................other COURSE.....................///////////////////////////
	
	$http.get("home/prof/").success(function(response){			
		var othercourseprof = {
			results : response
		}

		othercourseprof.results = $scope.shuffle(othercourseprof.results);

		for(var k = 0 ; k < othercourseprof.results.length ; k++){
			var path = "home/courseinfo/profShortName/"+othercourseprof.results[k].profShortName;
			
			$http.get(path).success(function(response){
				var otherprof = {
					results : response
				}
				
				if(otherprof.results.length == 1 && otherprof.results[0].courseType!='CORE'){			
					$scope.minumumlengthslot(otherprof.results[0]);
					$scope.addother(otherprof.results[0]);
				}
			});
		}
	});

	$scope.minumumlengthslot = function(argument1){
		var slotlength = [];
		var slotname = [];

		//..............slot1 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot1"][0].courseType!='CORE'){
			var slot1len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot1"]);
		}
		else{
			var slot1len=10;
		}

		//..............slot2 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot2"][0].courseType!='CORE'){
			var slot2len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot2"]);
		}
		else{
			var slot2len=10;
		}

		//..............slot3 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot3"][0].courseType!='CORE'){
			var slot3len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot3"]);
		}
		else{
			var slot3len=10;
		}

		//..............slot4 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot4"][0].courseType!='CORE'){
			var slot4len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot4"]);
		}
		else{
			var slot4len=10;
		}

		//..............slot5 length.........../////
		if($scope.slot[argument1.field+argument1.year]["slot5"][0].courseType!='CORE'){
			var slot5len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot5"]);
		}
		else{
			var slot5len=10;
		}

		//..............slot6 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot6"][0].courseType!='CORE'){
			var slot6len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot6"]);
		}
		else{
			var slot6len=10;
		}
		
		//..............slot7 length...........//////
		if($scope.slot[argument1.field+argument1.year]["slot7"][0].courseType!='CORE'){
			var slot7len=$scope.minslot($scope.slot[argument1.field+argument1.year]["slot7"]);
		}
		else{
			var slot7len=10;
		}

		slotlength[0]=slot1len;slotlength[1]=slot2len;slotlength[2]=slot3len;slotlength[3]=slot4len;slotlength[4]=slot5len;slotlength[5]=slot6len;slotlength[6]=slot7len;
		slotname[0]="slot1";slotname[1]="slot2";slotname[2]="slot3";slotname[3]="slot4";slotname[4]="slot5";slotname[5]="slot6";slotname[6]="slot7";

		for (var i = 0; i < slotlength.length; i++) {
    		for (var j = 0; j < (slotlength.length - i - 1); j++) {
  	 		 	if(slotlength[j] < slotlength[j+1]) {
        			
      			}
      			else{
      				var tmp = slotlength[j];
       				slotlength[j] = slotlength[j+1];
        			slotlength[j+1] = tmp;

        			var tmp1 = slotname[j];
       				slotname[j] = slotname[j+1];
        			slotname[j+1] = tmp1;
      			}
    		}        
  		}
		/*console.log(slotname);
		console.log(slotlength);*/
		return [slotname,slotlength];
	}

	$scope.addtoperticularslot = function(args1,slotname){
		if(args1.courseType!='CORE'){
			$scope.slot[args1.field+args1.year][slotname][$scope.minslot($scope.slot[args1.field+args1.year][slotname])] = args1;
		}
		else{
			console.log("can't adddd");
		}
	}

	$scope.minslot = function(parag){
		var length=0;
		for(var t=0;t<parag.length;t++){
			if(parag[t]!=0){
				length++;
			}
		}
		return length;
	};

	$scope.findminslotname = function(l1,l2,l3,l4,l5,l6,l7){
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



	$scope.shuffle = function(array){
		 for (var i = array.length - 1; i > 0; i--) {
      	  	var j = Math.floor(Math.random() * (i + 1));
      	 	 var temp = array[i];
      	 	 array[i] = array[j];
       	 	array[j] = temp;
   		 }
    		return array;
  	}


	$scope.checkcourse = function(args1,args2){
		if(args1.courseType=='CORECS'){
			for(var i=0;i<args2.length;i++){
				if(args2[i].courseType=='CORECS'){		
					return 0;
				}
			}
			return 1;
		}/*
		else if(args1.courseType=='COREALGO' | args1.courseType=='COREALGO' ){

		}*/
		else{
			return 1;
		}
	}

	$scope.addcore = function(coreprof){
		if($scope.slot[coreprof.field+coreprof.year]["slot1"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot1"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot2"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot2"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot3"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot3"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot4"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot4"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot5"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot5"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot6"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot6"][0] = coreprof;
		}
		else if($scope.slot[coreprof.field+coreprof.year]["slot7"][0]==0){
			$scope.slot[ coreprof.field+coreprof.year]["slot7"][0] = coreprof;
		}else{
			console.log("No slot avalaible for core: "+coreprof.courseCode);
		}
	};

	$scope.addother = function(otherprof){
		var temp1 = $scope.minumumlengthslot(otherprof);
		
		var slotname = temp1[0];
		var slotlength = temp1[1];

		if($scope.slot[otherprof.field+otherprof.year][slotname[0]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[0]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[0]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[0]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[1]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[1]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[1]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[1]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[2]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[2]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[2]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[2]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[3]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[3]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[3]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[3]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[4]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[4]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[4]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[4]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[5]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[5]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[5]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[5]])] = otherprof;
		}
		else if($scope.slot[otherprof.field+otherprof.year][slotname[6]][0].courseType!='CORE' && $scope.checkcourse(otherprof,$scope.slot[otherprof.field+otherprof.year][slotname[6]])){
			$scope.slot[otherprof.field+otherprof.year][slotname[6]][$scope.minslot($scope.slot[otherprof.field+otherprof.year][slotname[6]])] = otherprof;
		}
		else{
			console.log("can't add");
		}
	
	}

	$scope.profhasdiffrentcourse = function(response1,response2){
		if(response1.courseType=='CORE' && response2.courseType=='CORE'){
			//check for slot 1 and slot 2//
			if(($scope.slot[response1.field+response1.year]["slot1"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot2"][0]) == 0){
				$scope.slot[response1.field+response1.year]["slot1"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot2"][0] = response2;
			}
			else if(($scope.slot[response1.field+response1.year]["slot2"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot1"][0]) == 0){
				$scope.slot[response1.field+response1.year]["slot2"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot1"][0] = response2;
			}
			//check for slot 3 and slot 4//
			else if(($scope.slot[response1.field+response1.year]["slot3"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot4"][0]) == 0){
				$scope.slot[response1.field+response1.year]["slot3"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot4"][0] = response2;
			}
			else if(($scope.slot[response1.field+response1.year]["slot4"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot3"][0]) == 0){
				$scope.slot[response1.field+response1.year]["slot4"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot3"][0] = response2;
			}
			//check for slot 5 and slot 6//
			else if(($scope.slot[response1.field+response1.year]["slot5"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot6"][0])==0){
				$scope.slot[ response1.field+response1.year]["slot5"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot6"][0] = response2;
			}
			else if(($scope.slot[response1.field+response1.year]["slot6"][0]) == 0 && ($scope.slot[response2.field+response2.year]["slot5"][0]) == 0){
				$scope.slot[response1.field+response1.year]["slot6"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot5"][0] = response2;
			}
			else{
				console.log("No slot avalaible for CORE and CORE "+response1.courseCode+response2.courseCode);
			}				
		}
		else if((response1.courseType=='CORE' && response2.courseType!='CORE')){
			//check for slot 3 and slot 4//
			if(($scope.slot[response1.field+response1.year]["slot3"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot4"]) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot4"]) < $scope.slot[response2.field+response2.year]["slot4"].length) && (($scope.slot[response2.field+response2.year]["slot4"][0]) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot4"][0].courseType) == undefined)){
				$scope.slot[response1.field+response1.year]["slot3"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot4"][$scope.minslot($scope.slot[response2.field+response2.year]["slot4"])] = response2;			
			}
			else if(($scope.slot[response1.field+response1.year]["slot4"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot3"]) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot3"]) < $scope.slot[response2.field+response2.year]["slot3"].length) && (($scope.slot[response2.field+response2.year]["slot3"][0].courseType) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot3"][0].courseType) == undefined)){
				$scope.slot[response1.field+response1.year]["slot4"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot3"][$scope.minslot($scope.slot[response2.field+response2.year]["slot3"])] = response2;
			}
			//check for slot 5 and slot 6//
			else if(($scope.slot[response1.field+response1.year]["slot5"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot6"]) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot6"]) < $scope.slot[response2.field+response2.year]["slot6"].length) && (($scope.slot[response2.field+response2.year]["slot6"][0].courseType) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot6"][0].courseType) == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot5"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot6"][$scope.minslot($scope.slot[response2.field+response2.year]["slot6"])] = response2;
			}
			else if(($scope.slot[response1.field+response1.year]["slot6"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot5"]) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot5"]) < $scope.slot[response2.field+response2.year]["slot5"].length) && (($scope.slot[response2.field+response2.year]["slot5"][0]) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot5"][0].courseType) == undefined)){
				$scope.slot[response1.field+response1.year]["slot6"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot5"][$scope.minslot($scope.slot[response2.field+response2.year]["slot5"])] = response2;
			}
			//check for slot 1 and slot 2//
			else if(($scope.slot[response1.field+response1.year]["slot1"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot2"]) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot2"]) < $scope.slot[response2.field+response2.year]["slot2"].length) && (($scope.slot[response2.field+response2.year]["slot2"][0].courseType) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot2"][0].courseType) == undefined)){
				$scope.slot[response1.field+response1.year]["slot1"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot2"][$scope.minslot($scope.slot[response2.field+response2.year]["slot2"])] = response2;
			}
			else if(($scope.slot[response1.field+response1.year]["slot2"][0]) == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot1"]) && ( $scope.minslot($scope.slot[response2.field+response2.year]["slot1"]) < $scope.slot[response2.field+response2.year]["slot1"].length) && (($scope.slot[response2.field+response2.year]["slot1"][0].courseType) != 'CORE' | ($scope.slot[response2.field+response2.year]["slot1"][0].courseType) == undefined)){
				$scope.slot[response1.field+response1.year]["slot2"][0] = response1;
				$scope.slot[response2.field+response2.year]["slot1"][$scope.minslot($scope.slot[response2.field+response2.year]["slot1"])] = response2;
			}
			else{
				console.log("No slot is avalaible for CORE AND NOTCORE "+response1.courseCode+response2.courseCode);
			}
		}
		else if(response1.courseType != 'CORE' && response2.courseType == 'CORE'){
			//check for slot 3 and slot 4//
			if(($scope.slot[response2.field+response2.year]["slot3"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot4"]) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot4"]) < $scope.slot[response1.field+response1.year]["slot4"].length) && (($scope.slot[response1.field+response1.year]["slot4"][0]) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot4"][0].courseType) == undefined)){
				$scope.slot[response2.field+response2.year]["slot3"][0] = response2;
				$scope.slot[response1.field+response1.year]["slot4"][$scope.minslot($scope.slot[response1.field+response1.year]["slot4"])] = response1;
			}
			else if(($scope.slot[response2.field+response2.year]["slot4"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot3"]) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot3"]) < $scope.slot[response1.field+response1.year]["slot3"].length) && (($scope.slot[response1.field+response1.year]["slot3"][0].courseType) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot3"][0].courseType) == undefined)){
				$scope.slot[response2.field+response2.year]["slot4"][0] = response2;
				$scope.slot[response1.field+response1.year]["slot3"][$scope.minslot($scope.slot[response1.field+response1.year]["slot3"])] = response1;
			}
			//check for slot 5 and slot 6//
			else if(($scope.slot[response2.field+response2.year]["slot5"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot6"]) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot6"]) < $scope.slot[response1.field+response1.year]["slot6"].length) && (($scope.slot[response1.field+response1.year]["slot6"][0].courseType) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot6"][0].courseType) == undefined)){
				$scope.slot[ response2.field+response2.year]["slot5"][0] = response2;
				$scope.slot[ response1.field+response1.year]["slot6"][$scope.minslot($scope.slot[response1.field+response1.year]["slot6"])] = response1;
			}
			else if(($scope.slot[response2.field+response2.year]["slot6"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot5"]) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot5"]) < $scope.slot[response1.field+response1.year]["slot5"].length) && (($scope.slot[response1.field+response1.year]["slot5"][0]) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot5"][0].courseType) == undefined)){
				$scope.slot[response2.field+response2.year]["slot6"][0] = response2;
				$scope.slot[response1.field+response1.year]["slot5"][$scope.minslot($scope.slot[response1.field+response1.year]["slot5"])] = response1;
			}
			//check for slot 1 and slot 2//
			else if(($scope.slot[response2.field+response2.year]["slot1"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot2"]) && ( $scope.minslot($scope.slot[response1.field+response1.year]["slot2"]) < $scope.slot[response1.field+response1.year]["slot2"].length) && (($scope.slot[response1.field+response1.year]["slot2"][0].courseType) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot2"][0].courseType) == undefined)){
				$scope.slot[response2.field+response2.year]["slot1"][0] = response2;
				$scope.slot[response1.field+response1.year]["slot2"][$scope.minslot($scope.slot[response1.field+response1.year]["slot2"])] = response1;
			}
			else if(($scope.slot[response2.field+response2.year]["slot2"][0]) == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot1"]) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot1"]) < $scope.slot[response1.field+response1.year]["slot1"].length) && (($scope.slot[response1.field+response1.year]["slot1"][0].courseType) != 'CORE' | ($scope.slot[response1.field+response1.year]["slot1"][0].courseType) == undefined)){
				$scope.slot[response2.field+response2.year]["slot2"][0] = response2;
				$scope.slot[response1.field+response1.year]["slot1"][$scope.minslot($scope.slot[response1.field+response1.year]["slot1"])] = response1;
			}
			else{
				console.log("No slot is avalaible for CORE AND NOTCORE "+response1.courseCode+response2.courseCode);
			}		
		}
		else if(response1.courseType!='CORE' && response2.courseType!='CORE'){
			//check for slot 5 and slot 6//
			if($scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot5"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot6"]) && ($scope.slot[response1.field+response1.year]["slot5"][0].courseType != 'CORE'  | $scope.slot[response1.field+response1.year]["slot5"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot5"]) < $scope.slot[response1.field+response1.year]["slot5"].length) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot6"]) < $scope.slot[response2.field+response2.year]["slot6"].length) && ($scope.slot[response2.field+response2.year]["slot6"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot6"][0].courseType == undefined)){
				$scope.slot[ response1.field+response1.year]["slot5"][$scope.minslot($scope.slot[response1.field+response1.year]["slot5"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot6"][$scope.minslot($scope.slot[response2.field+response2.year]["slot6"])] = response2;
			}
			else if($scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot6"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot5"]) && ($scope.slot[response1.field+response1.year]["slot6"][0].courseType != 'CORE' | $scope.slot[response1.field+response1.year]["slot6"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot6"]) < $scope.slot[response1.field+response1.year]["slot6"].length)&& ($scope.minslot($scope.slot[response2.field+response2.year]["slot5"]) < $scope.slot[response2.field+response2.year]["slot5"].length) &&($scope.slot[response2.field+response2.year]["slot5"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot5"][0].courseType == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot6"][$scope.minslot($scope.slot[response1.field+response1.year]["slot6"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot5"][$scope.minslot($scope.slot[response2.field+response2.year]["slot5"])] = response2;
			}
			//check for slot 3 and slot 4//
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot3"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot4"]) && ($scope.slot[response1.field+response1.year]["slot3"][0].courseType != 'CORE' | $scope.slot[response1.field+response1.year]["slot3"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot3"]) < $scope.slot[response1.field+response1.year]["slot3"].length) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot4"]) < $scope.slot[response2.field+response2.year]["slot4"].length) &&($scope.slot[response2.field+response2.year]["slot4"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot4"][0].courseType == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot3"][$scope.minslot($scope.slot[response1.field+response1.year]["slot3"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot4"][$scope.minslot($scope.slot[response2.field+response2.year]["slot4"])] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot4"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot3"]) && ($scope.slot[response1.field+response1.year]["slot4"][0].courseType != 'CORE' | $scope.slot[response1.field+response1.year]["slot4"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot4"]) < $scope.slot[response1.field+response1.year]["slot4"].length)&& ($scope.minslot($scope.slot[response2.field+response2.year]["slot3"]) < $scope.slot[response2.field+response2.year]["slot3"].length) && ($scope.slot[response2.field+response2.year]["slot3"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot3"][0].courseType == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot4"][$scope.minslot($scope.slot[response1.field+response1.year]["slot4"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot3"][$scope.minslot($scope.slot[response2.field+response2.year]["slot3"])] = response2;
			}
			//check for slot 1 and slot 2//
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot1"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot2"]) && ($scope.slot[response1.field+response1.year]["slot1"][0].courseType != 'CORE' | $scope.slot[response1.field+response1.year]["slot1"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot1"]) < $scope.slot[response1.field+response1.year]["slot1"].length) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot2"]) < $scope.slot[response2.field+response2.year]["slot2"].length) && ($scope.slot[response2.field+response2.year]["slot2"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot2"][0].courseType == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot1"][$scope.minslot($scope.slot[response1.field+response1.year]["slot1"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot2"][$scope.minslot($scope.slot[response2.field+response2.year]["slot2"])] = response2;
			}	
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot2"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot1"]) && ($scope.slot[response1.field+response1.year]["slot2"][0].courseType != 'CORE' | $scope.slot[response1.field+response1.year]["slot2"][0].courseType == undefined) && ($scope.minslot($scope.slot[response1.field+response1.year]["slot2"]) < $scope.slot[response1.field+response1.year]["slot2"].length) && ($scope.minslot($scope.slot[response2.field+response2.year]["slot1"]) < $scope.slot[response2.field+response2.year]["slot1"].length) && ($scope.slot[response2.field+response2.year]["slot1"][0].courseType != 'CORE' | $scope.slot[response2.field+response2.year]["slot1"][0].courseType == undefined) ){
				$scope.slot[ response1.field+response1.year]["slot2"][$scope.minslot($scope.slot[response1.field+response1.year]["slot2"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot1"][$scope.minslot($scope.slot[response2.field+response2.year]["slot1"])] = response2;		
			}
			else{
				console.log("No slot available for COURCS:");
			}	
		}
	};

	$scope.profhassamecourse = function(response1,response2){
		if(response1.courseType=='CORE' && response2.courseType=='CORE'){
			if( $scope.slot[response1.field+response1.year]["slot1"][0] == 0 && $scope.slot[response2.field+response2.year]["slot1"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot1"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot1"][0] = response2;
			
			}
			else if( $scope.slot[response1.field+response1.year]["slot2"][0] == 0 && $scope.slot[response2.field+response2.year]["slot2"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot2"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot2"][0] = response2;
				
			}
			else if( $scope.slot[response1.field+response1.year]["slot3"][0] == 0 && $scope.slot[response2.field+response2.year]["slot3"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot3"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot3"][0] = response2;
				
			}
			else if( $scope.slot[response1.field+response1.year]["slot4"][0] == 0 && $scope.slot[response2.field+response2.year]["slot4"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot4"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot4"][0] = response2;
				
			}
			else if( $scope.slot[response1.field+response1.year]["slot5"][0] == 0 && $scope.slot[response2.field+response2.year]["slot5"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot5"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot5"][0] = response2;
				
			}
			else if( $scope.slot[response1.field+response1.year]["slot6"][0] == 0 && $scope.slot[response2.field+response2.year]["slot6"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot6"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot6"][0] = response2;
				
			}
			else if( $scope.slot[response1.field+response1.year]["slot7"][0] == 0 && $scope.slot[response2.field+response2.year]["slot7"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot7"][0] = response1;
				$scope.slot[ response2.field+response2.year]["slot7"][0] = response2;
				
			}
			else{
				console.log("No slot avalaible for course offered for both fields");
			}
		}
		else if(response1.courseType=='CORE' && response2.courseType!='CORE'){
			if( $scope.slot[response1.field+response1.year]["slot3"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot3"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot3"]) < $scope.slot[response2.field+response2.year]["slot3"].length && ($scope.slot[response2.field+response2.year]["slot3"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot3"][0].courseType == undefined) ){
				$scope.slot[ response2.field+response2.year]["slot3"][$scope.minslot($scope.slot[response2.field+response2.year]["slot3"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot3"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot4"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot4"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot4"]) < $scope.slot[response2.field+response2.year]["slot4"].length && ($scope.slot[response2.field+response2.year]["slot4"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot4"][0].courseType == undefined) ){
				$scope.slot[ response2.field+response2.year]["slot4"][$scope.minslot($scope.slot[response2.field+response2.year]["slot4"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot4"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot5"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot5"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot5"]) < $scope.slot[response2.field+response2.year]["slot5"].length && ($scope.slot[response2.field+response2.year]["slot5"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot5"][0].courseType == undefined) ){
				$scope.slot[ response2.field+response2.year]["slot5"][$scope.minslot($scope.slot[response2.field+response2.year]["slot5"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot5"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot2"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot2"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot2"]) < $scope.slot[response2.field+response2.year]["slot2"].length && ($scope.slot[response2.field+response2.year]["slot2"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot2"][0].courseType == undefined)){
				$scope.slot[ response2.field+response2.year]["slot2"][$scope.minslot($scope.slot[response2.field+response2.year]["slot2"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot2"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot1"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot1"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot1"]) < $scope.slot[response2.field+response2.year]["slot1"].length && ($scope.slot[response2.field+response2.year]["slot1"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot1"][0].courseType == undefined) ){
				$scope.slot[ response2.field+response2.year]["slot1"][p$scope.minslot($scope.slot[response2.field+response2.year]["slot1"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot1"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot7"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot7"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot7"]) < $scope.slot[response2.field+response2.year]["slot7"].length && ($scope.slot[response2.field+response2.year]["slot7"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot7"][0].courseType == undefined) ){
				$scope.slot[ response2.field+response2.year]["slot7"][$scope.minslot($scope.slot[response2.field+response2.year]["slot7"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot7"][0] = response1;
			}
			else if( $scope.slot[response1.field+response1.year]["slot6"][0] == 0 && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot6"]) && $scope.minslot($scope.slot[response2.field+response2.year]["slot6"]) < $scope.slot[response2.field+response2.year]["slot6"].length && ($scope.slot[response2.field+response2.year]["slot6"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot6"][0].courseType == undefined)){
				$scope.slot[ response2.field+response2.year]["slot6"][$scope.minslot($scope.slot[response2.field+response2.year]["slot6"])] = response2;
				$scope.slot[ response1.field+response1.year]["slot6"][0] = response1;	
			}
			else{
				console.log("No slot avalaible for course offered for both field:s");
			}
		}
		else if(response1.courseType != 'CORE' && response2.courseType == 'CORE'){
			if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot7"]) && ($scope.slot[response1.field+response1.year]["slot7"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot7"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot7"]) < $scope.slot[response1.field+response1.year]["slot7"].length && $scope.slot[response2.field+response2.year]["slot7"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot7"][$scope.minslot($scope.slot[response1.field+response1.year]["slot7"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot7"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot6"]) && ($scope.slot[response1.field+response1.year]["slot6"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot6"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot6"]) < $scope.slot[response1.field+response1.year]["slot6"].length && $scope.slot[response2.field+response2.year]["slot6"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot6"][$scope.minslot($scope.slot[response1.field+response1.year]["slot6"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot6"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot5"]) && ($scope.slot[response1.field+response1.year]["slot5"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot5"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot5"]) < $scope.slot[response1.field+response1.year]["slot5"].length && $scope.slot[response2.field+response2.year]["slot5"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot5"][$scope.minslot($scope.slot[response1.field+response1.year]["slot5"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot5"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot4"]) && ($scope.slot[response1.field+response1.year]["slot4"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot4"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot4"]) < $scope.slot[response1.field+response1.year]["slot4"].length && $scope.slot[response2.field+response2.year]["slot4"][0]== 0){
						
				$scope.slot[ response1.field+response1.year]["slot4"][$scope.minslot($scope.slot[response1.field+response1.year]["slot4"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot4"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot3"]) && ($scope.slot[response1.field+response1.year]["slot3"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot3"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot3"]) < $scope.slot[response1.field+response1.year]["slot3"].length && $scope.slot[response2.field+response2.year]["slot3"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot3"][$scope.minslot($scope.slot[response1.field+response1.year]["slot3"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot3"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot2"]) && ($scope.slot[response1.field+response1.year]["slot2"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot2"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot2"]) < $scope.slot[response1.field+response1.year]["slot2"].length && $scope.slot[response2.field+response2.year]["slot2"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot2"][$scope.minslot($scope.slot[response1.field+response1.year]["slot2"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot2"][0] = response2;
			}
			else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot1"]) && ($scope.slot[response1.field+response1.year]["slot1"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot1"][0].courseType == undefined) && $scope.minslot($scope.slot[response1.field+response1.year]["slot1"]) < $scope.slot[response1.field+response1.year]["slot1"].length && $scope.slot[response2.field+response2.year]["slot1"][0]== 0){
				$scope.slot[ response1.field+response1.year]["slot1"][$scope.minslot($scope.slot[response1.field+response1.year]["slot1"])] = response1;
				$scope.slot[ response2.field+response2.year]["slot1"][0] = response2;
			}
			else{
				console.log("No slot avalaible for course offered for both field:s");
			}
		}
		else if(response1.courseType!='CORE' && response2.courseType!='CORE'){
			var tem1= $scope.minumumlengthslot(response1);
			var tem2 = $scope.minumumlengthslot(response2);

			var slotname1=tem1[0];var slotname2=tem2[0];
			var slotlength1=tem1[1];var slotlength2=tem2[1];
			
			if(slotname1[0]==slotname2[0] && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[0]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[0]])){
				$scope.addtoperticularslot(response1,slotname1[0]);
				$scope.addtoperticularslot(response2,slotname2[0]);
			}
			else if(slotlength1[0] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[0]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[0]]) && ($scope.slot[response2.field+response2.year][slotname1[0]][0].courseType!='CORE' | $scope.slot[response2.field+response2.year][slotname1[0]][0].courseType == undefined ) && slotlength2[0]<$scope.slot[response2.field+response2.year][slotname1[0]].length){
				$scope.addtoperticularslot(response1,slotname1[0]);
				$scope.addtoperticularslot(response2,slotname1[0]);
			}
			else if(slotlength2[0] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[0]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[0]]) && ($scope.slot[response1.field+response1.year][slotname2[0]][0].courseType!='CORE' | $scope.slot[response1.field+response1.year][slotname2[0]][0].courseType == undefined) && slotlength1[0]<$scope.slot[response1.field+response1.year][slotname2[0]].length){
				$scope.addtoperticularslot(response1,slotname2[0]);
				$scope.addtoperticularslot(response2,slotname2[0]);
			}
			else if(slotlength1[1] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[1]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[1]]) && ($scope.slot[response2.field+response2.year][slotname1[1]][0].courseType!='CORE' | $scope.slot[response2.field+response2.year][slotname1[1]][0].courseType == undefined ) && slotlength2[1]<$scope.slot[response2.field+response2.year][slotname1[1]].length){
				$scope.addtoperticularslot(response1,slotname1[1]);
				$scope.addtoperticularslot(response2,slotname1[1]);
			}
			else if(slotlength2[1] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[1]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[1]]) && ($scope.slot[response1.field+response1.year][slotname2[1]][0].courseType!='CORE' | $scope.slot[response1.field+response1.year][slotname2[1]][0].courseType == undefined) && slotlength1[1]<$scope.slot[response1.field+response1.year][slotname2[1]].length){
				$scope.addtoperticularslot(response1,slotname2[1]);
				$scope.addtoperticularslot(response2,slotname2[1]);
			}
			else if(slotlength1[2] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[2]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[2]]) && ($scope.slot[response2.field+response2.year][slotname1[2]][0].courseType!='CORE' | $scope.slot[response2.field+response2.year][slotname1[2]][0].courseType == undefined ) && slotlength2[2]<$scope.slot[response2.field+response2.year][slotname1[2]].length){
				$scope.addtoperticularslot(response1,slotname1[2]);
				$scope.addtoperticularslot(response2,slotname1[2]);
			}
			else if(slotlength2[2] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[2]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[2]]) && ($scope.slot[response1.field+response1.year][slotname2[2]][0].courseType!='CORE' | $scope.slot[response1.field+response1.year][slotname2[2]][0].courseType == undefined) && slotlength1[2]<$scope.slot[response1.field+response1.year][slotname2[2]].length){
				$scope.addtoperticularslot(response1,slotname2[2]);
				$scope.addtoperticularslot(response2,slotname2[2]);
			}
			else if(slotlength1[3] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[3]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[3]]) && ($scope.slot[response2.field+response2.year][slotname1[3]][0].courseType!='CORE' | $scope.slot[response2.field+response2.year][slotname1[3]][0].courseType == undefined ) && slotlength2[3]<$scope.slot[response2.field+response2.year][slotname1[3]].length){
				$scope.addtoperticularslot(response1,slotname1[3]);
				$scope.addtoperticularslot(response2,slotname1[3]);
			}
			else if(slotlength2[3] == 0 && $scope.checkcourse(response1,$scope.slot[response1.field+response1.year][slotname1[3]]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year][slotname2[3]]) && ($scope.slot[response1.field+response1.year][slotname2[3]][0].courseType!='CORE' | $scope.slot[response1.field+response1.year][slotname2[3]][0].courseType == undefined) && slotlength1[3]<$scope.slot[response1.field+response1.year][slotname2[3]].length){
				$scope.addtoperticularslot(response1,slotname2[3]);
				$scope.addtoperticularslot(response2,slotname2[3]);
			}
			else{
				if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot7"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot7"]) && ($scope.slot[response1.field+response1.year]["slot7"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot7"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot7"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot7"]) && $scope.slot[response2.field+response2.year]["slot7"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot7"]) && ($scope.slot[response2.field+response2.year]["slot7"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot7"][0].courseType == undefined)){					
					$scope.slot[ response1.field+response1.year]["slot7"][$scope.minslot($scope.slot[response1.field+response1.year]["slot7"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot7"][$scope.minslot($scope.slot[response2.field+response2.year]["slot7"])] = response2;			
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot6"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot6"]) && ($scope.slot[response1.field+response1.year]["slot6"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot6"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot6"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot6"]) && $scope.slot[response2.field+response2.year]["slot6"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot6"]) && ($scope.slot[response2.field+response2.year]["slot6"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot6"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot6"][$scope.minslot($scope.slot[response1.field+response1.year]["slot6"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot6"][$scope.minslot($scope.slot[response2.field+response2.year]["slot6"])] = response2;
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot5"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot5"]) && ($scope.slot[response1.field+response1.year]["slot5"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot5"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot5"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot5"]) && $scope.slot[response2.field+response2.year]["slot5"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot5"]) && ($scope.slot[response2.field+response2.year]["slot5"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot5"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot5"][$scope.minslot($scope.slot[response1.field+response1.year]["slot5"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot5"][$scope.minslot($scope.slot[response2.field+response2.year]["slot5"])] = response2;
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot4"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot4"]) && ($scope.slot[response1.field+response1.year]["slot4"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot4"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot4"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot4"]) && $scope.slot[response2.field+response2.year]["slot4"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot4"]) && ($scope.slot[response2.field+response2.year]["slot4"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot4"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot4"][$scope.minslot($scope.slot[response1.field+response1.year]["slot4"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot4"][$scope.minslot($scope.slot[response2.field+response2.year]["slot4"])] = response2;
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot3"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot3"]) && ($scope.slot[response1.field+response1.year]["slot3"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot3"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot3"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot3"]) && $scope.slot[response2.field+response2.year]["slot3"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot3"]) && ($scope.slot[response2.field+response2.year]["slot3"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot3"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot3"][$scope.minslot($scope.slot[response1.field+response1.year]["slot3"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot3"][$scope.minslot($scope.slot[response2.field+response2.year]["slot3"])] = response2;
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot2"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot2"]) && ($scope.slot[response1.field+response1.year]["slot2"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot2"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot2"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot2"]) && $scope.slot[response2.field+response2.year]["slot2"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot2"]) && ($scope.slot[response2.field+response2.year]["slot2"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot2"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot2"][$scope.minslot($scope.slot[response1.field+response1.year]["slot2"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot2"][$scope.minslot($scope.slot[response2.field+response2.year]["slot2"])] = response2;
				}
				else if( $scope.checkcourse(response1,$scope.slot[response1.field+response1.year]["slot1"]) && $scope.checkcourse(response2,$scope.slot[response2.field+response2.year]["slot1"]) && ($scope.slot[response1.field+response1.year]["slot1"][0].courseType !='CORE' | $scope.slot[response1.field+response1.year]["slot1"][0].courseType == undefined) && $scope.slot[response1.field+response1.year]["slot1"].length > $scope.minslot($scope.slot[response1.field+response1.year]["slot1"]) && $scope.slot[response2.field+response2.year]["slot1"].length > $scope.minslot($scope.slot[response2.field+response2.year]["slot1"]) && ($scope.slot[response2.field+response2.year]["slot1"][0].courseType !='CORE' | $scope.slot[response2.field+response2.year]["slot1"][0].courseType == undefined)){
					$scope.slot[ response1.field+response1.year]["slot1"][$scope.minslot($scope.slot[response1.field+response1.year]["slot1"])] = response1;
					$scope.slot[ response2.field+response2.year]["slot1"][$scope.minslot($scope.slot[response2.field+response2.year]["slot1"])] = response2;
				}
			}
		}
	};

	$scope.next = function(){
			$state.go('home');
	};

});