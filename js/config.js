
let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider 
    .state('root', {
      abstract: true,
      templateUrl: 'template/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'template/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'HomeController',
      templateUrl: 'template/about.tpl.html'

    })
    .state('root.contact', {
      url: '/contact',
      controller: 'HomeController',
      templateUrl: 'template/contact.tpl.html'

    });

};

config.$inject = ["$stateProvider", "$urlRouterProvider"];

export default config;