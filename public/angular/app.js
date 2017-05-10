angular.module('app.controllers', [])
angular.module('app.resources', [])
angular.module('app.services', [])
angular.module('app.routes', [])

// this links to ng-app='app'
var app = angular.module('app',[
    'ngRoute',
    'ngResource',

    'app.controllers',
    'app.resources',
    'app.services',
    'app.routes'
]);

