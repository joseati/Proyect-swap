var express = require("express");
var router = express.Router();
const UserController = require("../controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// http://localhost:4000/users/register
router.post("/register", UserController.register);

// http://localhost:4000/users/login
router.post("/login", UserController.login);

// http://localhost:4000/users/getOneUser/:user_id
router.get("/getOneUser/:user_id", UserController.getOneUser);

module.exports = router;
