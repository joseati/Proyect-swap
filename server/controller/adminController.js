const express = require("express")
const connection = require('../config/db');


class AdminController {
  //Método get para traer los datos de usuarios a la vista de estadísticas del Admin 

  getUsersData = (req, res) => {
    let sql = 'SELECT * FROM user WHERE type = 1 AND is_deleted = 0'
    connection.query(sql, (err, result)=> {
      if(err){
        res.status(500).json(err)
      }
      res.status(200).json(result)
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
}

module.exports = new AdminController()