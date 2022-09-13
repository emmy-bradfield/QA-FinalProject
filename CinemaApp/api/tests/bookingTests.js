const chai = require('chai');
const chaiHTTP = require("chai-http");
chai.use(chaiHTTP);
const server = require("../server");
const expect = chai.expect;
const Booking = require("../Models/bookingModel");
const {response} = require('express');

const EDIT = {
    __v: 0,
    _id: "EDIT",
    firstName: "John",
    lastName: "Doe",
    movie: "Cowsablanca",
    day: "16-Sep",
    time: "12:00",
    price: "10",
    tickets: [
        {
            noOfAdult: "3",
            noOfChild: "1",
            noOfConcession: "0"
        }
    ],
    payment: [
        {
            cardName: "Mr John Doe",
            cardNumber: "4921889745651322",
            cardDate: "0526",
            cardCVC: "707"
        }
    ]
}

const PAY = {
    __v: 0,
    _id: "PAY",
    firstName: "John",
    lastName: "Doe",
    movie: "Cowsablanca",
    day: "16-Sep",
    time: "12:00",
    price: "10",
    tickets: [
        {
            noOfAdult: "3",
            noOfChild: "1",
            noOfConcession: "0"
        }
    ],
    payment: [{}]
}

const TEST = {
    __v: 0,
    _id: "TEST",
    firstName: "John",
    lastName: "Doe",
    movie: "Cowsablanca",
    day: "16-Sep",
    time: "12:00",
    price: "10",
    tickets: [
        {
            noOfAdult: "3",
            noOfChild: "1",
            noOfConcession: "0"
        }
    ],
    payment: [
        {
            cardName: "Mr John Doe",
            cardNumber: "4921889745651322",
            cardDate: "0526",
            cardCVC: "707"
        }
    ]
};

const CREATED = {
    __v: 0,
    _id: "CREATED",
    day: "15-Sep",
    firstName: "Jane",
    lastName: "Doe",
    movie: "Beauty and the Beef",
    tickets: [
        {
            _id: "CREATED"
        }
    ],
    payment: [
        {
            _id: "CREATED"
        }
    ],
    time: "17:00"
};

const exPAY = {
    __v: 0,
    _id: "PAY",
    firstName: "John",
    lastName: "Doe",
    movie: "Cowsablanca",
    day: "16-Sep",
    time: "12:00",
    price: "10",
    payment: [
        {
            cardName: "Mr John Doe",
            cardNumber: "4921889745651322",
            cardDate: "0526",
            cardCVC: "707"
        }
    ],
    tickets: [
        {
            noOfAdult: "3",
            noOfChild: "1",
            noOfConcession: "0"
        }
    ]

}

const exEDIT = {
    _id: "EDIT",
    firstName: "John",
    lastName: "Doe",
    movie: "Cowsablanca",
    day: "16-Sep",
    time: "12:00",
    price: "10",
    tickets: [
        {
            noOfAdult: "2",
            noOfChild: "0",
            noOfConcession: "1"

        }
    ],
    payment: [
        {
            cardName: "Mr John Doe",
            cardNumber: "4921889745651322",
            cardDate: "0526",
            cardCVC: "707"
        }
    ],
    __v: 0
}

describe("CRUD testing", () => {
    beforeEach(() => {
        Booking.deleteMany({})
        Booking.create(TEST)
        Booking.create(PAY)
        Booking.create(EDIT)
    });

    it("Should create a movie", function () {
        chai.request(server).post("/bookings/post").send(CREATED).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.body).to.eql(CREATED);
        });
    });

    it("Should find all movies", function () {
        chai.request(server).get("/bookings/getAll").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.body).to.have.lengthOf(4);
            chai.expect(res.body[0]).to.eql(TEST);
        });
    });

    it("Should find a specific movie", function () {
        chai.request(server).get("/bookings/get/TEST").query("TEST").end(function (err, res) {
            expect(err).to.be.null;
            expect(res.body).to.eql(TEST);
        })
    });

    it("Should add payment details to a booking", function () {
        chai.request(server).post("/bookings/checkout/PAY").query("PAY").send({cardName: 'Mr John Doe', cardNumber: '4921889745651322', cardDate: '0526', cardCVC: '707'}).end((err, res) => {
            chai.expect(err).to.be.null;
            expect(res.body).to.eql(exPAY);

        })
    });

    it("Should update tickets for a booking", function () {
        chai.request(server).post("/bookings/update/EDIT").query("EDIT").send(exEDIT).end((err, res) => {
            expect(res.body).to.eql(exEDIT);
        });
    });

    it("Should delete a booking", function () {
        chai.request(server).delete("/bookings/delete/CREATED").query("CREATED").end((err, res) => {
            expect(res).to.have.status(404);
        })
    });

});
