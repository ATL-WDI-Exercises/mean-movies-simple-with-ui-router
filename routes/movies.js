var express = require('express');
var router = express.Router();

var Movie = require('../models/movie');

function seedMovies() {
  var movies = [
    { title: 'Star Wars: The Force Awakens', year: 2015 },
    { title: 'The Matrix',                   year: 1999 },
    { title: 'Groundhog Day',                year: 1993 },
    { title: 'Batman vs Superman',           year: 2016 }
  ];

  Movie.find({}).remove()
  .then(function() {
    return Movie.create(movies);
  })
  .then(function() {
    return Movie.find({});
  })
  .then(function(found) {
    console.log('We saved and retrieved', found.length, 'movies.');
  });
}

seedMovies();

// INDEX Route
router.get('/', function(req, res, next) {
  Movie.find({})
  .then(function(movies) {
    res.json(movies);
  });
});

// SHOW Route
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id)
  .then(function(movie) {
    if (!movie) {
      res.status(404).json( { error: 'Not found' } );
    }
    res.json(movie);
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;
