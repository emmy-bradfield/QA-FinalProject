const axios = require('axios');
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

    newBooking.save().then(() => res.json(newBooking)).catch((err) => res.status(400).json('Error: ' + err))
});


bookingRoute.route('/getAll').get((req, res) => {
    Booking.find().then(bookings => res.json(bookings)).catch((err) => res.status(400).json('Error: ' + err))
});


bookingRoute.route('/get/:_id').get((req, res) => {
    Booking.findById({"_id": req.params._id}).then((booking) => res.json(booking)).catch((err) => res.status(400).json('Error: ' + err))
});


bookingRoute.route('/update/:_id').post((req, res) => {
    Booking.findById(req.params_id).then(res => {
        const updatedBooking = {
            _id: req.params._id,
            firstName: res.body.firstName,
            lastName: res.body.lastName,
            movie: res.body.movie,
            day: res.body.day,
            time: res.body.time,
            tickets: {
                _id: req.params._id,
                noOfAdult: req.body.noOfAdult,
                noOfChild: req.body.noOfChild,
                noOfConcession: req.body.noOfConcession
            },
            payment: {
                _id: req.params._id,
                cardName: res.body.cardName,
                cardNumber: res.body.cardNumber,
                cardDate: res.body.cardDate,
                cardCVC: res.body.cardCVC
            }

        };
        Booking.findByIdAndDelete(req.params._id);
        updatedBooking.save().then(() => res.json(updatedBooking)).catch((err) => res.status(400).json('Error: ' + err))
    }).catch((err) => res.json('Error: ' + err));
});


bookingRoute.route('/checkout/:_id').post((req, res) => {
    Booking.findById(req.params_id).then(res => {
        const checkoutBooking = {
            _id: req.params._id,
            firstName: req.params.firstName,
            lastName: res.body.lastName,
            movie: res.body.movie,
            day: res.body.day,
            time: res.body.time,
            tickets: {
                _id: req.params._id,
                noOfAdult: res.body.noOfAdult,
                noOfChild: res.body.noOfChild,
                noOfConcession: res.body.noOfConcession
            },
            payment: {
                _id: req.params._id,
                cardName: req.body.cardName,
                cardNumber: req.body.cardNumber,
                cardDate: req.body.cardDate,
                cardCVC: req.body.cardCVC
            }
        };
        Booking.findByIdAndDelete(req.params._id);
        checkoutBooking.save().then(() => res.json(checkoutBooking)).catch((err) => res.status(400).json('Error: ' + err))
    }).catch((err) => res.json('Error: ' + err));
});


bookingRoute.route('/delete/:_id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params._id)
    .then(() => res.json(null))
    .catch((err) => res.status(400).json('Error: ' + err))
});

module.exports = bookingRoute;
