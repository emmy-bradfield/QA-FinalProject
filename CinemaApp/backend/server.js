const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const paymentRoute = require("./routes/paymentRoute.js");
app.use("/payments",paymentRoute);
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/cinema_payments',{useNewUrlParser : true},
(error) => {
    if (error) {
        console.log("Can't connect to MongoDB");
    } else {
        console.log("Connected to database");
    }
});

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});

app.use("/", router);

const server = app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
