
const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: String,
  address: String,
  distance: String
});
module.exports = mongoose.model('Cinema', cinemaSchema);
