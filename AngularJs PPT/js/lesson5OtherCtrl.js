myProjectApp.controller("homeCtrl", function ($scope, message) {		$scope.message = message;});/*myProjectApp.controller("routerCtrl", ['$scope', '$routeParams','$location', function($scope, $routeParams,$location) {		$scope.currentShow = $routeParams.router_id;		$scope.isEm = false;		if($routeParams.em){			$scope.isEm = $routeParams.em;		}		//var searchObject = $location.search();		//if( searchObject.em){		//	$scope.isEm = searchObject.em;		//}}]);myProjectApp.controller("routeParamsCtrl", ['$scope', '$routeParams',function($scope, $routeParams) {		$scope.currentShow = $routeParams.param_id;}]);myProjectApp.controller("locationCtrl", ['$scope', '$routeParams',function($scope, $routeParams) {		$scope.currentShow = $routeParams.location_id;}]);*/