angular.module('app.routes')
.config(function($routeProvider, $locationProvider){
    //Needs angular-route
    $locationProvider.hashPrefix('')
    //gets rid of the ! in the ur
    $routeProvider
        .when('/',{
            controller:'HomeCtrl',
            templateUrl: 'angular/views/home.html'
        })
        .when('/newtweet',{
            controller:'TweetCtrl',
            templateUrl: 'angular/views/tweetForm.html'
        })
        .when('/view/:id',{
            controller:'SingleCtrl',
            templateUrl: 'angular/views/single.html'
        })
        .when('/edit/:id',{
            controller:'EditCtrl',
            templateUrl: 'angular/views/edit.html'
        })
        .otherwise({redirectTo:'/'})
})


