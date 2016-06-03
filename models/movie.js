var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year:  { type: Number, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Movie', MovieSchema);
