const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics")
.then(() => {
    return console.log("database connected")
})
.catch(e => {
    return console.log("Couldn't connect to db")
})