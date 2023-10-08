const connection = require("../config/db");
const express= require("express")
const { json } = require("express");

class TravelController {

  getAllTravelsTobuy = (req, res) => {
    let sql = "SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
    connection.query(sql, (err, respons) => {
      if(err){
        console.log(err)
      }
      else{
        res.status(200).json(respons)
        if(!respons || !respons.length){
          let sqlPlane = " SELECT tp.*, pt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, user WHERE ( tp.travel_product_id = pt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
          connection( sqlPlane,(err2,resultPlane) => {
            if(err2){
              console.log(err2);
            }else{
              res.status(200).json(respons)
              if(!resultPlane || !resultPlane.length){
                let sqlTrain = "SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
                connection.query(sqlTrain, (err3, resultTrain) => {
                  err?
                   res.status(500).json(err3)
                   :
                   res.status(200).json({resultTrain})
                })
              }
            }
          })
        }
       
      }
    });
  }


   getOneTravel= (req, res)=>{
    const {travel_id} = req.params

    let sql = `SELECT tp.*, u.name as user_name, u.user_id, pt.*, a_origin.*, a_destination.* FROM travel_product AS tp 
    JOIN user AS u ON tp.seller_user_id = u.user_id 
    JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
    LEFT JOIN airport AS a_origin ON pt.origin_airport_id = a_origin.airport_id
    LEFT JOIN airport AS a_destination ON pt.destination_airport_id = a_destination.airport_id
  WHERE tp.travel_product_id = ${travel_id};`
    connection.query(sql, (err, resul)=>{
      err ?
        res.status(500).json("err")
        // console.log(err)
        :
        res.status(200).json(resul)
        // console.log(resul);
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

  sellOnePlaneTravel = ( req, res ) => {
    console.log(req.body);
    const { origin, destiny,passengers, commentaries, original_price, client_price, exchange_rate, plane_travel_id, origin_airpoty_id, destiny_airpoty_id, departure_date, departure_time, arrival_date,  arrival_time, compani_name } = req.body.inputFormPlane
    const {user_id} = req.body
    
   console.log(origin);
 

    let sqlTravelProduct = `INSERT INTO travel_product(type, origin, destiny, passenger, commentaries, seller_user_id, original_price, client_price, exchange_rate   ) VALUES (1, "${origin}","${destiny}","${parseInt(passengers)}","${commentaries}",${user_id},${parseFloat(original_price)},${parseFloat(client_price)},${parseFloat(exchange_rate)})`

    console.log(sqlTravelProduct);

    connection.query( sqlTravelProduct, (err, resultTravel ) => {
     if(err){
      console.log(err)
     }else{
      const { insertId } = resultTravel
      console.log( insertId );
      if(resultTravel ){

        if (!plane_travel_id || plane_travel_id == "1"){
          let sqlPlaneTravel = `INSERT INTO plane_travel (travel_product_id, plane_travel_id, origin_airport_id, destination_airport_id, departure_date, departure_time, arrival_date, arrival_time, company_name ) VALUES (${insertId}, 1, ${parseInt(origin_airpoty_id)},${parseInt(destiny_airpoty_id)}, "${departure_date}", "${departure_time}", "${arrival_date}", "${arrival_time}", "${compani_name}" )`
          console.log(sqlPlaneTravel);
          connection.query( sqlPlaneTravel, (err2, resultPlaneform) => {
            err2 ?
             res.status(500).json("err2")
             :
             res.status(200).json({resultTravel, resultPlaneform})
          })
        }
      }
     }

      
     
    })

    
   

  }
}

module.exports = new TravelController();
