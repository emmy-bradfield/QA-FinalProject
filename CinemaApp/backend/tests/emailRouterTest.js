const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Email } = require('../models/emailModel');

chai.use(chaiHttp);
const app = require("../server");

describe(`Email`, () => {

    let testEmail = {
        name: "Joe",
        email: "joeBiden@hotmail.com",
        subject: "Pizza",
        message: "Hmm yes, I really like pizza"
    };

    it(`Should return posted email when / email is posted`, (done) => {

        chai.request(app)
            .post("/emails/post")
            .send(testEmail)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }

                expect(res).to.have.status(200);

                expect(res).to.not.be.null;
                Email.findById({ "_id": res.body }).then(email => {

                    expect(email).to.equal(testEmail);

                });

                done();

            });



    });

});