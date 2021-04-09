const normalize = require('normalize-mongoose');
const { Schema, model } = require('mongoose');

const citizenSchema = new Schema({
  id: Number,
  name: String,
  city_id: Number,
  city: Object,
});

citizenSchema.plugin(normalize);

module.exports = model('Citizen', citizenSchema);
