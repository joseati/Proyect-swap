const express = require("express")
const connection = require('../config/db');


class AdminController {
  //Método get para traer los datos de usuarios a la vista de estadísticas del Admin 

  getUsersData = (req, res) => {
    let actualDate = new Date()
    let actualMonth = actualDate.getMonth() + 1
    
    let sql = 'SELECT * FROM user WHERE type = 1 AND is_deleted = 0'
    let sql2 = `SELECT * FROM user WHERE type = 1 AND is_deleted = 0 AND register_date > 2023-${actualMonth}-01 & register_date < 2023-${actualMonth}-31;`
    connection.query(sql, (err, result)=> {
      if(err){
        res.status(500).json(err)
      }
      connection.query(sql2, (err2, resultMonth)=>{
        let data_user = {
          users: result,
          users_month: resultMonth
        }
        if(err2){
          res.status(500).json(err2)
        }
        res.status(200).json(data_user)
       
      })
    })
  }

  //Bloquea un usuario desde el Admin
  banOneUser = (req, res) => {
    const { user_id } = req.params
    let sql = `UPDATE user SET enabled = 0 WHERE user_id = ${user_id} AND is_deleted = 0`

    connection.query(sql, (err, result) => {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
    })
  }

  //desbloquea un usuario bloqueado desde el Admin
  unlockOneUser = (req, res) => {
    const { user_id } = req.params
    let sql = `UPDATE user SET enabled = 1 WHERE user_id = ${user_id} AND is_deleted = 0`

    connection.query(sql, (err, result) => {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
    })
  }

  //banea o bloquea un viaje desde el Administrador
  banOneTravel = (req, res) => {
    const { travel_product_id } = req.params
    let sql = `UPDATE travel_product SET admin_enabled = 1 WHERE travel_product_id = ${travel_product_id} AND is_deleted = 0`

    connection.query(sql, (err, result) => {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
    })
  }

  //Desbloquea un viaje desde el Administrador
  unlockOneTravel = (req, res) => {
    const { travel_product_id } = req.params
    let sql = `UPDATE travel_product SET admin_enabled = 0 WHERE travel_product_id = ${travel_product_id} AND is_deleted = 0`

    connection.query(sql, (err, result) => {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
    })
  }

  //Trae toda la información de viajes en venta en la vista de Admin.   
  getTravelsAdmin = (req, res) => {
    
    let sqlPlaneAdmin = `SELECT tp.*, pt.*, user.user_id , user.name 
    FROM travel_product tp, plane_travel pt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id ) 
    and tp.seller_user_id = user.user_id
    AND tp.is_deleted = 0 
    AND tp.buyer_user_id IS NULL group by pt.travel_product_id;`
    connection.query( sqlPlaneAdmin,(err2,resultPlaneAdmin) => {
      if(err2){
        console.log(err2);
      }else{
        
          let sqlTrainAdmin = `SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tt.travel_product_id;`
          connection.query(sqlTrainAdmin, (err3, resultTrainAdmin) => {
            let travel_data ={
              plane: resultPlaneAdmin,
              train: resultTrainAdmin
            }
            err3?
             res.status(500).json(err3)
             :
              res.status(200).json(travel_data)
            //  console.log({resultPlaneUser,resultTrain});
          })
        
      }
    })
  }

  getTravelsMonthlyAdmin = (req, res) => {
    let actualDate = new Date()
    let actualMonth = actualDate.getMonth() + 1
    let sql = `SELECT * FROM travel_product WHERE is_deleted = 0 AND creation_date > 2023-${actualMonth}-01 & creation_date < 2023-${actualMonth}-31;`

    connection.query(sql, (err, result) => {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
    })
  }
}

module.exports = new AdminController()