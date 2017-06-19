angular
  .module('User')
  .controller('UserController',
    function($scope, $http, $stateParams){
      $scope.posts = []
      $scope.comments = []
      $http
        .get('https://jsonplaceholder.typicode.com/users/' + $stateParams.userId + '/posts')
        .then(function(response){
          var data = response.data;
          $scope.posts = data;
        }, function(reason){
          console.log(reason.status);
        });
      $http
        .get('https://jsonplaceholder.typicode.com/users/' + $stateParams.userId)
        .then(function(response){
          var data = response.data;
          for(i in data){
            $scope[i] = data[i];
          }
        }, function(reason){
          console.log(reason.status);
        });
    }
  );