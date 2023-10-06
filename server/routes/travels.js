const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)

module.exports = router;