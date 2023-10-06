const connection = require("../config/db");

class TravelController {

  getAllTravelsTobuy = (req, res) => {
    let sql = "SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"
    connection.query(sql, (err, respons) => {
      err ? res.status(500).json("err") : res.status(200).json(respons);
    });
  }


   getOneTravel= (req, res)=>{
    const {travel_id} = req.params

    let sql = `SELECT tp.*, u.*, pt.*, a_origin.*, a_destination.* FROM travel_product AS tp 
      JOIN user AS u ON tp.seller_user_id = u.user_id 
      JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
      LEFT JOIN airport AS a_origin ON pt.origin_airport_id = a_origin.airport_id
      LEFT JOIN airport AS a_destination ON pt.destination_airport_id = a_destination.airport_id
    WHERE tp.travel_product_id = ${travel_id};`
    connection.query(sql, (err, resul)=>{
      err ?
        res.status(500).json("err")
        :
        res.status(200).json(resul)
    })
  } 


}

module.exports = new TravelController();
