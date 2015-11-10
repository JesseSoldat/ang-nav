
let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider 
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'template/home.tpl.html'
    })
    .state('about', {
      url: '/about',
      controller: 'HomeController',
      templateUrl: 'template/about.tpl.html'

    })
    .state('contact', {
      url: '/contact',
      controller: 'HomeController',
      templateUrl: 'template/contact.tpl.html'

    });

};

config.$inject = ["$stateProvider", "$urlRouterProvider"];

export default config;