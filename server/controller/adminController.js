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
      let sql2 = `UPDATE travel_product SET admin_enabled = 1 WHERE seller_user_id = ${user_id}`
      connection.query(sql2, (err2, result2) => {
        err2 ? 
        res.status(500).json("err")
        :
        res.status(200).json("todo ook")
      })
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
      let sql2 = `UPDATE travel_product SET admin_enabled = 0 WHERE seller_user_id = ${user_id}`
      connection.query(sql2, (err2, result2) => {
        err2 ? 
        res.status(500).json("err")
        :
        res.status(200).json("todo ook")
      })
      
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
                    
            if(err3){
              res.status(500).json(err3)
            }else{
              let resultPlaneUser = resultPlaneAdmin.map((e)=>({...e,
                departure_date: e.departure_date.toString().split("G")[0],
                arrival_date: e.arrival_date.toString().split("G")[0]}))
  
              let resultTrain = resultTrainAdmin.map((e)=>({...e,
                departure_date: e.departure_date.toString().split("G")[0],
                arrival_date: e.arrival_date.toString().split("G")[0]}))
                // res.status(200).json({resultPlaneUser,resultTrain})
              let travel_data ={
              plane: resultPlaneUser,
              train: resultTrain
            }  
              
              res.status(200).json(travel_data)
            }
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

  getAllSell = (req, res) => {
    let sql = "SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL"
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravel = (req, res) => {
    let sql = "SELECT COUNT(travel_product_id) AS num FROM travel_product where is_deleted = 0 and admin_enabled = 0"
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImport = (req, res) => {

    let sql = "SELECT SUM(client_price) AS num FROM travel_product where buyer_user_id IS NOT NULL"
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAvgImport = (req, res) => {

    let sql = "SELECT AVG(client_price) AS num FROM travel_product where buyer_user_id IS NOT NULL"
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      console.log(result);
      res.status(200).json(result)
    })
  }

  // estadisticas de total de venta por meses
  getAllSellJ = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-01-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-01-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellF = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-02-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-02-27";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellMa = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-03-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-03-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellAp = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-04-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-04-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellMa = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-05-01 "AND creation_date < "${AdminController.ACTUAL_YEAR}-05-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellJun = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-06-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-06-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllSellJul = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-07-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-07-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllSellAug = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-08-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-08-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllSellSep = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-09-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-09-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellOct = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-10-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-10-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllSellNov = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-11-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-11-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllSellDic = (req, res) => {
    let sql = `SELECT COUNT(*) AS num FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-12-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-12-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  // Suma de importes mensuales vendidos

  getAllImportJ = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-01-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-01-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportF = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-02-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-02-27";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportMa = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-03-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-03-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportAp = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-04-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-04-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportMa = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-05-01 "AND creation_date < "${AdminController.ACTUAL_YEAR}-05-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportJun = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-06-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-06-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllImportJul = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-07-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-07-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllImportAug = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-08-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-08-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllImportSep = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-09-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-09-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportOct = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-10-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-10-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllImportNov = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-11-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-11-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllImportDic = (req, res) => {
    let sql = `SELECT SUM(client_price) AS sumClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-12-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-12-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  // Media de importes mensuales vendidos

  getAllAvgImportJ = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-01-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-01-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportF = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-02-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-02-27";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportMa = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-03-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-03-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportAp = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-04-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-04-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportMa = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-05-01 "AND creation_date < "${AdminController.ACTUAL_YEAR}-05-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportJun = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-06-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-06-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllAvgImportJul = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-07-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-07-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllAvgImportAug = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-08-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-08-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllAvgImportSep = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-09-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-09-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportOct = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-10-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-10-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllAvgImportNov = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-11-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-11-30";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllAvgImportDic = (req, res) => {
    let sql = `SELECT AVG(client_price) AS avgClientPrice FROM travel_product where buyer_user_id IS NOT NULL and creation_date > "${AdminController.ACTUAL_YEAR}-12-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-12-31";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  // 
   // estadisticas de total de productos subid por meses
   getAllTravelJ = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-01-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-01-31 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelF = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-02-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-02-27 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelMa = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-03-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-03-31 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelAp = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-04-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-04-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelMa = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-05-01 "AND creation_date < "${AdminController.ACTUAL_YEAR}-05-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelJun = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-06-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-06-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllTravelJul = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-07-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-07-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllTravelAug = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-08-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-08-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllTravelSep = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-09-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-09-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelOct = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-10-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-10-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

  getAllTravelNov = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-11-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-11-30 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }
  getAllTravelDic = (req, res) => {
    let sql = `SELECT COUNT(travel_product_id) AS num FROM travel_product where creation_date > "${AdminController.ACTUAL_YEAR}-12-01" AND creation_date < "${AdminController.ACTUAL_YEAR}-12-31 and is_deleted = 0 and admin_enabled = 0";`
    console.log(sql);
    connection.query(sql, (err, result) => {
      err?
      res.status(500).json(err)
      :
      res.status(200).json(result)
    })
  }

}

AdminController.ACTUAL_YEAR = 2023

module.exports = new AdminController()