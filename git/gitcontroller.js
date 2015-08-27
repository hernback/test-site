(function(){

  var app = angular.module("hernbackApp");
  var controller = function($scope, github) {

    var searchParameters = '';
    $scope.showSearchResult = false;
    
    var searchUser = function(params){
      if(params.length > 2)
      {
        github.getUser(params).then(onSuccess, onError);
      }
      else{
        $scope.showSearchResult = false;
      }
    }
    
    var onError = function(reason) {
     $scope.showSearchResult = false;
    };
    
     var onSuccess = function(data) {
      if(!_.isUndefined(data))
        {
          $scope.user = data;
          $scope.showSearchResult = true;
        }
    };
    
    $scope.searchParameters = searchParameters;
    $scope.searchUser= searchUser;   
  };

  app.controller("gitcontroller", ["$scope", "github", controller]);
  
}());