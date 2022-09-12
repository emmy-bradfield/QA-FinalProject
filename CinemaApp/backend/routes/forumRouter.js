const express = require('express');
const forumRoute = express.Router();

const {Forum} = require('../models/forumModel');

forumRoute.route("/post").post((req, res) => {
    const name = req.body.name;
    const movieName = req.body.movieName;
    const rating = req.body.rating;
    const message = req.body.message;

    const newPost = new Forum({
        name,
        movieName,
        rating,
        message
    });
    newPost.save()
    .then(newPost => res.json(newPost))
    .catch((err) => res.status(400).json('Error: ' + err))
})
forumRoute.route('/getAll').get((req, res) => {
    Forum.find().then(posts => res.json(posts)).catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = forumRoute;