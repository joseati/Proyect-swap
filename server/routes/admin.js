var express = require("express");
var router = express.Router();
const AdminController = require("../controller/adminController")

//endpoint para recoger todos los datos de todos los usuarios (ESTADÍSTICAS)

// http://localhost:4000/admin/allUsersData
router.get('/allUsersData', AdminController.getUsersData)

// http://localhost:4000/admin/banOneUser/:user_id
router.put('/banOneUser/:user_id', AdminController.banOneUser)

// http://localhost:4000/admin/unlockOneUser/:user_id
router.put('/unlockOneUser/:user_id', AdminController.unlockOneUser)

// http://localhost:4000/admin/banOneTravel/:travel_product_id
router.put('/banOneTravel/:travel_product_id', AdminController.banOneTravel)

// http://localhost:4000/admin/banOneTravel/:travel_product_id
router.put('/unlockOneTravel/:travel_product_id', AdminController.unlockOneTravel)

// http://localhost:4000/admin/getAllTravelsAdmin/
router.get('/getAllTravelsAdmin/', AdminController.getTravelsAdmin)

// http://localhost:4000/admin/getTravelsMonthly/
router.get('/getTravelsMonthly/', AdminController.getTravelsMonthlyAdmin)

// http://localhost:4000/admin/getAllSell
router.get("/getAllSell", AdminController.getAllSell )

// http://localhost:4000/admin/getAllImpotSell
router.get("/getAllImpotSell", AdminController.getAllImport )

// http://localhost:4000/admin/getAvgImpotSell
router.get("/getAvgImpotSell", AdminController.getAvgImport )

router.get("/getAllSellJ", AdminController.getAllSellJ )

router.get("/getAllSellf", AdminController.getAllSellF )

router.get("/getAllSellMarch", AdminController.getAllSellMa )

router.get("/getAllSellA", AdminController.getAllSellAp )

router.get("/getAllSellM", AdminController.getAllSellMa)

router.get("/getAllSellJun", AdminController.getAllSellJun)

router.get("/getAllSellJul", AdminController.getAllSellJul)

router.get("/getAllSellAug", AdminController.getAllSellAug)

router.get("/getAllSellSep", AdminController.getAllSellSep)

router.get("/getAllSellOct", AdminController.getAllSellOct)

router.get("/getAllSellNov", AdminController.getAllSellNov)

router.get("/getAllSellDic", AdminController.getAllSellDic)

// Rutas de estadisticas importe de ventas mensual
router.get("/getAllImportJ", AdminController.getAllImportJ )

router.get("/getAllImportf", AdminController.getAllImportF )

router.get("/getAllImportMarch", AdminController.getAllImportMa )

router.get("/getAllImportA", AdminController.getAllImportAp )

router.get("/getAllImportM", AdminController.getAllImportMa)

router.get("/getAllImportJun", AdminController.getAllImportJun)

router.get("/getAllImportJul", AdminController.getAllImportJul)

router.get("/getAllImportAug", AdminController.getAllImportAug)

router.get("/getAllImportSep", AdminController.getAllImportSep)

router.get("/getAllImportOct", AdminController.getAllImportOct)

router.get("/getAllImportNov", AdminController.getAllImportNov)

router.get("/getAllImportDic", AdminController.getAllImportDic)

// Rutas de estadisticas media importe de ventas mensual
router.get("/getAllAvgImportJ", AdminController.getAllAvgImportJ )

router.get("/getAllAvgImportf", AdminController.getAllAvgImportF )

router.get("/getAllAvgImportMarch", AdminController.getAllAvgImportMa )

router.get("/getAllAvgImportA", AdminController.getAllAvgImportAp )

router.get("/getAllAvgImportM", AdminController.getAllAvgImportMa)

router.get("/getAllAvgImportJun", AdminController.getAllAvgImportJun)

router.get("/getAllAvgImportJul", AdminController.getAllAvgImportJul)

router.get("/getAllAvgImportAug", AdminController.getAllAvgImportAug)

router.get("/getAllAvgImportSep", AdminController.getAllAvgImportSep)

router.get("/getAllAvgImportOct", AdminController.getAllAvgImportOct)

router.get("/getAllAvgImportNov", AdminController.getAllAvgImportNov)

router.get("/getAllAvgImportDic", AdminController.getAllAvgImportDic)

// http://localhost:4000/admin/getAllTravels
router.get("/getAllTravels", AdminController.getAllTravel )

// todos los productos por meses
router.get("/getAllTravelJ", AdminController.getAllTravelJ )
router.get("/getAllTravelf", AdminController.getAllTravelF )
router.get("/getAllTravelMarch", AdminController.getAllTravelMa )
router.get("/getAllTravelA", AdminController.getAllTravelAp )
router.get("/getAllTravelM", AdminController.getAllTravelMa)
router.get("/getAllTravelJun", AdminController.getAllTravelJun)
router.get("/getAllTravelJul", AdminController.getAllTravelJul)
router.get("/getAllTravelAug", AdminController.getAllTravelAug)
router.get("/getAllTravelSep", AdminController.getAllTravelSep)
router.get("/getAllTravelOct", AdminController.getAllTravelOct)
router.get("/getAllTravelNov", AdminController.getAllTravelNov)
router.get("/getAllTravelDic", AdminController.getAllTravelDic)
module.exports = router