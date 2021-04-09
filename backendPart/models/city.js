const normalize = require('normalize-mongoose');
const { Schema, model } = require('mongoose');

const citySchema = new Schema({
  id: Number,
  name: String,
  data: String,
});

citySchema.plugin(normalize);

module.exports = model('City', citySchema);
