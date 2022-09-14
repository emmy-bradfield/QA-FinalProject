const mongoose = require('mongoose');

const {Schema} = mongoose;

const forumSchema = new Schema({
    name: String,
    movieName: String,
    rating: String,
    message: String
    });

module.exports = mongoose.models.Forum || mongoose.model("Forum", forumSchema);