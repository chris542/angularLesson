angular.module('app.controllers')
.controller('TweetCtrl', function($scope, $location, Tweet, $data){
    //The form name has ng-submit = "createTweet()"
    $scope.createTweet = function() {
        var tweet = new Tweet
        
        tweet.content = $scope.newTweet
        tweet.username = faker.name.firstName()
        tweet.userimg = faker.image.avatar()

        tweet.$save(function(response){
            $data.tweets.push(response)
            $location.path('/')
        })
    }
})

