var mandiControllers = angular.module('mandiControllers', []);

mandiControllers.controller('ListController' , ['$scope', '$http',function($scope, $http) {
$http.get('https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e&limit=999').success(function(data) {
$scope.mandi = data;
$scope.mandiOrder = 'commodity';
});

}]);

mandiControllers.controller('DetailsController' , ['$scope', '$http','$routeParams',function($scope, $http, $routeParams) {
$http.get('https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e&limit=999').success(function(data) {
$scope.mandi = data;
$scope.whichItem = $routeParams.itemId;
});

}]);
