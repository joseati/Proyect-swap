const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)

// router.post("/sellTicket",travels.inputTicket)
module.exports = router;