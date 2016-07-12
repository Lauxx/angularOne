angular.module("firstApp").controller("mainControl", function($scope, mainServe){
//can call in variables with $scope and use their dot notation name in html file {{test}} {{things}}


	// $scope.test = "yay it works";
	// $scope.things = "this is amazing";

	// $scope.tools = ['hammer', 'saw', 'spear', 'tomahawk', 'pitchfork', 'screwdriver'];

	// $scope.tools = [{ name: 'hammer', description: 'Pink with sparkles, hits nails'}, {name: 'spear', description: "Wooden and stabs things"}, {name: 'tomahawk', description: 'For bludgeon'}];


	$scope.tools = mainServe.tools;



});