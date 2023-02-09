const express = require("express");
const app = express();

const PORT = 3000
const HOST = 'LOCALHOST';

const bodyParser = require('body-parser');
const cors = require('cors');

const ads_on = 
  {"light": true, "intensity":1.0};

const ads_off =
  {"light": false, "intensity":0.1};

  const eventArray = 
  {
    eventArray:[{name:"myToastmasters", id: 1000}]
  };


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    console.log("responded on");
    return res.status(200).json(ads_on);
//    res.send(ads_on);
  
});

app.get('/off', (req, res) => {
    console.log("responded off");
    return res.status(200).json(ads_off);
    //res.send(ads_off);
});

app.get('/events', (req, res) => {
  console.log("responded off");
  return res.status(200).json(eventArray);
  //res.send(eventArray);
});

app.listen(PORT,HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});