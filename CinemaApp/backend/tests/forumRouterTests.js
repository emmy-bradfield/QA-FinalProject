const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Forum} = require('../models/forumModel');
chai.use(chaiHttp);
const app = require("../index");

describe("Forum Tests", () => { 
    
    // TEST DATA
    let forumID;

    let testForum = {
        name: "Joe M",
        movieName: "Moonsters Inc",
        rating: "4",
        message: "Good movie, very funny, just a shame the kid was so ugly",
        replies: []
    };

    let newForum = {
        name: "A. Pearson",
        movieName: "Dairy Movie",
        rating: "3",
        message: "Good movie, very funny, just a shame the kid was so ugly",
        replies: []
    };

    // CREATE
    it("Should return posted forum when /forum is posted", (done) => {
        chai.request(app).post("/forum/post").send(testForum).end((err, res) => {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).not.to.be.null;
            Forum.findById({"_id": res.body}).then(forum => {
                expect(forum).to.equal(testForum);
            });
            done();
        });
    });

    // READ
    it("Should return all forums, including the one posted", (done) => {
        chai.request(app).post("/forum/post").send(newForum).end((err, res) => {
            if (err) {
                console.log(`Something went wrong: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).not.to.be.null;
            Forum.find().then(forums => {
                expect(forums).not.to.have.lengthOf(0);
                expect(forums).to.include(newForum);
            });
            done();
        });
    });



})
