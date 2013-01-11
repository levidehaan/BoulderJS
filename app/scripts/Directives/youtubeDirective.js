AngularIntroApp.directive('youtubed', function () {
    var template = '<div class="yt">' +
        '<h2><img src="{{youtube.imageurl}}" />' +
        '<a class="YouTubeResult" href="http://www.youtube.com/watch?v={{youtube.id.videoId}}">{{youtube.snippet.title}}</a></h2>' +
        '</div>';

    return {
        restrict:'E',
        scope:{youtube:'='},
        template:template,
        link:function ($scope, lelement, attrs) {
            if($scope.youtube.snippet.thumbnails.default.url){
                $scope.youtube.imageurl = $scope.youtube.snippet.thumbnails.default.url;
            }
        }
    }
});