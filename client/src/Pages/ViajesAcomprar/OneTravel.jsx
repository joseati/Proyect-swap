import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import "./onetravel.scss"

export const OneTravel = () => {
  // Estado para almacenar los datos del viaje
  const [travelData, setTravelData] = useState({}); 
  
  // Trae la información de la BBDD de ese único vista.
  /* useEffect(()=>{
    axios
      .get(`http://localhost:4000/users/editUser/${travel_id}`)
      .then((response) => 
        setTravelData(response.data)
      )
      .catch((err) => console.log(err))
  }) */
  return (
    <Col>
      <Row>
        <Col md={4} xs={12}>
        <img className='imgProduct' src="assets/images/placeholder-avion.jpg" alt="avion" />
        </Col>
        <Col md={7} xs={12}>
        <h3>Malaga - Barcelona </h3>
        <h2>204.00€</h2>
        <h4>346.00€</h4>
        <p>Ofertado por</p>
        </Col>
      </Row>
      <Row className='section2OneTravel'>
        <Col md={5} ms={12} className='goTravel'>
          <h4>Tu vuelo de ida</h4>
          <Row>
            <Col>
              <h5>06/10/2023</h5>
              <h5>11:25:00</h5>
              <p></p>
              <h5>AGP</h5>
            </Col>
            <Col>
            <hr />
            </Col>
            <Col>
              <h5>06/10/2023</h5>
              <h5>11:25:00</h5>
              <p></p>
              <h5>AGP</h5>
            </Col>
          </Row>
        </Col>
        <Col md={2} xs={0} ></Col>
        <Col md={5} ms={12} className='goTravel'>
          <h4>Tu vuelo de vuelta</h4>
          <Row>
            <Col>
              <h5>06/10/2023</h5>
              <h5>11:25:00</h5>
              <p></p>
              <h5>AGP</h5>
            </Col>
            <Col>
            <hr />
            </Col>
            <Col>
              <h5>06/10/2023</h5>
              <h5>11:25:00</h5>
              <p></p>
              <h5>AGP</h5>
            </Col>
          </Row>
        </Col>
        <p>Para continuar tienes que tener una cuenta en Swap Your Travel.</p>
        <p><a href="">Acceder a tu cuenta</a> o <a href="">Registrate</a></p>
      </Row>
      <Row className='section3OneTravel'>
        <Col>
          <Button>GUARDAR</Button>
        </Col>
        <Col>
          <Button>SWAPEAR</Button>
        </Col>
      </Row>
      <Row className='section4OneTravel'>        
        <Col className='text-center'>
          <h5>Más información</h5>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>DETALLES</Accordion.Header>
                <Accordion.Body>
                Solo incluye equipaje de mano: 1x Bolsa pequeña (40 cm x 20 cm x 25 cm). Asiento aleatorio. Clase turista.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>ENVIO</Accordion.Header>
                <Accordion.Body>
                Se te enviará, vía SMS, el contrato por Click&Sign y recibirás los detalles al correo electrónico facilitado.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </Col>
      </Row>
      <Row className='section5OneTravel'>        
      </Row>
    </Col>
  )
}
/* 
Pte colocar campos. 

Para incorporar: 
- routes > travels.js:
// http://localhost:4000/travels/getOneTravel/:travel_id
router.get("/getOneTravel/:travel_id", TravelController.getOneTravel);

- travelController: 
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
 */
