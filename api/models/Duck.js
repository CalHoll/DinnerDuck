
const mongoose = require('mongoose');

const DuckSchema = new mongoose.Schema({
  whenFed: {
    type: String,
    default: ''
  },
  typeFed: {
    type: String,
    default: ''
  },
  whereFed: {
    type: String,
    default: ''
  },
  numberFed: {
    type: String,
    default: ''
  },
  whatFed: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('Duck', DuckSchema);
