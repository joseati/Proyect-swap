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
}

module.exports = new AdminController()