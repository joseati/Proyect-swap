const connection = require("../config/db")


class TravelController {

  // Controlador de ruta get para mostrar todos los viajes a la venta (sin comprador) y admin_enabled sea igual a 0 
  getAllTravelsTobuy = (req, res) => {
    
    let sql = "SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;"

    connection.query(sql, (err, respons) => {
      err?
        res.status(500).json("err")
        :
        res.status(200).json(respons)
    })

  }
  sellTrables = ( req, res ) => {
      // 
  //   const {
  //     air_company,
  //     departure_airport,
  //     departure_date,
  //     original_price,
  //     canSellIndividually,
  //     telephone,
  //     commentaries,
  //     name,
  //     last_name,
  //     email,
  //     ticketType,
  //     arrival_airport,
  //     arrival_hour,
  //     departure_hour,
  //     rate_type,
  //     exchange_rate,
  //     number_of_passengers,
  //     total_amount,
  //   } = req.body.inputFormPlane;
  //   let sql = `INSERT INTO plane_tickets (air_company, departure_airport, departure_date, original_price, canSellIndividually, telephone, commentaries, name, last_name, email, ticketType, arrival_airport, arrival_hour, departure_hour, rate_type, exchange_rate, number_of_passengers, total_amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;  //   connection.query(sql, (err, result)=>{
  // //     err?
  // //         res.status(400).json(err)
  // //         :
  // //         res.status(200).json(result)
  // // })
  // // }
  }
}

module.exports = new TravelController()