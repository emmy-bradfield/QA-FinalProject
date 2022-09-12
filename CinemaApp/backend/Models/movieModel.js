const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const movieSchema = new Schema({
    _id: String,
    name: String,
    screenings: [{
        dates: Array,
        times: Array
    }],
    reviews: Number,
    rating: Number
});

const Movie = model('Movie', movieSchema);
module.exports = {
    "Movie": Movie
};