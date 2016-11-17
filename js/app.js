angular.module('altSprts', ['ui.router','wu.masonry'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('writings',{
                url:'/writings',
                templateUrl: "./views/writings.html",
                controller: "writingCtrl"
            })
            .state('photos',{
                url:'/photos',
                templateUrl: "./views/photos.html",
                controller: "photoCtrl"
            })
            .state('home',{
                url:'/',
                templateUrl: "./views/home.html",
                controller: "quoteCtrl"
            })
            .state('events',{
                url:'/events',
                templateUrl: "./views/events.html"
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "./views/contact.html",
                controller: "submitCtrl"
            })

        $urlRouterProvider
            .otherwise('/');

    });
