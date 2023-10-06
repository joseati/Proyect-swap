const connection = require("../config/db");

class TravelController {

  getAllTravelsTobuy = (req, res) => {
    let sql = "SELECT tp.*, pt.*, tt.*, u_seller.name AS seller_name FROM travel_product tp LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id LEFT JOIN user u_seller ON tp.seller_user_id = u_seller.user_id WHERE tp.buyer_user_id IS NULL AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL) AND tp.admin_enabled = 0 AND tp.is_deleted = 0 ;";
    connection.query(sql, (err, respons) => {
      err ? res.status(500).json("err") : res.status(200).json(respons);
    });
  }

  sellPlaneTicket = (req, res) => {
    const {
      air_company,
      departure_airport,
      departure_date,
      original_price,
      canSellIndividually,
      telephone,
      commentaries,
      name,
      last_name,
      email,
      ticketType,
      arrival_airport,
      arrival_hour,
      departure_hour,
      rate_type,
      exchange_rate,
      number_of_passengers,
      total_amount,
    } = req.body;
    
    let sql = `INSERT INTO plane_tickets (air_company, departure_airport, departure_date, original_price, canSellIndividually, telephone, commentaries, name, last_name, email, ticketType, arrival_airport, arrival_hour, departure_hour, rate_type, exchange_rate, number_of_passengers, total_amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    connection.query(sql, (err, result) => {
      err ? res.status(500).json(err) : res.status(200).json(result);
    });
  }


  sellTrainTicket = (req, res) => {
    const {
      train_type,
      rate_type,
      train_destination,
      original_price,
      canSellIndividually,
      telephone,
      commentaries,
      type,
      number_of_passengers,
      train_origin,
      train_date,
      exchange_rate,
      price_receive,
      name,
      last_name,
      email
    } = req.body;
    
    let sql = `INSERT INTO train_tickets (train_type, rate_type, train_destination, original_price, canSellIndividually, telephone, commentaries, type, number_of_passengers, train_origin, train_date, exchange_rate, price_receive, name, last_name, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    connection.query(sql, (err, result) => {
      err ? res.status(500).json(err) : res.status(200).json(result);
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
