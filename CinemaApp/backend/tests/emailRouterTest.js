const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Email} = require('../models/emailModel');
chai.use(chaiHttp);
const app = require("../index");

describe("Email Tests", () => { // TEST DATA
    let id;

    let testEmail = {
        name: "Joseph M",
        email: "joseph.mama@gmail.com",
        subject: "Sexy Bees",
        message: "Dear sir/madam\n\rI was recently appalled to learn of the lack of sexy bees on your website. Please amend imediately.\nTepid Regards,\n\rMr Joseph Mama"
    };

    let newEmail = {
        name: "Joseph M",
        email: "joseph.mama@gmail.com",
        subject: "RE: Sexy Bees",
        message: "Dear sir/madam\n\rI would like to apologise for my earlier email; on further inspection, your bees are sufficiently sexy.\n\rHot Regards,\n\rMr Joseph Mama"
    };

    // CREATE
    it("Should return posted email when /email is posted", (done) => {
        chai.request(app).post("/emails/post").send(testEmail).end((err, res) => {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            };
            expect(res).to.have.status(200);
            expect(res).not.to.be.null;
            Email.findById({"_id": res.body}).then(email => {
                expect(email).to.equal(testEmail);
            });
            done();
        });
    });

    // READ
    it("Should return all bookings, including the one posted", (done) => {
        chai.request(app).post("/emails/post").send(newEmail).end((err, res) => {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            };
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            Email.find().then(emails => {
                expect(emails).not.to.have.lengthOf(0);
                expect(emails).to.include(newEmail);
            });
            done();
        });
    });

});
