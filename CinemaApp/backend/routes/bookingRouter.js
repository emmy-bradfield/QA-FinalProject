const express = require('express');
const bookingRoute = express.Router();

const {Booking} = require('../Models/bookingModel');

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
    const tickets = {noOfAdult, noOfChild, noOfConcession};
    const payment = {cardName, cardNumber, cardDate, cardCVC, dateTime};

    const newBooking = new Booking({
        firstName,
        lastName,
        movie,
        day,
        time,
        price,
        tickets,
        payment
    });

    newBooking.save().then(() => res.json("Booking Successful")).catch((err) => res.status(400).json('Error: ' + err))
})


// get all bookings
bookingRoute.get('/getAll', async (req, res) => {
    try {
            const bookings = Booking.find().then(bookings => res.json(bookings));
        } catch {
            res.status(404).send(
                {error: 'No bookings available'}
            );
        }}
);


// update booking by id
bookingRoute.put('/update/:id', async (req, res) => {
    try {
            const booking = Booking.findById(req.params.id)
            // const newBooking = {
            //     booking
            // }
            // Object.assign(booking, req.body).then(booking => booking.save().then(() => res.json("Booking updated")));

        } catch {
            res.status(404).send(
                {error: 'The booking could not be updated'}
            );
        }}
);

// delete booking

bookingRoute.delete('/delete/:id', async (req, res) => {
    try {
            const booking = await Booking.findById(req.params.id);
            await booking.deleteOne();
            res.status(201).send(booking);
        } catch {
            res.status(404).send(
                {error: 'the booking could not be deleted'}
            );
        }}
);

// get booking by name
bookingRoute.get('/getByName/:name', async (req, res) => {
    try {

            const booking = Booking.findOne({"name": req.params.name}).then(booking => res.json(booking));
        } catch {
            res.status(404).send(
                {error: 'no bookings'}
            );
        }}
);


module.exports = bookingRoute;
