const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

// const {cost} = require("../Models/bookingModel");
chai.use(chaiHttp);
const app = require("../server");


describe(`Booking`, () => {


    //test data
    let bookingID;
   // let bookingName = "Albert E";

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
            .post("/post")
            .send(testBooking)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                bookingID = res.body._id;
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(testBooking));
                expect(res.body.firstName).to.equal(testBooking.firstName);
                expect(res.body.lastName).to.equal(testBooking.lastName);
                expect(res.body.movie).to.equal(testBooking.movie);
                expect(res.body.day).to.equal(testBooking.day);
                expect(res.body.time).to.equal(testBooking.time);
                expect(res.body.price).to.equal(testBooking.price);
                expect(res.body.tickets.noOfAdult).to.equal(testBooking.tickets.noOfAdult);
                expect(res.body.tickets.noOfChild).to.equal(testBooking.tickets.noOfChild);
                expect(res.body.tickets.noOfConcession).to.equal(testBooking.tickets.noOfConcession);
                expect(res.body.payment.cardName).to.equal(testBooking.payment.cardName);
                expect(res.body.payment.cardNumber).to.equal(testBooking.payment.cardNumber);
                expect(res.body.payment.cardDate).to.equal(testBooking.payment.cardDate);
                expect(res.body.payment.cardCVC).to.equal(testBooking.payment.cardCVC);
                expect(res.body.payment.dateTime).to.equal(testBooking.payment.dateTime);
                done();
            });

    });
});


