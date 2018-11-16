
angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, $http){
  $scope.helloWorld = function(){
    console.log('This is my first template');
  }  

  $scope.todos ;

  $http.get('/api/todo') 
    .success(function(data) {
      $scope.todos = data;
      console.log($scope.todos);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
});