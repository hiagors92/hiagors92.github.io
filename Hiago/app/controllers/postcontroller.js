angular
    .module('Post')
    .controller('PostsController', 
        function($scope, $http) {
            $scope.posts = [];
            $http
                .get('https://jsonplaceholder.typicode.com/posts/')
                .then(function(response){
                  var data = response.data;
                  $scope.posts = data;
                }, function(reason){
                  console.log(reason.status);
                });
        }
    );