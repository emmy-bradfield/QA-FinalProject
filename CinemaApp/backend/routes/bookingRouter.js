const axios  = require('axios');
const express = require('express');
const bookingRoute = express.Router();

const {Booking} = require('../models/bookingModel');

// create movie using form
bookingRoute.route('/post').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const movie = req.body.movie;
    const day = req.body.day;
    const time = req.body.time;
    const price = req.body.price;
    const noOfAdult = req.body.noOfAdult;
    const noOfChild = req.body.noOfChild;
    const noOfConcession = req.body.noOfConcession;
    const cardName = req.body.cardName;
    const cardNumber = req.body.cardNumber;
    const cardDate = req.body.cardDate;
    const cardCVC = req.body.cardCVC;
    const dateTime = req.body.dateTime;

    const _id = (lastName.substring(0, 4).toUpperCase() + String(Math.floor(Math.random() * 9999) + 1000) + movie.substring(0, 2).toUpperCase())
    const tickets = {
        _id,
        noOfAdult,
        noOfChild,
        noOfConcession
    };
    const payment = {
        _id,
        cardName,
        cardNumber,
        cardDate,
        cardCVC,
        dateTime
    };

    const newBooking = new Booking({
        _id,
        firstName,
        lastName,
        movie,
        day,
        time,
        price,
        tickets,
        payment
    });

    newBooking.save().then(() => res.json(newBooking._id)).catch((err) => res.status(400).json('Error: ' + err))
})


bookingRoute.route('/getAll').get((req, res) => {
    Booking.find().then(bookings => res.json(bookings)).catch((err) => res.status(400).json('Error: ' + err))
})


bookingRoute.route('/get/:_id').get((req, res) => {
    Booking.findById({"_id": req.params._id})
    .then(booking => res.json(booking))
    .catch((err) => res.status(400).json('Error: ' + err))
})


bookingRoute.route('/update/:_id').post((req, res) => {
    const ticketDetails = {
        noOfAdult: req.body.noOfAdult,
        noOfChild: req.body.noOfChild,
        noOfConcession: req.body.noOfConcession
    };
    Booking.findByIdAndUpdate(req.params._id, {
        tickets: ticketDetails
    }, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log("Updated Booking: " + result);
        }
    })
});

bookingRoute.route('/checkout/:_id').post((req, res) => {
    const paymentDetails = {
        cardName: req.body.cardName,
        cardNumber: req.body.cardNumber,
        cardDate: req.body.cardDate,
        cardCVC: req.body.cardCVC,
        dateTime: req.body.dateTime
    }
    Booking.findByIdAndUpdate(req.params._id, {
        payment: paymentDetails
    }, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log("Updated Booking: " + result)
        }
    })
})

bookingRoute.route('/delete/:_id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params._id).then(() => console.log("Booking successfully cancelled")).catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = bookingRoute;
