const express = require("express")
const bcrypt = require("bcrypt")
const connection = require ("../config/db");
const jwt = require ("jsonwebtoken")
// Esto ma salio solo cuando he utilizado json en res , supongo que es el requerimiento para usarlo , preguntar a santi 

const { json } = require("express");
const { main } = require("../utils/wellcomeNodemailer");

class UserController {
  // Metodo register para insertar los datos de users en la base de dartos,requerimos bcryp para encriptar la contraseña y hacemos la conexion con la base de datos para insertarlos

  register = (req, res) => {
    const { name, lastname, email, password } = req.body;
    const salt = 8;
    // utilizamos bycryp para insertr la constraseña encriptada hash
    // En la consulta introducimos habilitado a 1 para luego traernos los usuarios con enabled = 1
    bcrypt.genSalt(salt, (err, salt) => {

      bcrypt.hash(password,salt, (err, hash) => {

        let sql = `INSERT INTO user(name, email, password, enabled) VALUES ("${name}","${email}","${hash}", 1)`

        connection.query(sql, (err, result ) => {
          err?
            res.status(500).json(err)
            :
            main(email, name, password),
            res.status(200).json(result)
        })
      })

    })

  }
// Para el login hago una select para traerme todos los datos de el usuario(email) y no este borrado o desabilitado
  login = (req, res) => {
    const {email, password} = req.body
   

    let sql = `SELECT * FROM user WHERE email = "${email}" AND is_deleted=0 AND enabled=1`
    

    connection.query(sql, (err, result)=>{
   
      if(!result || !result.length){
        res.status(401).json("usuario no encontrado")
      }
      else{
        // Capturo el password encriptda de la bd y el id user
        const [user] = result
        const hash = user.password
        // console.log(user);
        const {user_id, type, enabled} = user
        
        // Comparo el hash (password encriptada de bd) con la que nos proporciona el usuario
        bcrypt.compare( password, hash, (err, response) => {
          if(err){
            res.status(500).json("ups, problema en servidor")
          }
          // SI hay respuesta creo un token con los datos de usuario tipo y habilitado y con la palabra secreta y tiempo para expirar
          if(response){
            const token = jwt.sign(
              {user_id, type, enabled},
              process.env.SECRET,
              {expiresIn: "2d"}
            )
            res.status(200).json(token)
          }else{
            res.status(400).json("usuario no encontrado")
          }
        })
        

      }
    })

  }

  // Creamos el controlador de la ruta que nos devolver la informacion(get) de un usurio mediante el user_id de params(ruta dinamica)
  getOneUser = (req, res ) => {
    const { user_id } = req.params

    let sql = `SELECT * FROM user WHERE user_id = ${user_id} AND is_deleted = 0 AND enabled = 1`
    connection.query(sql, (err, result) => {
      err ?
        res.status(500).json("err")
        :
        res.status(200).json(result)
    })
  }

  // Borrado lógico de  usuario a traves de user_id recogido por params(parámetro dinámico )
  delLogicUser = ( req, res ) => {
   const {user_id} = req.params
   console.log(user_id);

   let sql = `UPDATE user SET is_deleted = 1 WHERE user_id = ${user_id} `

   connection.query(sql, (err, result)=> {
    if (err){
      console.log(err);
    }
    let sqlTravelDelete =`UPDATE travel_product SET is_deleted = 1 WHERE seller_user_id = ${user_id}`
    
    connection.query(sqlTravelDelete,(err1, resultTravel)=>{
      err1?
      res.status(500).json("upss, problem!")
      :
      res.status(200).json("ok")
    })

   })
    
  }

  // Editar datos de usuario a través de user_id recogido por params(parámetro dinámico)
  editUser = (req, res) => {
    const { user_id } = req.params;
    const { name, last_name, address, ident_num, telephone, zip_code, iban } = req.body;

    let sql = `UPDATE user SET name = "${name}",last_name = "${last_name}",
               address = "${address}", ident_num = "${ident_num}",
               telephone = "${telephone}", zip_code = "${zip_code}",
               iban = "${iban}" WHERE user_id = ${user_id}`;

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  }

  //añade los travels favoritos a la base de datos por cada usuario recogido por req.body
  favoritos = (req, res) => {
    
    const {user_id, travel_product_id} = req.body
    console.log(travel_product_id)
    let sqlFavoritos = `INSERT INTO likes(user_id, travel_product_id) VALUES (${user_id}, ${travel_product_id})`
   

    connection.query(sqlFavoritos, (err, result) => {
      if (err) {
       res.status(500).json(err); 
      } else {
        res.status(200).json(result);
      }
    })
  }

  //Hace un borrado permanente de los travels favoritos a la base de datos por cada usuario recogido por req.body
  deleteFavoritos = (req, res) => {
    console.log("reqqqqq", req.body)
    const {user_id, travel_product_id} = req.body
    let sqlFavoritos = `DELETE FROM likes WHERE user_id = ${user_id} AND travel_product_id = ${travel_product_id}`
    console.log(sqlFavoritos);
    connection.query(sqlFavoritos, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    })
  }


  searchTravelOneUser = (req, res) => {
    console.log(req.params)
    const temp = JSON.parse(req.params.compraFinal)
    const  {user_id, destiny } = temp
    // console.log(temp)
    // console.log(user_id)
    // console.log(destiny)
    let sqlPlaneUser = `SELECT tp.*, pt.*, user.user_id , user.name 
    FROM travel_product tp, plane_travel pt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id ) 
    and tp.seller_user_id = user.user_id 
    AND tp.admin_enabled = 0 
    AND tp.is_deleted = 0 
    AND tp.buyer_user_id = ${user_id} 
    AND tp.destiny LIKE '%${destiny}%'
    group by tp.travel_product_id;`
    connection.query( sqlPlaneUser,(err1,resultPlane) => {
      if(err1){
        console.log(err1);
      }else{
        
          let sqlTrain = `SELECT tp.*, tt.*, user.user_id , user.name 
          FROM travel_product tp, train_travel tt, user
          WHERE (tp.travel_product_id = tt.travel_product_id ) 
          and tp.seller_user_id = user.user_id 
          AND tp.admin_enabled = 0 
          AND tp.is_deleted = 0 
          AND tp.buyer_user_id = ${user_id}
          AND tp.destiny LIKE '%${destiny}%' 
          group by tt.travel_product_id;`
          connection.query(sqlTrain, (err2, resultTrainUser) => {
            if(err2){
              res.status(500).json(err2)
            }else{
              let resultPlaneUser = resultPlane.map((e)=>({...e,
                departure_date: e.departure_date.toString().split("G")[0],
                arrival_date: e.arrival_date.toString().split("G")[0]}))
  
              let resultTrain = resultTrainUser.map((e)=>({...e,
                departure_date: e.departure_date.toString().split("G")[0],
                arrival_date: e.arrival_date.toString().split("G")[0]}))
                
                res.status(200).json({resultPlaneUser,resultTrain})
            }
             
             
        
          })
        
      }
    })


  }

  getFavoritos = (req, res) =>{
    console.log(req.params);
    const user_temp = JSON.parse(req.params.user_temp)
    

    let sqlGetFavoritos = `SELECT * FROM likes WHERE user_id = ${user_temp}`
    connection.query(sqlGetFavoritos, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    }) 


}
}

module.exports = new UserController();