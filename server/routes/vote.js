let express = require('express');
let voteRouter = express.Router();
let Vote = require("../models/vote.js");

voteRouter.get("/", (req, res) => {
  Vote.find(req.query, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null){
      res.status(404).send({"message":"ERROR data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS data returned", data});
    }
  });
});

voteRouter.get("/:id", (req, res) => {
  Vote.findOne({"_id": req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"ERROR data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS data returned", data});
    }
  });
});

voteRouter.post("/", (req, res) => {
  let newVote = new Vote(req.body);
  newVote.save((err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(200).send({"message":"SUCCESS data posted", data});
    }
  });
});

voteRouter.delete("/:id", (req, res) => {
  Vote.findByIdAndRemove(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"ERROR data not found", err});
    } else {
      res.status(200).send({"message": "SUCCESS, item deleted"});
    }
  });
});

voteRouter.put("/:id", (req, res) => {
  Vote.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});

voteRouter.put("/voteUp/:id", (req, res) => {
  Vote.findOne({"_id":req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR on server", err});
    } else if (data === null) {
      res.status(404).send({"message":`Item with id ${req.params.id} was not found`, err});
    } else {
      data.voteUp += 1;
      data.save((err, data) => {
        if(err) {
          res.status(500).send({"message":"ERROR voteUp on server", err});
        } else {
          res.status(200).send({"message":`Item with id ${req.params.id} was updated`, data});
        };
      });
    };
  });
});

voteRouter.put("/voteDown/:id", (req, res) => {
  Vote.findOne({"_id":req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR on server", err});
    } else if (data === null) {
      res.status(404).send({"message":`ERROR id ${req.params.id} not found`, err});
    } else {
      data.voteDown += 1;
      data.save();
      if (err) {
        res.status(500).send({"message":"ERROR voteDown on server", err});
      } else {
        res.status(200).send({"message":`Item with id ${req.params.id} was updated`, data});
      };
    };
  });
});

voteRouter.put("/comment/:id", (req, res) => {
  Vote.findOne({"_id":req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":`Item with id ${req.params.id} not found`, err})
    } else {
      data.comments.push(req.body.comment);
      data.save((err, data) => {
        if (err) {
          res.status(500).send({"message":"ERROR voteDown on server", err});
        } else {
          res.status(200).send({"message":`SUCCESS comment for ${req.params.id} was posted`, data});
        }
      });
    }
  });
});

module.exports = voteRouter;
