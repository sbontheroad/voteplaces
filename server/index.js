const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//for going live
//allows to resolve file paths easier
let path = require('path');

//for going live
let settings = require('./config/settings.js');

const PORT = process.env.PORT || 8080;

//import routes
let voteRouter = require('./routes/vote.js');
let markerRouter = require('./routes/maps.js');

//connects mongoose to database
mongoose.connect(settings.db);
//what was inside of connect("mongodb://localhost:27017/vote")

const app = express();

//puts json objects in req.body
app.use(bodyParser.urlencoded({extended: false}));

//allows cross site resource sharing
app.use(bodyParser.json());

//allows cross site sharing
app.use(cors());

//use routes
app.use("/votes", voteRouter);
app.use("/map", markerRouter);


//for going live
//setup static files
//__dirname shows you the path from root to where you are
//build will minify your javascript
app.use(express.static(path.resolve(__dirname, "..", "build")));


//for going live
//send index.html file when someone comes to /
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Starting this kickass server on ${PORT}`);
});
