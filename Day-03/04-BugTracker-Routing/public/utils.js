var utils = angular.module("utils", []);

utils.filter('trimText', function(defaultTrimLength){
	return function(textValue, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return textValue.length < trimLength ? textValue : textValue.substr(0,trimLength) + '...';
	}
});

utils.filter('elapsed', function(){
	return function(dateValue){
		return moment(dateValue).fromNow();
	};
});