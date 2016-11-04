angular.module('altSprts', ['ui.router','ngPhotoswipe'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('writings',{
                url:'/writings',
                // parent:'home',
                templateUrl: "../views/writings.html"
            })
            .state('photos',{
                url:'/photos',
                // parent:'home',
                templateUrl: "../views/photos.html"
            })
            .state('home',{
                url:'/',
                templateUrl: "../views/home.html",
                controller: "quoteCtrl"
            })
            .state('events',{
                url:'/events',
                // parent:'home',
                templateUrl: "../views/events.html"
            })
            .state('contact',{
                url:'/contact',
                // parent:'home',
                templateUrl: "../views/contact.html"
            })


        $urlRouterProvider
            .otherwise('/');


    });
