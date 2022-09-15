const express = require('express');
const forumRoute = express.Router();

const {Forum} = require('../models/forumModel');

forumRoute.route("/post").post((req, res) => {
    const name = req.body.name;
    const movieName = req.body.movieName;
    const rating = req.body.rating;
    const message = req.body.message;
    const replies = req.body.replies

    const newPost = new Forum({
        name,
        movieName,
        rating,
        message,
        replies
    });
    newPost.save()
    .then(newPost => res.json(newPost))
    .catch((err) => res.status(400).json('Error: ' + err))
})
forumRoute.route('/getAll').get((req, res) => {
    Forum.find().then(posts => res.json(posts)).catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/get/:movieName').get((req, res) => {
    Forum.find({"movieName": req.params.movieName})
    .then(post => res.json(post))
    .catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/update/:_id').post((req, res) => {
    const newReply = req.body.reply;
    console.log(newReply)
    console.log("hi")
    console.log(req.params._id)
    Forum.findByIdAndUpdate(
        req.params._id,
        {
            $push: {
                "replies": newReply
            }
        },
        {new: true},
        function (err, result) {
        if (err) {
            console.log(err)
            console.log("wah")
        } else {
            console.log("Updated Booking: " + result);
        }
    })
});

module.exports = forumRoute;