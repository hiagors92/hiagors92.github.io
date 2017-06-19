angular
  .module('User')
  .controller('UsersController',
    function($scope, $http) {
      $scope.users = [];
      $http
        .get('https://jsonplaceholder.typicode.com/users/')
        .then(function(response){
          var data = response.data;
          $scope.users = data;
        }, function(reason){
          console.log(reason.status);
        });
    }
  );