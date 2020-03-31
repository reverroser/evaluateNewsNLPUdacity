const path = require('path')
const aylien = require("aylien_textapi");
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config()

// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

// this opens the web client at http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/analize', function (req, res) {
    console.log(req);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})