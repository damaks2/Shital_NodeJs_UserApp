
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

	$scope.myFunc1 = function() {

	$http({
    method : "GET",
    url : "http://localhost:3000/getUsers/SH101"
  }).then(function mySuccess(response) {
      $scope.data1 = response.data;
    }, function myError(response) {
      $scope.data1 = response.statusText;
  });
  }
  
  $scope.myFunc2 = function() {

	$http({
    method : "GET",
    url : "http://localhost:3000/getToDos/toDo100",
	 headers: {
   'Accept': 'application/json'
 }
  }).then(function mySuccess(response) {
      $scope.data2 = response.data;
    }, function myError(response) {
      $scope.data2 = response.statusText;
  });
  }
  
  $scope.myFunc3 = function() {

	$http({
    method : "GET",
    url : "http://localhost:3000/getActiveUsers"
  }).then(function mySuccess(response) {
      $scope.data3 = response.data;
    }, function myError(response) {
      $scope.data3 = response.statusText;
  })
  }
  
  $scope.myFunc4 = function() {
	
	$http({
    method : "GET",
    url : "http://localhost:3000/getByDate"
  }).then(function mySuccess(response) {
      $scope.data4 = response.data;
    }, function myError(response) {
      $scope.data4 = response.statusText;
  });
  }
});
