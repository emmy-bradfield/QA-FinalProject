const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const emailSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
    });

const Email = model('Email', emailSchema);
module.exports = {
    "Email": Email
}
