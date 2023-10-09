const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")
const uploadImage = require("../middlewares/multerArray")
const travelController = require("../controller/travelController")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)


 // http://localhost:4000/travels/getOneTravel/:travel_id
router.get("/getOneTravel/:travel_id", TravelController.getOneTravel); 

// http://localhost:4000/travels/getOneAirport/:city
router.get("/getOneAirport/city/:city", travelController.getOneAirport)

// http://localhost:4000/travels/sellTicket/sellPlaneTravel
router.post("/sellTicket/sellPlaneTravel", TravelController.sellOnePlaneTravel)



module.exports = router;