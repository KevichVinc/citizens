const express = require('express');
const Citizen = require('../models/citizen');
const City = require('../models/city');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const citizens = await Citizen.find({}, { _id: 0 });
    const cities = await City.find({}, { _id: 0 });
    res.json({ citizens, cities });
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
