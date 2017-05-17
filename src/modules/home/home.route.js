export default function route($stateProvider){
	$stateProvider.state('home',{
		url:'/',
		template: require('./home.pug'),
		controller: 'HomeController',
		controllerAs: 'Home',
	});
};

route.$inject = ['$stateProvider'];