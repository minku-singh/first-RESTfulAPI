const express = require("express");
require("../src/db/conn.js");
const router = require("./routers/men.js");

const app = express();
const port = process.env.PORT || 3000;

//middleware for data format sent through postman
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.send(`<h1>HOME PAGE</h1> visit our API <a href = "/mens">/mens</a>`)
})

//LISTEN TO THE SERVER
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});