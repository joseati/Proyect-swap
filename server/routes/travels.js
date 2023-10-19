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


// http://localhost:4000/travels/oneUserSellTravels/:user_id
router.get("/oneUserSellTravels/:user_id", TravelController.getTravelsToSellOneUser)

// http://localhost:4000/travels/oneUserBoughtTravels/:user_id
router.get("/oneUserBoughtTravels/:user_id", TravelController.getTravelsBoughtOneUser)

// http://localhost:4000/travels/getLikes/:user_id
router.get("/getLikes/:user_id", TravelController.getlikes)

// http://localhost:4000/travels/sellTicket/sellTrainTravel
router.post("/sellTicket/sellTrainTravel", TravelController.sellOneTrainTravel)

// http://localhost:4000/travels/getOneTrainStation/citi/:city
router.get("/getOneTrainStation/city/:city", travelController.getOneTrainStation)

//Eliminar un viaje
// http://localhost:4000/travels/deleteOneTravel/:travel_id
router.put("/deleteOneTravel/:travel_id", TravelController.deleteOneTravel)

// http://localhost:4000/travels/filterAllTravelsTobuy
router.post("/filterAllTravelsTobuy", TravelController.filterAllTravelsTobuy)

// http://localhost:4000/travels/filterAllPlaneTobuy
router.get("/filterAllPlaneTobuy/:filtersTravel", TravelController.filterAllPlanesTobuy)

// http://localhost:4000/travels/filterTrainsTobuy
router.get("/filterTrainsTobuy/:filtersTravel", TravelController.filterTrainsToBuy)

// http://localhost:4000/travels/buyOneTravel/:travel_id
router.post("/buyOneTravel/:travel_id", TravelController.buyOneTravel)

router.put("/editOneTravel", TravelController.editOneTravel)
module.exports = router;