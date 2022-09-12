const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const bookingRoute = require("./routes/bookingRouter");
app.use("/bookings", bookingRoute);
const emailRoute = require("./routes/emailRouter")
app.use("/emails", emailRoute);
const router = express.Router();

mongoose
     .connect("mongodb+srv://team-lemon:cheese.please1@qacinema.zx2mivg.mongodb.net/cinema", {useNewUrlParser: true})
     .then(() => console.log("MongoDB has been connected"))
     .catch((err) => console.log(err));

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});

app.use("/", router);

const server = app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
