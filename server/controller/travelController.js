const connection = require("../config/db")


class TravelController {

  // Controlador de ruta get para mostrar todos los viajes a la venta (sin comprador) y admin_enabled sea igual a 0 
  getAllTravelsTobuy = (req, res) => {
    
    let sql = "SELECT tp.*, pt.*, tt.*, u_seller.name AS seller_name FROM travel_product tp LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id LEFT JOIN user u_seller ON tp.seller_user_id = u_seller.user_id WHERE tp.buyer_user_id IS NULL AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL) AND tp.admin_enabled = 0 AND tp.is_deleted = 0 ;"

    connection.query(sql, (err, respons) => {
      err?
        res.status(500).json("err")
        :
        res.status(200).json(respons)
    })

  }
}

module.exports = new TravelController()