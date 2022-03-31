const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  createdDate: { type: Date, default: Date.now }
});

schema.methods.validPassword = function (password) {
  return (password == this.password);
};


module.exports = mongoose.model('User', schema);