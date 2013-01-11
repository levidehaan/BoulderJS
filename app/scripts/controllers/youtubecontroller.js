AngularIntroApp.controller('youtubeController', function ($scope, $location, $routeParams, youtubeFactory) {
    $scope.ytSearch = function () {
        youtubeFactory.onClientLoad($scope.text, function (data) {
            $scope.funk = data.items;
        });
    }
});
