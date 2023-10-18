const connection = require("../config/db");
const express= require("express")
const { json } = require("express");
const { dropOutTravel } = require("../utils/dropOutTravel");
const { modifyTravel } = require("../utils/modifyTravel");

class TravelController {

// Falta controlar las horas de salida de vuelo y fecha de vuelo
// getAllTravelsTobuy = (req, res) => {
//   let sql = "SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
//   // let sql = "SELECT tp.*, CASE WHEN pt.travel_product_id IS NOT NULL THEN 'plane_travel' WHEN tt.travel_product_id IS NOT NULL THEN 'train_travel'END AS travel_type,IFNULL(pt.origin_airport_id, tt.origin_train_id) AS origin_id,IFNULL(pt.destination_airport_id, tt.destination_train_id) AS destination_id,user.user_id,user.name FROM travel_product tp INNER JOIN user ON tp.seller_user_id = user.user_id LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id WHERE tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL;"
//   connection.query(sql, (err, respons) => {
//     if(err){
//       console.log(err)
//     }
//     else{
//       res.status(200).json(respons)
//       if(!respons || !respons.length){
//         let sqlPlane = " SELECT tp.*, pt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, user WHERE ( tp.travel_product_id = pt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by pt.travel_product_id;"
//         connection.query( sqlPlane,(err2,resultPlane) => {
//           if(err2){
//             console.log(err2);
//           }else{
//             // res.status(200).json(resultPlane)
//             if(!resultPlane || !resultPlane.length){
//               let sqlTrain = "SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tt.travel_product_id;"
//               connection.query(sqlTrain, (err3, resultTrain) => {
//                 err?
//                  res.status(500).json(err3)
//                  :
//                  res.status(200).json(resultTrain)
//               })

//             }
//           }
//         })
//       }
     
//     }
//   });
// }
   getAllTravelsTobuy = (req, res) => {
    let sqlPlane = " SELECT tp.*, pt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, user WHERE ( tp.travel_product_id = pt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
    connection.query(sqlPlane, (err, resultPlane) => {
      if(err){
        res.status(500).json("Error de conexion")
      }
      let sqlTrain = "SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
      connection.query(sqlTrain, (err2, resultTrain) => {
        if(err2){
          res.status(500).json("err2")

        }else{
          console.log("resssss", resultPlane, resultTrain)
         let dataPlane = resultPlane.map((e) => ({...e,
            departure_date: e.departure_date.toString().split("G")[0],
            arrival_date: e.arrival_date.toString().split("G")[0]}))
         let dataTrain = resultTrain.map((e) => ({...e,
            departure_date: e.departure_date.toString().split("G")[0],
            arrival_date: e.arrival_date.toString().split("G")[0]}))

          res.status(200).json({dataPlane, dataTrain}) 
        }
          
          
      })
    })
  } 

   getOneTravel= (req, res)=>{
    const {travel_id} = req.params
    // console.log(travel_id);
    let sql = `SELECT tp.*, pt.*, user.user_id , user.name 
    FROM travel_product tp, plane_travel pt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id ) 
    and tp.seller_user_id = user.user_id 
    AND tp.admin_enabled = 0 
    AND tp.is_deleted = 0 
    AND tp.travel_product_id = ${travel_id}
    union
    SELECT tp.*, tt.*, user.user_id , user.name 
    FROM travel_product tp, train_travel tt, user 
    WHERE ( tp.travel_product_id = tt.travel_product_id ) 
    and tp.seller_user_id = user.user_id 
    AND tp.admin_enabled = 0 
    AND tp.is_deleted = 0 
    AND tp.travel_product_id = ${travel_id};`
    connection.query(sql, (err, resul)=>{
      if(err){
        res.status(500).json("err")
        
      }else{
         // console.log(err)
        let data =  resul.map((e)=>({...e,
          departure_date: e.departure_date.toString().split("G")[0],
          arrival_date: e.arrival_date.toString().split("G")[0]}))
         res.status(200).json(data)
 //  console.log("RESULTADO CONTROLLER", resul);
      }
       
    })
  } 
  getOneAirport = (req, res ) => {
    const { city } = req.params

    let sql = `SELECT * FROM airport WHERE city LIKE "%${city}%" `
    connection.query(sql, (err, result ) => {
      err ? 
        res.status(400).json("No encontrado")
        :
        res.status(200).json(result)
    })
  }
// Controlador para crear un viaje de avion, la infomacion llega por un objeto que mandamos y una constante en el body, por lo que hacemos el destruccturing correspondiente
  sellOnePlaneTravel = ( req, res ) => {
    console.log(req.body);
    const { origin, destiny,passengers, commentaries, original_price, client_price, exchange_rate, plane_travel_id, origin_airpoty_id, destiny_airpoty_id, departure_date, departure_time, arrival_date,  arrival_time, compani_name,origin_airpoty_id_tp2, destiny_airpoty_id_tp2, departure_date_tp2, departure_time_tp2, arrival_date_tp2,  arrival_time_tp2, compani_name_tp2 } = req.body.inputFormPlane
    const {user_id} = req.body
    
   console.log(origin);
 
// Primera insert en la tabla travel_product(tabla con mayor entidad)
    let sqlTravelProduct = `INSERT INTO travel_product(type, origin, destiny, passenger, commentaries, seller_user_id, original_price, client_price, exchange_rate, is_deleted ) VALUES (1, "${origin}","${destiny}","${parseInt(passengers)}","${commentaries}",${user_id},${parseFloat(original_price)},${parseFloat(client_price)},${parseFloat(exchange_rate)}, 1)`

    console.log(sqlTravelProduct);

    connection.query( sqlTravelProduct, (err, resultTravel ) => {
     if(err){
      res.status(500).json("error en sql")
     }else{
      // Si la inserccion se produce rescatamos el numero de insert que usaremos para el travel_id de la siguente insert
      const { insertId } = resultTravel
      
      if(resultTravel ){
        // Si plane viene como undefine o es 1 se produce solo un insert 1 solo viaje(ida)
        if (!plane_travel_id || plane_travel_id == "1"){
          let sqlPlaneTravel = `INSERT INTO plane_travel (travel_product_id, plane_travel_id, origin_airport_id, destination_airport_id, departure_date, departure_time, arrival_date, arrival_time, company_name ) VALUES (${insertId}, 1, ${parseInt(origin_airpoty_id)},${parseInt(destiny_airpoty_id)}, "${departure_date}", "${departure_time}", "${arrival_date}", "${arrival_time}", "${compani_name}" )`
          
          connection.query( sqlPlaneTravel, (err2, resultPlaneform) => {
           if(err2){
             res.status(500).json("err2")

           }  else{
            const sqlIsdelete = `UPDATE travel_product set is_deleted = 0 WHERE travel_product_id = ${insertId}`
            console.log(sqlIsdelete);
            connection.query(sqlIsdelete,(err3, resultIsDelete) => {
              err3 ?
              res.status(500).json(err3)
              :
              res.status(200).json("ok")
            })
           }
            //  res.status(200).json({resultTravel, resultPlaneform})
            
          })

        }
        else if(plane_travel_id === "2"){
          // si el id es 2 es ida y vuelta y se produce el siguente insert 
          let sqlPlaneTravel = `INSERT INTO plane_travel (travel_product_id, plane_travel_id, origin_airport_id, destination_airport_id, departure_date, departure_time, arrival_date, arrival_time, company_name ) VALUES
           (${insertId}, 1, ${parseInt(origin_airpoty_id)},${parseInt(destiny_airpoty_id)}, "${departure_date}", "${departure_time}", "${arrival_date}", "${arrival_time}", "${compani_name}" ), 
          (${insertId}, 2, ${parseInt(origin_airpoty_id_tp2)},${parseInt(destiny_airpoty_id_tp2)}, "${departure_date_tp2}", "${departure_time_tp2}", "${ arrival_date_tp2 }", "${ arrival_time_tp2}", "${ compani_name_tp2}" )`
  
          connection.query( sqlPlaneTravel, (err2, resultPlaneform) => {
            if(err2){
              res.status(500).json("err2")
 
            }else{
              const sqlIsdelete = `UPDATE travel_product set is_deleted = 0 WHERE travel_product_id = ${insertId}`
              connection.query(sqlIsdelete,(err3, resultIsDelete) => {
                err3 ?
                res.status(500).json(err3)
                :
                res.status(200).json("ok")
              })
            }
             //  res.status(200).json({resultTravel, resultPlaneform})
           
          })

        }

      }

     }

    })

  }


  sellOneTrainTravel = ( req, res ) => {
    const {origin ,destiny,passengers,commentaries,original_price,client_price,exchange_rate,train_travel_id,origin_trainStation_id,destiny_trainStation_id,departure_date,departure_time,arrival_date,arrival_time,compani_name,origin_trainStation_id_tp2,destiny_trainStation_id_tp2,departure_date_tp2,departure_time_tp2 ,arrival_date_tp2,arrival_time_tp2,compani_name_tp2} = req.body.inputFormTrain
    const {user_id} = req.body

    // Primera insert en la tabla travel_product(tabla con mayor entidad)
    let sqlTravelProduct = `INSERT INTO travel_product(type, origin, destiny, passenger, commentaries, seller_user_id, original_price, client_price, exchange_rate,is_deleted ) VALUES (2, "${origin}","${destiny}","${parseInt(passengers)}","${commentaries}",${user_id},${parseFloat(original_price)},${parseFloat(client_price)},${parseFloat(exchange_rate)}, 1)`

    connection.query( sqlTravelProduct, (err, resultTravel ) => {
      if(err){
       res.status(500).json("err en sql")
      }else{
       // Si la inserccion se produce rescatamos el numero de insert que usaremos para el travel_id de la siguente insert
       const { insertId } = resultTravel
      
       if(resultTravel ){
         // Si plane viene como undefine o es 1 se produce solo un insert 1 solo viaje(ida)
         if (!train_travel_id || train_travel_id == "1"){
           let sqlTrainTravel = `INSERT INTO train_travel (travel_product_id, train_travel_id, origin_train_id, destination_train_id, departure_date, departure_time, arrival_date, arrival_time, company_name ) VALUES (${insertId}, 1, ${parseInt(origin_trainStation_id)},${parseInt(destiny_trainStation_id)}, "${departure_date}", "${departure_time}", "${arrival_date}", "${arrival_time}"   , "${compani_name}" )`
           
           connection.query( sqlTrainTravel, (err2, resultTrainform) => {
            if(err2){
              res.status(500).json("err2")
 
            } else{
              const sqlIsdelete = `UPDATE travel_product set is_deleted = 0 WHERE travel_product_id = ${insertId}`
              connection.query(sqlIsdelete,(err3, resultIsDelete) => {
                err3 ?
                res.status(500).json(err3)
                :
                res.status(200).json("ok")
              })
            }
             //  res.status(200).json({resultTravel, resultPlaneform})
            
           })
 
         }
         else if(train_travel_id === "2"){
           // si el id es 2 es ida y vuelta y se produce el siguente insert 
           let sqlPlaneTravel = `INSERT INTO train_travel (travel_product_id, train_travel_id, origin_train_id, destination_train_id, departure_date, departure_time, arrival_date, arrival_time, company_name ) VALUES
            (${insertId}, 1, ${parseInt(origin_trainStation_id)},${parseInt(destiny_trainStation_id)}, "${departure_date}", "${departure_time}", "${arrival_date}", "${arrival_time}", "${compani_name}" ), 
           (${insertId}, 2, ${parseInt(origin_trainStation_id_tp2)},${parseInt(destiny_trainStation_id_tp2)}, "${departure_date_tp2}", "${departure_time_tp2}", "${ arrival_date_tp2 }", "${ arrival_time_tp2}", "${ compani_name_tp2}" )`
   
           connection.query( sqlPlaneTravel, (err2, resultTrainform) => {
            if(err2){
              res.status(500).json("err2")
 
            }else{
              const sqlIsdelete = `UPDATE travel_product set is_deleted = 0 WHERE travel_product_id = ${insertId}`
              connection.query(sqlIsdelete,(err3, resultIsDelete) => {
                err3 ?
                res.status(500).json(err3)
                :
                res.status(200).json("ok")
              })
            }
             //  res.status(200).json({resultTravel, resultPlaneform})
             
           })
 
         }
 
       }
 
      }
 
     })
    
  }

  getOneTrainStation = (req, res ) => {
    const { city } = req.params

    let sql = `SELECT * FROM train_station WHERE province LIKE "%${city}%" or city LIKE "%${city}%" `
    connection.query(sql, (err, result ) => {
      err ? 
        res.status(400).json("No encontrado")
        :
        res.status(200).json(result)
        
    })
  }

  //Trae toda la información de viajes en venta de un usuario.   
  getTravelsToSellOneUser = (req, res) => {
    const {user_id} = req.params;
    let sqlPlaneUser = ` SELECT tp.*, pt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, user WHERE ( tp.travel_product_id = pt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL and tp.seller_user_id = ${user_id} group by tp.travel_product_id`
    connection.query( sqlPlaneUser,(err2,resultPlane) => {
      if(err2){
        console.log(err2);
      }else{
        
          let sqlTrain = `SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL and tp.seller_user_id = ${user_id} group by tp.travel_product_id`
          connection.query(sqlTrain, (err3, resultTrainUser) => {
           if(err3){
            res.status(500).json(err3)
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
  //Trae todos los viajes comprados por un usuario
  getTravelsBoughtOneUser = (req, res) =>{
    const {user_id} = req.params;
    let sqlPlaneUser = `SELECT tp.*, pt.*, user.user_id , user.name 
    FROM travel_product tp, plane_travel pt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id ) 
    and tp.seller_user_id = user.user_id 
    AND tp.admin_enabled = 0 
    AND tp.is_deleted = 0 
    AND tp.buyer_user_id = ${user_id} 
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

  //Trae todos los viajes marcados como favoritos
  getlikes = (req, res) =>{
    const {user_id} =req.params;
    let sqlLikePlane = `SELECT tp.*, pt.*, user.user_id, user.name
    FROM travel_product AS tp
    JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
    JOIN user ON tp.seller_user_id = user.user_id
    LEFT JOIN likes AS l ON tp.travel_product_id = l.travel_product_id AND l.user_id = ${user_id}  
    WHERE tp.buyer_user_id IS NULL
    AND tp.admin_enabled = 0
    AND tp.is_deleted = 0
    AND l.user_id IS NOT NULL;`
    connection.query(sqlLikePlane, (err, resultPlaneUser)=>{
      if(err) {res.status(500).json(err) }
      else { 
        let sqlLikeTrain = `SELECT tp.*, tt.*, user.user_id, user.name
        FROM travel_product AS tp
        JOIN train_travel AS tt ON tp.travel_product_id = tt.travel_product_id
        JOIN user ON tp.seller_user_id = user.user_id
        LEFT JOIN likes AS l ON tp.travel_product_id = l.travel_product_id AND l.user_id = ${user_id}  
        WHERE tp.buyer_user_id IS NULL
        AND tp.admin_enabled = 0
        AND tp.is_deleted = 0
        AND l.user_id IS NOT NULL;`
        connection.query(sqlLikeTrain, (err2, resultTrainUser) => {
          if (err2){
            res.status(500).json(err2)
          } else {
            let resultPlane = resultPlaneUser.map((e)=>({...e,
              departure_date: e.departure_date.toString().split("G")[0],
              arrival_date: e.arrival_date.toString().split("G")[0]}))

            let resultTrain = resultTrainUser.map((e)=>({...e,
              departure_date: e.departure_date.toString().split("G")[0],
              arrival_date: e.arrival_date.toString().split("G")[0]}))
              res.status(200).json({resultPlane,resultTrain})
            
            
          }         
        })
      }
    })
  }

  //Eliminar un viaje activo
  deleteOneTravel = (req, res) =>{
    const {travel_id} = req.params;
    // console.log("LLEGO HASTA AQUÏ. ELIMINANDO UN VIAJE");
    let sql = `UPDATE travel_product
    SET is_deleted = 1
    WHERE travel_product_id = ${travel_id};`

    connection.query(sql, (err, result) =>{
      err ? res.status(500).json(err) : dropOutTravel(travel_id),res.status(200).json(result)
    })
  }

  // Filtros de viajes para vender
  filterAllTravelsTobuy = (req, res) => {
    console.log(req.params.filtersTravel);
    const temp = JSON.parse(req.params.filtersTravel)
    const {company_name, price, departure_date, origin, destination, filterByPrice} = temp 
    console.log(company_name);

    let sql = "SELECT u.name,tp.destiny,tp.type, tp.origin, tp.client_price, tp.passenger, tp.travel_product_id, pt.company_name , pt.departure_date, pt.arrival_date , tt.company_name, tt.departure_date, tt.arrival_date FROM travel_product tp LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id JOIN user u ON u.user_id = tp.seller_user_id WHERE tp.is_deleted = 0 AND tp.admin_enabled = 0 AND tp.buyer_user_id IS NULL"
    let group = " GROUP BY tp.travel_product_id "
    if(company_name){
      sql += ` AND (pt.company_name LIKE "%${company_name}%" OR tt.company_name LIKE "%${company_name}%") ` 
    }
    if(departure_date){
      sql += ` AND (pt.departure_date = "${departure_date}" OR tt.departure_date = "${departure_date}") `    }
    if(price){
      sql += ` AND tp.client_price = ${price}` 
    }
    if(origin){
      sql += ` AND tp.origin LIKE "%${origin}%"` 
    }
    if(destination){
      sql += ` AND tp.destiny LIKE "%${destination}%"` 
    }
    sql += group

    if (filterByPrice){
      if(filterByPrice == "de mayor a menor precio"){
        let orderDesc = " ORDER BY client_price DESC"
        sql += orderDesc
      }
      else if(filterByPrice == "de menor a mayor precio"){
        let oderAsc = " ORDER BY client_price ASC"
        sql += oderAsc
      }
    }
    
    console.log("sqlfiltroossssss", sql);
    connection.query(sql ,(err, result) => {
      if(err){

        res.status(500).json(err)
      }else{

        let finalresult = result.map((e)=> ({...e,
          departure_date: e === null ? e.departure_date : e.departure_date.toString().split("G")[0],
          arrival_date: e === null ? e.arrival_date : e.arrival_date.toString().split("G")[0]}))
        
        res.status(200).json(finalresult)
      
      }
      
      
    })
    
    
  }

filterAllPlanesTobuy = ( req, res ) => {
    console.log("parammssssss", req.params.filtersTravel);
    const temp = JSON.parse(req.params.filtersTravel)
    const {company_name, price, departure_date, origin, destination, filterByPrice} = temp 
    console.log(company_name);
  
    let sql = "SELECT u.name,tp.destiny,tp.type, tp.origin, tp.client_price, tp.passenger, tp.travel_product_id, pt.company_name , pt.departure_date, pt.arrival_date FROM travel_product tp LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id JOIN user u ON u.user_id = tp.seller_user_id WHERE tp.is_deleted = 0 AND tp.admin_enabled = 0 and tp.buyer_user_id IS NULL and tp.type = 1"
    let group = " GROUP BY tp.travel_product_id "
    if(company_name){
      sql += ` AND pt.company_name LIKE "%${company_name}%"  ` 
    }
    if(departure_date){
      sql += ` AND pt.departure_date = "${departure_date}" `    
     
    }
    if(price){
      sql += ` AND tp.client_price = ${price}` 
    }
    if(origin){
      sql += ` AND tp.origin LIKE "%${origin}%"` 
    }
    if(destination){
      sql += ` AND tp.destiny LIKE "%${destination}%"` 
    }
    sql += group
  
    if (filterByPrice){
      if(filterByPrice == "de mayor a menor precio"){
        let orderDesc = " ORDER BY client_price DESC"
        sql += orderDesc
      }
      else if(filterByPrice == "de menor a mayor precio"){
        let oderAsc = " ORDER BY client_price ASC"
        sql += oderAsc
      }
    }
    
    console.log("sqlfiltroossssssplaneee", sql);
    connection.query(sql ,(err, result) => {
     if (err){
      res.status(500).json(err)
     } else{
  
        let finalresult = result.map((e)=> ({...e,
          departure_date: e === null ? e.departure_date : e.departure_date.toString().split("G")[0],
          arrival_date: e === null ? e.arrival_date : e.arrival_date.toString().split("G")[0]}))
        
        res.status(200).json(finalresult)
      
     }
      
    
    })
  }


  filterTrainsToBuy = (req, res) => {
    console.log(req.params.filtersTravel);
    const temp = JSON.parse(req.params.filtersTravel)
    const {company_name, price, departure_date, origin, destination, filterByPrice} = temp 
    console.log(company_name);

    let sql = "SELECT u.name,tp.destiny,tp.type, tp.origin, tp.client_price, tp.passenger, tp.travel_product_id, tt.company_name, tt.departure_date, tt.arrival_date FROM travel_product tp  LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id JOIN user u ON u.user_id = tp.seller_user_id WHERE tp.is_deleted = 0 AND tp.admin_enabled = 0 and tp.buyer_user_id IS NULL and tp.type = 2"
    let group = " GROUP BY tp.travel_product_id "
    if(company_name){
      sql += ` AND tt.company_name LIKE "%${company_name}%" ` 
    }
    if(departure_date){
      // sql += ` AND tt.departure_date = "${departure_date}" `    }
      sql += ` AND tt.departure_date = "${departure_date}" `    }

    if(price){
      sql += ` AND tp.client_price = ${price}` 
    }
    if(origin){
      sql += ` AND tp.origin LIKE "%${origin}%"` 
    }
    if(destination){
      sql += ` AND tp.destiny LIKE "%${destination}%"` 
    }
    sql += group

    if (filterByPrice){
      if(filterByPrice == "de mayor a menor precio"){
        let orderDesc = " ORDER BY client_price DESC"
        sql += orderDesc
      }
      else if(filterByPrice == "de menor a mayor precio"){
        let oderAsc = " ORDER BY client_price ASC"
        sql += oderAsc
      }
    }
    

    console.log("sqlFiltrosTRENES", sql);

    connection.query(sql ,(err, result) => {
      if(err){

        res.status(500).json(err)
      }else{
        
        let finalresult = result.map((e)=> ({...e,
          departure_date: e === null ? e.departure_date : e.departure_date.toString().split("G")[0],
          arrival_date: e === null ? e.arrival_date : e.arrival_date.toString().split("G")[0]}))
        
        res.status(200).json(finalresult)
      
      }
      
      
    
    })

  }

  //Controlador para realizar la compra de un viaje en venta
  buyOneTravel = (req, res) => {
    const {user_id, travel_id} = req.body
    let sql = `UPDATE travel_product
    SET buyer_user_id = ${user_id}
    WHERE travel_product_id = ${travel_id};` 
    connection.query(sql, (err, result)=>{
      err ? res.status(500).json(err) : res.status(200).json(result)
    })
  }

  editOneTravel = (req, res) => {
    console.log(req.body);
    const {travel_product_id} = req.body.ida
    const {original_price, commentaries, exchange_rate, client_price} = req.body.saveEditOnetravel

    let sql = `UPDATE travel_product SET original_price = ${parseFloat(original_price)}, commentaries = "${commentaries}", exchange_rate = ${parseFloat(exchange_rate)}, client_price = ${parseInt(client_price)} WHERE travel_product_id = ${travel_product_id}`

    connection.query(sql, (err, result) => {
      err ?
      res.status(500).json(err)
      :
      modifyTravel(travel_product_id),
      res.status(200).json(result)
    })
  }

}

module.exports = new TravelController();
