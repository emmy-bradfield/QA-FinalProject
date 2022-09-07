const express = require('express');
const router = express.Router();

const Booking = require('../Models/bookings');

//create movie using form
router.post('/post', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        console.log(booking);
        booking.save();
        res.status(201).send(booking);
    } catch {
        res.status(404).send({ error: 'The request could not be completed' });
    }
});

//get all bookings
router.get('/getAll', async (req, res) => {
    try {
        const bookings = Booking.find()
            // .populate({
            //     path: 'movieID',
            //     select: 'title imageURL'
            // });
            .then(bookings => res.json(bookings));
        //res.status(201).send(bookings);
    } catch {
        res.status(404).send({ error: 'No bookings available' });
    }
});


//update booking by id
router.put('/update/:id', async (req, res) => {
    try {
        const booking =  Booking.findById(req.params.id)
        // const newBooking = {
        //     booking
        // }
       //Object.assign(booking, req.body)

         .then(booking => booking.save()
         .then(()=> res.json("Booking updated")));
        
    } catch {
        res.status(404).send({ error: 'The booking could not be updated' });
    }
});

//delete booking
router.delete('/delete/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        // const payment = await Payment.findById(booking.paymentID);
        // await payment.deleteOne();
        await booking.deleteOne();
        res.status(201).send(booking);
    } catch {
        res.status(404).send({ error: 'the booking could not be deleted' });
    }
});

//get booking by name
router.get('/getByName/:name', async (req, res) => {
    try {

      const booking = Booking.findOne({"name" : req.params.name})
       // const booking = Booking.find({ name: { $eq: req.params.name } })
            // .populate({
            //     path: 'movieID',
            //     select: 'title imageURL dateTime'
            // });
        //res.status(201).send(booking);
        .then(booking => res.json(booking));
    } catch {
        res.status(404).send({ error: 'no bookings' });
    }
});


module.exports = router;