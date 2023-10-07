const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")
const uploadImage = require("../middlewares/multerArray")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)


 // http://localhost:4000/travels/getOneTravel/:travel_id
router.get("/getOneTravel/:travel_id", TravelController.getOneTravel); 
 


module.exports = router;