const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const detail = require("./models/User");


mongoose.connect(db, {
        useNewUrlParser: true,
}).then((result) => {
        console.log("done");
}).catch((err) => {
        console.log(err);
});

app.get('/', (req, res) => res.send('hello pradip welcome to my page '));

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
                function (err, result) {
                        if (err) {
                                res.send(err);
                        } else {
                                res.send(result);
                        }
                }
        );
});



const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`server running on port ${port}`));
