angular.module("firstApp").service('mainServe', function($http){
//use of 'this' to reference any other function in our js files

	this.tools = [{ name: 'hammer', description: 'Pink with sparkles, hits nails'}, {name: 'spear', description: "Wooden and stabs things"}, {name: 'tomahawk', description: 'For bludgeon'}];

});