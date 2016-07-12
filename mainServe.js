angular.module("firstApp").service('mainServe', function($http){
//use of 'this' to reference any other function/variables in our js files
//api requests happen here

	this.tools = [{ name: 'hammer', description: 'Pink with sparkles, hits nails'}, {name: 'spear', description: "Wooden and stabs things"}, {name: 'tomahawk', description: 'For bludgeon'}];

	this.getServeThings = function(){
		return $http({
			method: 'GET', 
			url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
		}).then(function(res){
			//linking to giphy api and able to get data
			console.log(res.data, 'I am serve data');
			return res.data
		})
	};

});