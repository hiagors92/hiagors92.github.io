angular
    .module('Post', []);
angular
	.module('User', []);
angular
	.module('Comment', []);
angular
	.module('angularAppRoutes', []);
angular
	.module('angularApp', [
		'ui.router',
		'Post',
		'User',
		'Comment',
		'angularAppRoutes'
		]);

angular
	.module('angularApp')
	.run(function($rootScope, $state) {
   		$rootScope.stateFac = $state;
  	});