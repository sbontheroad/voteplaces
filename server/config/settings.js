module.exports = {
  //pass in entire string of site so you can't be hacked via local host
  //take the endpoint from the mongoose connect in the server index
  db: "mongodb://localhost/vote"
}
