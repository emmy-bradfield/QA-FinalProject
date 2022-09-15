const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Booking} = require('../models/bookingModel');
chai.use(chaiHttp);
const app = require("../index");


describe(`Booking Tests`, () => {
    //SETUP
    before((done) => {
        Booking.deleteMany({}, (err, res) => {
            done();
        })
    });
    // after((done) => {
    //     Booking.deleteMany({}, (err, res) => {
    //         done();
    //     })
    // });
    
    // TEST DATA
    let bookingID;

    let testBooking = {
        _id: "test2",
        firstName: "Joe",
        lastName: "M",
        movie: "Cowsablanca",
        day: "16-Sep",
        time: "20:00",
        price: "10",
        tickets: {
            noOfAdult: "1",
            noOfChild: "0",
            noOfConcession: "0"
        }
    };

    const newBooking ={
        _id: "test",
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

    const update ={
        noOfAdult: "1",
        noOfChild: "2",
        noOfConcession: "0"
    }

    const updatedBooking = {
        _id: "test",
        firstName: "Joe",
        lastName: "Mama",
        movie: "Cowsablanca",
        day: "16-Sep",
        time: "20:00",
        price: "20",
        tickets: {
            noOfAdult: "1",
            noOfChild: "2",
            noOfConcession: "0"
        },
        payment: {
            cardName: "Mr J. Mama",
            cardNumber: "4200696942006969",
            cardDate: "1227",
            cardCVC: "123",
            dateTime: "2022-09-15"
        }
    }

    const cardDetails ={
        cardName: "Mr J. Mama",
        cardNumber: "4200696942006969",
        cardDate: "1227",
        cardCVC: "123",
        dateTime: "2022-09-15"
    }

    const paidBooking ={
        _id: "test2",
        firstName: "Joe",
        lastName: "M",
        movie: "Cowsablanca",
        day: "16-Sep",
        time: "20:00",
        price: "10",
        tickets: {
            noOfAdult: "1",
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
    }

    const uniqueBooking={
        _id: "UNIQUE-ID-123",
        firstName: "Joe",
        lastName: "M",
        movie: "Cowsablanca",
        day: "16-Sep",
        time: "20:00",
        price: "10",
        tickets: {
            noOfAdult: "1",
            noOfChild: "0",
            noOfConcession: "0"
        }
    };

    // CREATE
    it(`Should return posted booking when /booking is posted`, (done) => {
        chai.request(app).post("/bookings/post").send(testBooking).end((err, res) => {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Booking.findById({"_id": res.body}).then(booking => {
                expect(booking).to.equal(testBooking);

            });
            done();
        });
    });

    // READ
    it('Should return all bookings, including the one posted', (done) => {
        chai.request(app).get("/bookings/getAll").end((err, res)=> {
            if(err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Booking.find().then(bookings => {
                expect(bookings).to.have.lengthOf(1);
                expect(bookings).to.include(testBooking);
            });
            done();
        });
    });

    it("Should return the specific forum requested", (done) => {
        chai.request(app).get(`/forum/get/test2`).query("test2").end((err, res) => {
            if(err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Booking.findById({"_id":res.body}).then(booking => {
                expect(booking).to.equal(testBooking);
            });
            done();
        });
    });

    // UPDATE
    it("Should return the updated booking", (done) => {
        chai.request(app).post(`/bookings/update/test`).query("test").send(update).end((err, res) => {
            if(err){
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.not.be.null;
            Booking.findById({"_id":res.body}).then(booking => {
                expect(booking).to.equal(updatedBooking);
            });
            done();
        });
    });

    it("Should return the checked-out booking", (done) => {
        chai.request(app).post("/bookings/checkout/test2").query("test2").send(cardDetails).end((err, res) => {
            if(err){
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.not.be.null;
            Booking.findById({"_id": res.body}).then(booking => {
                expect(booking).to.equal(paidBooking);
            });
            done();
        });
    });

    // DELETE

    it('Should delete a booking', (done) => {
        chai.request(app).delete(`/bookings/delete/UNIQUE-ID-123`).query("UNIQUE-ID-123").end((err, res)=> {
            if(err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Booking.findById({"_id": res.body}).then(booking => {
                expect(booking).to.be.null;
            });
            done();
        });
    });

 
});
