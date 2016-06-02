angular.module('moviesApp', ['ui.router']);

angular.module('moviesApp')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('movies', {
      url: "/movies",
      templateUrl: "views/movies.html",
      controller: "moviesCtrl",
      controllerAs: "ctrl"
    });
});

angular.module('moviesApp')
.controller('moviesCtrl', function($http) {
  console.log('moviesCtrl is alive!');

  var ctrl = this;
  ctrl.movies = [];

  ctrl.getMovies = function() {
    $http.get('/api/movies').then(function(response) {
      ctrl.movies = response.data;
      console.log('ctrl.movies:', ctrl.movies);
    });
  };

  ctrl.getMovies();
});
