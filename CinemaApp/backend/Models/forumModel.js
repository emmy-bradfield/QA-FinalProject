const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const forumSchema = new Schema({
    _id: Number,
    name: String,
    movieName: String,
    rating: String,
    message: String,
    replies: Array
    });

const Forum = model('Forum', forumSchema);
module.exports = {
    "Forum": Forum
}