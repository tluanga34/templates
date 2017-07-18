app.service("geo",["$http",function($http){


    var _geo = this;

    //Default india id : 1269750

    _geo.get = function(geoId, callback){
        $http({
            url : "http://www.geonames.org/childrenJSON?&style=long",
            params : {
                geonameId : geoId
            },
            method : "GET"
        }).then(
            function(response){
                callback(response.data);
            },
            function(failed){
                callback({
                    error : "Failed due to technical error"
                });
            }
        );
    };



}]);