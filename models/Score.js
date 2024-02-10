const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  userid: {
    type: Number,
  
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
