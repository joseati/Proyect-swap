var express = require('express');
var router = express.Router();
const UserController = require("../controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// http://localhost:4000/users/register
router.post("/register", UserController.register)

module.exports = router;
