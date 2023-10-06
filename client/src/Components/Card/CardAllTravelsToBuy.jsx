import React, { useContext, useEffect } from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'



export const CardAllTravelsToBuy = ({travel}) => {
console.log(travel);

  let departure_date = 0

  if(travel?.departure_date ) {
  // const [fecha, hora ] = travel?.departure_date.split("T")
   departure_date = travel?.departure_date.slice(0,10)
  console.log(departure_date);
}

let arrival_date = 0
if(travel?.arrival_date){
 arrival_date = travel?.arrival_date.slice(0,10)

}




  

  return (
    
    <Col lg={5} className='bg-allTv'>
      
 <Card className='card-All-Travels'   >
 <Card.Text>
     Ofertado por: 
   </Card.Text>

  <Card.Text>
     {travel.seller_name}
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
    
   
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>
     

    </Col>
    
  )
}
