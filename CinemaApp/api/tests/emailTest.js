const chai = require('chai');
const chaiHTTP = require("chai-http");
chai.use(chaiHTTP);
const server = require("../server");
const expect = chai.expect;
const Email = require("../Models/emailModel");
const {response} = require('express');

describe("Email Router Tests", () => {
    beforeEach(() => {
        Email.deleteMany({});
    });

    it("Should post new email", function(){
        const newEmail ={ 
            name: "Mr Test",
            email: "emily.says.beep.boop@outlook.com",
            subject: "Testing your code",
            message: "Good evening, fine sir! I am just writing to test your most excellent code on your most excellent website! Ta-ra!"
        }
        chai.request(server).post("/emails/post").send(newEmail).end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.eql(newEmail);
        })
    })
})