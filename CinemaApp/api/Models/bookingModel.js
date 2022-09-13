const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookingSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    movie: String,
    day: String,
    time: String,
    price: String,
    tickets: [
        {
            _id: String,
            noOfAdult: String,
            noOfChild: String,
            noOfConcession: String
        }
    ],
    payment: [
        {
            _id: String,
            cardName: String,
            cardNumber: String,
            cardDate: String,
            cardCVC: String,
            dateTime: String
        },

    ]
});

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
