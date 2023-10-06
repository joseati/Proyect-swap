var express = require("express");
var router = express.Router();
const AdminController = require("../controller/adminController")

//endpoint para recoger todos los datos de todos los usuarios (ESTADÍSTICAS)

// http://localhost:4000/admin/allUsersData
router.get('/allUsersData', AdminController.getUsersData)

module.exports = router