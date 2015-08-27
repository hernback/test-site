(function() {
  
  //  Create controller
  var github = function($http, $log) {
	  
	  var baseUrl = "https://api.github.com";

    var getUser = function(username) {
      return $http.get(baseUrl + "/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepo = function(username, reponame) {
     return $http.get(baseUrl + "/repos/" + username + "/" + reponame)
        .then(function(response) {
       //   $log.info('fetched repo ' + response.data.name);
          return response.data;
        });
    };
    
    var getCollaborators = function(repo){
      return $http.get(baseUrl + "/repos/" + repo.owner.login + "/" + repo.name + "/collaborators")
      .then(function(response){
        return response.data;  
      });
    };
    
    var getRepoDetails = function(username, reponame){
      var repo;
      var repoUrl = baseUrl + "/repos/" + username + "/" + reponame;
      
      return $http.get(repoUrl)
        .then(function(response){
          repo = response.data;
          return $http.get(repoUrl + "/collaborators");
        }).then(function(response){
          repo.collaborators = response.data;
          return repo;
        });
      };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepo: getRepo,
      getCollaborators: getCollaborators,
      getRepoDetails: getRepoDetails
    };
  };

  var module = angular.module("hernbackApp");

  module.factory("github", github); 
}());