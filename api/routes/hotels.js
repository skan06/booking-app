const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

//create hotel
router.post("/", verifyAdmin, createHotel);

//update hotel
router.put("/:id", verifyAdmin, updateHotel);

//delete hotel
router.delete("/:id", verifyAdmin, deleteHotel);

//get hotel
router.get("/:id", getHotel);

//get all hotels
router.get("/", getHotels);

module.exports = router;
