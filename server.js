const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const detail = require("./models/User");
const morgan = require('morgan');

mongoose.connect(db, {
        useNewUrlParser: true,
}).then((result) => {
        console.log("done");
}).catch((err) => {
        console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev')); // logger

app.get('/', (req, res) => res.json({
        message: "done"
}));

app.get("/addData", (req, res) => {
        detail.insertMany(
                [
                        { name: "Scooby" },
                        { age: 5 },
                        { breed: "Great Dane" },
                        { name: "Rambo" },
                        { age: 2 },
                        { breed: "Pitbull" },
                        { name: "Johny boy" },
                        { age: 3 },
                        { breed: "German Shephard" }
                ],
                (err, result) => {
                        if (err) {
                                res.send(err);
                        } else {
                                res.send(result);
                        }
                }
        );
});

let { env: { PORT } } = process;

app.listen(PORT, () =>
        console.log(`server running on port ${PORT}`)
);
