const express = require("express");
const Hotel = require("../models/Hotel");
const router = express.Router();

//create hotel
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
