(
    function () {
        angular.module('youtubeApp',[]);
    })();
(function(){
    angular
    .module('youtubeApp')
    .controller('mainController', mainController);
    function mainController(youtubeService){
        var vm = this;
        vm.videoListing = [];
        vm.message = "Youtube Data API with AngularJS"
        function showVideos(){
            youtubeService.getVideos().success(function(data){
                vm.videoListing = data.items;
            });
        }
        showVideos();
    }
})();
(function(){
    angular
    .module('youtubeApp')
    .factory('youtubeService', youtubeService);
    function youtubeService($http){
        var apiKey = "AIzaSyD2EoIjd3xUy-e9nvmURtCmQ1iSL7ak6GA"
        apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=UCWu91J5KWEj1bQhCBuGeJxw&type=video&maxResults=50&key=" + apiKey,
        youtubeFactory = {};

        youtubeFactory.getVideos = function(){
            return $http.get(apiURL);
        };
        return youtubeFactory;
    }
})();