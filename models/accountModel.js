const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  password: String
});

module.exports = mongoose.model('Account', accountSchema);
