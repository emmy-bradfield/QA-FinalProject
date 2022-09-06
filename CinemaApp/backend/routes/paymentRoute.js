"use strict";

const paymentRouter = require('express').Router();
const { Payment } = require('../models/paymentModel');

paymentRouter.route("/readAll").get((req,res) => {
    Payment.find()
    .then(payments => res.json(payments))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

paymentRouter.route("/getOne/:lastName").get((req,res) => {
    Payment.findOne({"lastName" : req.params.lastName})
    .then(payments => res.json(payments))
    .catch((err) => res.status(400).json(`Error:` + err));
});

paymentRouter.route('/post').post((req, res) => {
    const bookingID = req.body.bookingID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const cardNumber = Number(req.body.cardNumber);
    const expiryDate = Number(req.body.expiryDate);
    const cvc = Number(req.body.cvc);
    const datePaid = new Date();
    const price = Number(req.body.price);
  
    const newPayment = new Payment({
      bookingID,
      firstName,
      lastName,
      cardNumber,
      expiryDate,
      cvc,
      datePaid,
      price
    });
  
    newPayment.save()
    .then(() => res.json('Payment Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

paymentRouter.route('/update/:id').post((req, res) => {
    Payment.findById(req.params.id)
      .then(payment => {
        payment.bookingID = req.body.bookingID;
        payment.firstName = req.body.firstName;
        payment.lastName = req.body.lastName;
        payment.cardNumber = Number(req.body.cardNumber);
        payment.expiryDate = Number(req.body.expiryDate);
        payment.cvc = Number(req.body.cvc);
        payment.datePaid = new Date();
        payment.price = Number(req.body.price);

        payment.save()
          .then(() => res.json('Payment updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

paymentRouter.route('/delete/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Payment deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = paymentRouter;
