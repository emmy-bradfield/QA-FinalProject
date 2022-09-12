const axios  = require('axios');
const express = require('express');
const movieRoute = express.Router();

const {Movie} = require('../Models/movieModel.js');

movieRoute.route("/get/all").get((req, res) => {
    Movie.find().then(movies => res.json(movies)).catch((err) => res.json('Error: ', err))
});

movieRoute.route("/get/:name").get((req, res) => {
    Movie.find({"name": req.params.name})
    .then(movies => res.json(movies))
    .catch((err) => res.json('Error: ', err))
});

movieRoute.route("/get/:rating").get((req, res) => {
    Movie.find({"rating": req.params.rating})
    .then(movies => res.json(movies))
    .catch((err) => res.json('Error: ', err))
});

module.exports = movieRoute;