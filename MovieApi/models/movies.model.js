const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  title: { type: String },
  rank: { type: Number },
  id: { type: String },
  createdDate: { type: Date, default: Date.now },
  users: { type: Array },
  genres: { type: Array },
});


module.exports = mongoose.model('Movie', schema);
