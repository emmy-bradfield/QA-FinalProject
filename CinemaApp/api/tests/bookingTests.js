const mocha = require('mocha');
const chai = require('chai');
const chaiHTTP = require("chai-http");
chai.use(chaiHTTP);

const server = require("../server");
const Booking = require("../Models/bookingModel")

const createdBooking = {
    __v: 0,
    _id: "MOCHA-TEST-2",
    day: "15-Sep",
    firstName: "Jane",
    lastName: "Doe",
    movie: "Beauty and the Beef",
    payment: [
        {
            _id: "MOCHA-TEST-2"
        }
    ],
    tickets: [
        {
            _id: "MOCHA-TEST-2",
            noOfAdult: "2",
            noOfChild: "0",
            noOfConcession: "0",
        }
    ],
    time: "17:00"
}

describe("CRUD Tests", () => {
    beforeEach((done) => {
        Booking.deleteMany({}).then(() => {
            Booking.create({
                _id: "MOCHA-TEST-1",
                firstName: "John",
                lastName: "Doe",
                movie: "Cowsablanca",
                day: "16-Sep",
                time: "12:00",
                price: "10",
                tickets: [
                    {
                        _id: "MOCHA-TEST-1",
                        noOfAdult: "1",
                        noOfChild: "0",
                        noOfConcession: "0"
                    }
                ],
                payment: [
                    {
                        _id: "MOCHA-TEST-1",
                        cardName: "Mr John Doe",
                        cardNumber: "4921492149211234",
                        cardDate: "0510",
                        cardCVC: "123",
                        dateTime: "2022-09-13"
                    }
                ]
            }).then((result) => {
                done();
            }).catch((err) => console.error(err));
        }).catch((err) => console.error(err));
    });

    it("Should create a movie", (done) => {
        const requestBody = {
            __v: 0,
            _id: "MOCHA-TEST-2",
            day: "15-Sep",
            firstName: "Jane",
            lastName: "Doe",
            movie: "Beauty and the Beef",
            noOfAdult: "2",
            noOfChild: "0",
            noOfConcession: "0",
            time: "17:00"

        };
        chai.request(server).post("/bookings/post").send(requestBody).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.body).to.eql(createdBooking);
            done();
        });
    });

    it("Should find all movies", (done) => {
        chai.request(server).get("/bookings/getAll").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.body).to.have.lengthOf(1);
            chai.expect(res.body[0]).to.eql({
                __v: 0,
                _id: "MOCHA-TEST-1",
                firstName: "John",
                lastName: "Doe",
                movie: "Cowsablanca",
                day: "16-Sep",
                time: "12:00",
                price: "10",
                tickets: [
                    {
                        _id: "MOCHA-TEST-1",
                        noOfAdult: "1",
                        noOfChild: "0",
                        noOfConcession: "0"
                    }
                ],
                payment: [
                    {
                        _id: "MOCHA-TEST-1",
                        cardName: "Mr John Doe",
                        cardNumber: "4921492149211234",
                        cardDate: "0510",
                        cardCVC: "123",
                        dateTime: "2022-09-13"
                    }
                ]
            });
            return done();
        });
    });
});
