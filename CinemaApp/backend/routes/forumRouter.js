const express = require('express');
const forumRoute = express.Router();

const {Forum} = require('../models/forumModel');

let count = 1;

forumRoute.route("/post").post((req, res) => {
    const _id = count;
    const name = req.body.name;
    const movieName = req.body.movieName;
    const rating = req.body.rating;
    const message = req.body.message;
    const replies = ['']

    const newPost = new Forum({
        _id,
        name,
        movieName,
        rating,
        message,
        replies
    });
    newPost.save().then(() => {
        res.json(newPost);
        counter ++
    }).catch((err) => res.status(400).json('Error: ' + err))
})
forumRoute.route('/getAll').get((req, res) => {
    Forum.find().then(posts => res.json(posts)).catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/get/:movieName').get((req, res) => {
    Forum.find({"movieName": req.params.movieName}).then(post => res.json(post)).catch((err) => res.status(400).json('Error: ' + err))
})

forumRoute.route('/reply/:_id').post((req, res) => {
    Forum.findById(req.params._id, function(err, post){
        if(err){
            res.send(err)
        }
        post.replies = post.replies.push(req.body.replies);

        post.save(function(err){
            if(err){
                res.send(err);
            }
            res.json(post);
        })
    })
});

module.exports = forumRoute;
