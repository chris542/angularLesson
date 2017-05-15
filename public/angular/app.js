angular.module('app.controllers', [])
angular.module('app.resources', [])
angular.module('app.services', [])
angular.module('app.filters', [])
angular.module('app.routes', [])
angular.module('app.views', [])

// this links to ng-app='app'
var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngSanitize',

    'app.controllers',
    'app.resources',
    'app.services',
    'app.filters',
    'app.routes',
    'app.views'
]);
