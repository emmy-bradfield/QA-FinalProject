const express = require('express');
const bookingRoute = express.Router();

const {Booking} = require('../Models/bookingModel');

//create movie using form
bookingRoute.route('/post').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const movie = req.body.movie;
    const day = req.body.day;
    const time = req.body.time;
    const adult = req.body.noOfAdult;
    const child = req.body.noOfChild;
    const concession = req.noOfConcession;
    const cardName = req.body.cardName;
    const cardNum = req.body.cardNum;
    const cardExp = req.body.cardExp;
    const cardCVC = req.body.cardCVC;

    const newBooking = new Booking({
        firstName,
        lastName,
        movie,
        day,
        time,
        adult,
        child,
        concession,
        cardName,
        cardNum,
        cardExp,
        cardCVC
    });

    newBooking.save()
    .then(() => res.json("Booking Successful"))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// bookingRoute.post('/post'(req, res) => {
//     try {
//         const newBooking = new Booking(req.body);
//         console.log(newBooking);
//         newBooking.save();
//         res.status(201).send(newBooking);
//     } catch {
//         res.status(404).send({ error: 'The request could not be completed' });
//     }
// });

//get all bookings
bookingRoute.get('/getAll', async (req, res) => {
    try {
        const bookings = Booking.find()
            .then(bookings => res.json(bookings));
    } catch {
        res.status(404).send({ error: 'No bookings available' });
    }
});


//update booking by id
bookingRoute.put('/update/:id', async (req, res) => {
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

bookingRoute.delete('/delete/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        await booking.deleteOne();
        res.status(201).send(booking);
    } catch {
        res.status(404).send({ error: 'the booking could not be deleted' });
    }
});

//get booking by name
bookingRoute.get('/getByName/:name', async (req, res) => {
    try {

      const booking = Booking.findOne({"name" : req.params.name})
        .then(booking => res.json(booking));
    } catch {
        res.status(404).send({ error: 'no bookings' });
    }
});


module.exports = bookingRoute;