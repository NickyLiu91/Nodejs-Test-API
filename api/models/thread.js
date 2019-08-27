const mongoose = require('mongoose');

const threadSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  text: String
});

module.exports = mongoose.model('Account', threadSchema);
