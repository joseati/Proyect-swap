const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)

 // http://localhost:4000/travels/OneTravel/:travel_id
router.get("/getOneTravel/:travel_id", TravelController.getOneTravel); 
 
module.exports = router;