const express = require('express');
const emailRoute = express.Router();

const {Email} = require('../models/emailModel');

emailRoute.route("/post").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const newEmail = new Email({
        name,
        email,
        subject,
        message
    });
    newEmail.save()
    .then(newEmail => res.json(newEmail))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = emailRoute;