const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")
const uploadImage = require("../middlewares/multerArray")
const travelController = require("../controller/travelController")

// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)


 // http://localhost:4000/travels/getOneTravel/:travel_id
router.get("/getOneTravel/:travel_id", TravelController.getOneTravel); 

// http://localhost:4000/travels/getOneAirport/citi/:city
router.get("/getOneAirport/city/:city", travelController.getOneAirport)

// http://localhost:4000/travels/sellTicket/sellPlaneTravel
router.post("/sellTicket/sellPlaneTravel", TravelController.sellOnePlaneTravel)

// http://localhost:4000/travels/sellTicket/sellTrainTravel
router.post("/sellTicket/sellTrainTravel", TravelController.sellOneTrainTravel)

// http://localhost:4000/travels/getOneTrainStation/citi/:city
router.get("/getOneTrainStation/city/:city", travelController.getOneTrainStation)


module.exports = router;