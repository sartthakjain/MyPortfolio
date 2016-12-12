var mainApp=angular.module("portfolio", ['ui.router','home','about','social','directives.skrollr']);


mainApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('homeState', {
            url: '/',
    controller:'homeController',
    views:{
              "content@":{templateUrl: "app/home/home.html"}
        }


        })




    .state('aboutState', {
        url: '/about',
      controller:'aboutController',
        views:{
                  "content@":{templateUrl: "app/about/about.html"}
            }
    })

    .state('socialState', {
        url: '/social',
        controller:'socialController',
        views:{
                  "content@":{templateUrl: "app/social/social.html"}
            }
    })
})
