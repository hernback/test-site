(function() {

  // declare a module
  var app = angular.module('hernbackApp', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home/');
    
    $stateProvider
        
        .state('home', {
            url: '/home/',
            templateUrl: 'home/home.html'
        })
        .state('steam', {
               url: '/steam/',
            templateUrl: 'steam/steamview.html',
            controller:'steamcontroller'
        })
         .state('git', {  
               url: '/git/',
            templateUrl: 'git/gitview.html',
            controller:'gitcontroller'
        });
        
  });
}());