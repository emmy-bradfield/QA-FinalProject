const express = require('express');
const forumRoute = express.Router();

const {Forum} = require('../models/forumModel');

forumRoute.route("/post").post((req, res) => {
    const name = req.body.name;
    const movieName = req.body.movieName;
    const rating = req.body.rating;
    const message = req.body.message;
    const replies = req.body.replies
    const _id = String(name.substring(0, 3).toUpperCase() + movieName.substring(0, 4).toUpperCase() + rating)

    const newPost = new Forum({
        _id,
        name,
        movieName,
        rating,
        message,
        replies
    });
    newPost.save().then(newPost => res.json(newPost)).catch((err) => res.status(400).json('Error: ' + err))
})
forumRoute.route('/getAll').get((req, res) => {
    Forum.find().then(posts => res.json(posts)).catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/get/:movieName').get((req, res) => {
    Forum.find({"movieName": req.params.movieName}).then(post => res.json(post)).catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/reply/:_id').post((req, res) => {
    Forum.findByIdAndUpdate(req.params._id, {$push: {replies: req.body.reply}})
    .then((post) => res.json(post))
    .catch((err) => res.json('Error: ' + err))
});


module.exports = forumRoute;
