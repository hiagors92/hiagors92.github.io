angular
	.module('post')
	.controller('PostController')
		function($scope, $http, $stateParams) {

		$http
        .get('https://jsonplaceholder.typicode.com/posts/' + $stateParams.postId)
        .then(function(response){
          var data = response.data;
          for(i in data){
            $scope[i] = data[i];
          }
        }, function(reason){
          console.log(reason.status);
        });
      $http
        .get('https://jsonplaceholder.typicode.com/posts/' + $stateParams.postId + '/comments')
        .then(function(response){
          var data = response.data;
          $scope.comments = data;
        }, function(reason){
          console.log(reason.status);
        });
    }
 