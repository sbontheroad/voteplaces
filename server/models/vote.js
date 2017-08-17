let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let voteSchema = new Schema ({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: String,
  voteUp: {
    type: Number,
    default: 0
  },
  voteDown: {
    type: Number,
    default: 0
  },
  comments: [String]
});

module.exports = mongoose.model('votelist', voteSchema);
