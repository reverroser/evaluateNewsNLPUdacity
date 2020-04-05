const path = require('path')
const aylien = require("aylien_textapi");
const bodyParser = require("body-parser");
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY
});

const app = express();

function launchWebsite(req, res) {
    res.sendFile('dist/index.html')
}

function analizeDocument(req, res) {
    const { document } = req.body
    textapi.sentiment({
        mode: 'document',
        text: document
    }, function (error, response) {
        if (error === null) {
            res.send(response);
        } else {
            res.send(error);
        }
    });
}

// Initialize the main project folder
app.use(express.static('dist'))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this opens the web client at http://localhost:8080/
app.get('/', launchWebsite)

// this makes a request to the aylien api to get back the analisis of the document
app.post('/analize', analizeDocument)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})