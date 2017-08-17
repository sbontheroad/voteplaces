let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let markerSchema = new Schema ({
  position: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  label: {
    type: String,
    required: true
  },
  defaultAnimation: {
    type: Number,
    default: 2
  }
})

module.exports = mongoose.model("markers", markerSchema);
