const bcrypt = require("bcrypt");
const connection = require("../config/db");
// Esto ma salio solo cuando he utilizado json en res , supongo que es el requerimiento para usarlo , preguntar a santi
const { json } = require("express");

class UserController {
  // Metodo register para insertar los datos de users en la base de dartos,requerimos bcryp para encriptar la contraseña y hacemos la conexion con la base de datos para insertarlos

  register = (req, res) => {
    const { name, lastname, email, password } = req.body;
    const salt = 8;
    // utilizamos bycryp para insertr la constraseña encriptada hash
    bcrypt.genSalt(salt, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        let sql = `INSERT INTO user(name, email, password, enabled) VALUES ("${name}","${email}","${hash}", 1)`;

        connection.query(sql, (err, result) => {
          err ? res.status(500).json(err) : res.status(200).json(result);
        });
      });
    });
  };
}

module.exports = new UserController();
