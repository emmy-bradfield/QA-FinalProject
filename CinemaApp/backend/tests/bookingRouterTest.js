const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Booking} = require('../models/bookingModel');

chai.use(chaiHttp);
const app = require("../server");


describe(`Booking`, () => {

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

    const newBooking ={
        firstName: "Joe",
        lastName: "Mama",
        movie: "Cowsablanca",
        day: "17-Sep",
        time: "20:00",
        price: "100",
        tickets: {
            noOfAdult: "10",
            noOfChild: "0",
            noOfConcession: "0"
        },
        payment: {
            cardName: "Mr J. Mama",
            cardNumber: "4200696942006969",
            cardDate: "1227",
            cardCVC: "123",
            dateTime: "2022-09-15"
        }
    };

//  CREATE
    it(`Should return posted booking when /booking is posted`, (done) => {
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

    // READ
    it('Should return all bookings, including the one posted', (done) => {
        chai.request(app)
        .get("/bookings/getAll")
        .send(newBooking)
        .end((err, res)=> {
            if(err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Booking.find().then(bookings => {
                expect(bookings).not.to.have.lengthOf(0);
                expect(bookings).to.include(newBooking);
            });
            done();
        });
    });

    // DELETE

    it('Should delete a booking', (done) => {
        chai.request(app)
        .delete(`/bookings/delete/${"_id"}`)
        .send(testBooking)
        .end((err, res)=> {
            if(err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);

            expect(res).to.not.be.null;
            Booking.findByIdAndDelete({"_id":res.body}).then(bookings => {
                expect(bookings).to.have.lengthOf(0);
            });
            done();
        });
    });



});


