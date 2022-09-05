const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let /*Name-Of-DB-Model*/ = new Schema({
    _id: {
        type: Number
    },
    /*Document Attributes:*/
});

module.exports = mongoose.model("Name-Of-DB-Model", /*Name-Of-DB-Model*/);
