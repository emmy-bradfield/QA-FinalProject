"use strict";

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const paymentModel = new Schema({
    // bookingID : Number,
    firstName : String,
    lastName : String,
    cardNumber : String,
    expiryDate : String,
    cvc : Number,
    // datePaid : {
    //     type: Date,
    //     default: Date.now()
    // },
    // price : Number
});

const Payment = model('Payment', paymentModel);
module.exports = {'Payment' : Payment};
