angular.module('app.filters')
    .filter('nl2br', function() {
        return function (input) {
            return input.replace(/\n/g, '<br>')
        }
    })
