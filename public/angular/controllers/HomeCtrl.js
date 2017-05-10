angular.module('app.controllers')
.controller('HomeCtrl', function($scope, Tweet, $data){
    $scope.tweets = $data.tweets
    //    *****OR $scope.tweets = Tweet.query() BUT it reloads EVERYTIME
    //    *****OR NEEDS $http in function of app.controller
    //    $scope.tweets = []
    //    $http
    //        .get('/api/tweet')
    //        .then(function(response){
    //            console.log(response.data)
    //            $scope.tweets = response.data
    //        })

    $scope.deleteTweet = function(tweet) {
        Tweet.delete({id: tweet.id}, function () {
            //find the index in the array of the tweet we want to remove
            var index = $data.tweets.findIndex(t=> t.id == tweet.id)

            //remove 1 item from the tweets array, at the index we found above
            $data.tweets.splice(index, 1)

        })
    }
})


//            $data.tweets = $scope.tweets.filter(function(t){
//                //filter if its false. keep if its true
//                return t.id !== tweet.id
//            })
//            // OR $tweets.all = $scope.tweets.filter(t => t.id !== tweet.id)

//            $scope.tweets = $data.tweets

