import React, { useContext, useEffect } from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'
import { getDate } from '../../Utils/getDateTime';
import { Link } from 'react-router-dom';



export const CardAllTravelsToBuy = ({travel}) => {
   
  let departure_date = 0
  let arrival_date = 0
  // Utilizamos una funcion de utils para separar la parte que no nos interesa y guardar la que nos interesa en una variable
  if(travel?.departure_date && travel?.arrival_date) {
  departure_date = getDate(travel?.departure_date)
  arrival_date = getDate(travel?.arrival_date)
  
}







  
//  console.log("Una tarjeta", travel)
  return (
    
    <Col lg={5} className='bg-allTv'>
      
 <Card className='card-All-Travels'   >
 <Card.Text>
     Ofertado por: 
   </Card.Text>

  <Card.Text>
     {travel.name}
   </Card.Text>
   <Card.Text>
     {travel.company}
   </Card.Text>
 <Card.Body>
   <Card.Title> {travel.destiny} - {travel?.origin} </Card.Title>
 
   <Row className='d-flex flex-row dateCard'>   
    <Col xs={3}>
  <Card.Text>
    Fecha de ida:
  </Card.Text>
  <Card.Text>
    {departure_date}
  </Card.Text>

      </Col>
      <Col xs={3}>
      <Card.Text>
  Fecha de vuelta:
  </Card.Text>
  <Card.Text>
  {arrival_date}
  </Card.Text>
      </Col>
      <Col xs={3}>
  <Card.Text>
     Pasajeros :
   </Card.Text>
   <Card.Text>
     {travel.passenger}
   </Card.Text>
      </Col>

  </Row>
    
   
  <Button variant="primary">
  <Link to={`/oneTravel/${travel.travel_product_id}`}>Ver más</Link>
</Button>
 </Card.Body>
</Card>
     

    </Col>
    
  )
}
