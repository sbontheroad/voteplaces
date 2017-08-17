let express = require('express');
let markerRouter = express.Router();

//import models
let Marker = require('../models/maps.js');

markerRouter.get("/", (req, res) => {
  Marker.find({}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within what seemed like an awesome server", err});
    } else {
      res.status(200).send({"message":"SUCCESS markers returned", data});
    }
  });
});

markerRouter.post("/", (req, res) => {
  let newMarker = new Marker(req.body);
  newMarker.save((err, data) => {
      if(err) {
        res.status(500).send({"message":"ERROR within what seemed like an awesome server", err});
      } else {
        res.status(201).send({"message":"SUCCESS marker added", data});
      }
  });
});

markerRouter.put("/:id", (req, res) => {
  Marker.findOneAndUpdate({"_id": req.params.id}, {$set: req.body}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within what seemed like an awesome server", err});
    } else {
      res.status(200).send({"message":"SUCCESS marker updated", data});
    }
  });
});

markerRouter.delete("/:id", (req, res) => {
  Marker.findByIdAndRemove({"_id":req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within what seemed like an awesome server", err});
    } else {
      res.status(200).send({"message":"SUCCESS marker removed", data});
    }
  });
});

module.exports = markerRouter;
