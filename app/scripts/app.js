var AngularIntroApp = angular.module('AngularIntroApp', ['youtubeService'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html',
            controller:'MainCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);