angular.module('youtubeService', ['ngResource']).
    factory('youtubeFactory', function ($resource) {
        return {
            onClientLoad:function (query, cb) {
                query = query || "cheese";
                var url = "https://www.googleapis.com/youtube/v3/search";

                var data = $resource(url, { part:'snippet', q:query, key:'AIzaSyADN-pQYegmLCi9s5CEkB-pyqZBaFNwunE', callback:'JSON_CALLBACK'  },
                    {
                        get:{
                            method:'JSONP', params:{
                                visibility:'@self'
                            }
                        }
                    });
                data.get({}, function (data1, data2) {
                    cb(data1);
                });
            }
        }
    });