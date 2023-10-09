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

module.exports = router