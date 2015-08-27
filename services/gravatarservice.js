(function(){
  var gravatar = function($http, $log) {
    
    var getGravatar = function(id) {
      return $http.get("http://www.gravatar.com/avatar/" + id) 
        .then(function(response) {
          return response.data;
        });
    };
    
  };
  
  var module = angular.module("hernbackApp");

  module.factory("gravatar", gravatar);
  
}());