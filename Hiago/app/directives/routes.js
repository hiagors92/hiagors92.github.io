angular
    .module('angularAppRoutes')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');
        $stateProvider
            .state('about',
            {
              url: '/about',
              templateUrl: 'app/components/templates/about.html'
            })
            .state('post',
            {
              url: '/posts/{postId:int}',
              templateUrl: 'app/components/templates/post.html',
              controller: 'PostController'
            })
            .state('user',
            {
              url: '/users/{userId:int}',
              templateUrl: 'app/components/templates/user.html',
              controller: 'UserController'
            })
            .state('posts',
            {
                url: '/posts',
                templateUrl: 'app/components/templates/posts.html',
                controller: 'PostsController'
            })
            .state('users',
            {
                  url: '/users',
                  templateUrl: 'app/components/templates/users.html',
                  controller: 'UsersController'
            })            
    });