const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const forumSchema = new Schema({
    name: String,
    movieName: String,
    rating: String,
    message: String
    });

const Forum = model('Forum', forumSchema);
module.exports = {
    "Forum": Forum
}