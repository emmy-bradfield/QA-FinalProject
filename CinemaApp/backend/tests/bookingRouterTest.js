const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Booking} = require('../models/bookingModel');

chai.use(chaiHttp);
const app = require("../server");


describe(`Booking`, () => {


    //test data
    let bookingID;
 

    let testBooking = {
        firstName: "joe",
        lastName: "M",
        movie: "cowsablanca",
        day: "Tuesday",
        time: "20:00",
        price: "10",
        tickets: {
            noOfAdult: 1,
            noOfChild: 0,
            noOfConcession: 0
        },
        payment: {
            cardName: "teri",
            cardNumber: "42069",
            cardDate: "12/27",
            cardCVC: "123",
            dateTime: "12/12/12"
        }
    };

    const updateBooking = {
        firstName: "Joe",
        lastName: "Mama",
        movie: "cowsablanca",
        day: "Tuesday",
        time: "20:00",
        price: "10",
        tickets: {
            noOfAdult: 1,
            noOfChild: 0,
            noOfConcession: 0
        },
        payment: {
            cardName: "teri",
            cardNumber: "42069",
            cardDate: "12/27",
            cardCVC: "123",
            dateTime: "12/12/12"
        }
    }

    it(`Should return posted booking when /booking is posted`, (done) => {
        
        
        //mock request
        chai.request(app)
            .post("/bookings/post")
            .send(testBooking)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
        
                expect(res).to.have.status(200);

                expect(res).to.not.be.null;
                Booking.findById({"_id":res.body}).then(booking => {

                    expect(booking).to.equal(testBooking);

                });

                done();
            });

    });
});


