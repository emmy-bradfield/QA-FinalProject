const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const bookingSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    movie: {
        type: String,
        ref: "Movies",
    },
    day: {
        type: String,
        minlenght: "5",
    },
    time: {
        type: String,
    },
    noOfTickets: [{
        noOfAdult: Number,
        noOfChild: Number,
        noOfConcession: Number
    }],
    payment: [{
        cardName: String,
        cardNum: Number,
        cardExp: String,
        cardCVC: Number
    }]
});

const Booking = model('Booking', bookingSchema)
module.exports = {"Booking": Booking};