angular.module('moviesApp', []);

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
