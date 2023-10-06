const express = require("express")
const router = express.Router()
const TravelController = require("../controller/travelController")
const uploadImage = require("../middlewares/multerArray")
// http://localhost:4000/travels/getAllTravelsTobuy
router.get("/getAllTravelsTobuy", TravelController.getAllTravelsTobuy)

router.post("/sellTicket",uploadImage("documentosAvion"),TravelController.sellPlaneTicket)

router.post("/sellTicket",uploadImage("documentosTren"),TravelController.sellTrainTicket)


module.exports = router;