const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());
let /*Name-of-DB-Model*/ = require("./model.js");
const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/<name-of-database>", {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});

app.use("/", router);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

// router.route("/<get-all-pathway>").get(function (req, res) {
//     <Name-of-DB-Model>.find({}, function (err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });