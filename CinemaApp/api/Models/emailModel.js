const mongoose = require('mongoose');

const {Schema} = mongoose;

const emailSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
    });

module.exports = mongoose.models.Email || mongoose.model("Email", emailSchema);
