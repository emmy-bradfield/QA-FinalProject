const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const bookingSchema = new Schema({
    firstName: String,
    lastName: String,
    movie: String,
    day: String,
    time: String,
    tickets: [
        {
            noOfAdult: String,
            noOfChild: String,
            noOfConcession: String
        }
    ],
    payment: [
        {
            cardName: String,
            cardNumber: String,
            cardDate: String,
            cardCVC: String
        }
    ]
});

const Booking = model('Booking', bookingSchema)
module.exports = {
    "Booking": Booking
};
