const chai = require('chai');
const chaiHTTP = require("chai-http");
chai.use(chaiHTTP);
const server = require("../server");
const expect = chai.expect;
const Forum = require("../Models/forumModel");
const {response} = require('express');

describe("Forum Router Tests", () => {
    const SEND = {
        name: "Sue Donym",
        movieName:"The Cows",
        rating: "4",
        message:"Needs more cows"
    }

    const READ = {
        name: "Bobby",
        movieName: "Moonsters Inc",
        rating: "2",
        message: "It was an amazing moovie!"
    }

    beforeEach(() => {
        Forum.deleteMany([]);
        Forum.create(READ)
    });

    it("Should post a new forum message", function(){
        chai.request(server).post("/forum/post").send({
            name: "Sue Donym",
            movieName:"The Cows",
            rating: "4",
            message:"Needs more cows"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.eql(SEND);
        })
    });

    it("Should return all forum messages", function(){
        chai.request(server).get("/forum/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.lengthOf(2);
            expect(res.body[0]).to.eql(READ);
        })
    })
});