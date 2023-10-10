import React, { useContext, useEffect, useState } from 'react'
import { Col, Card, Button, Row, CardFooter } from 'react-bootstrap'
import { getDate } from '../../Utils/getDateTime';
import './cardAllTravelsToBuy.scss'
import { Link } from 'react-router-dom';
import { SwapContext } from '../../context/SwapContext';




export const CardAllTravelsToBuy = ({travel, blockMsg}) => {
   
  let departure_date = 0
  let arrival_date = 0
  // Utilizamos una funcion de utils para separar la parte que no nos interesa y guardar la que nos interesa en una variable
  if(travel?.departure_date && travel?.arrival_date) {
  departure_date = getDate(travel?.departure_date)
  arrival_date = getDate(travel?.arrival_date)
  
}

  const { user } = useContext(SwapContext)

  const [like, setLike] = useState('heart1.svg')


  const isLiked = () => {
    if (like === 'heart1.svg') {
      setLike('heart2.svg');
    } else {
      setLike('heart1.svg');
    }
  };


  
//  console.log("Una tarjeta", travel)

  return (

    <Row className='cardPadre'>
     
       <Col lg={12} className='bg-allTv allTravelsCard '>
      
      
 <Card className='card-All-Travels CardTravelsBorder'   >
   <div className='cardBlackEffect'>
   <img
        className='like'
        src={`/assets/images/${like}`}
        alt="Imagen"
        onClick={isLiked}
        style={{ cursor: 'pointer' }}
      />
 <Card.Text className='marginLeft'>
     Ofertado por: 
   </Card.Text>

  <Card.Text className='marginLeft'>
     <h6>{travel.name}</h6>
   </Card.Text>
   <Card.Text>
     {travel.company}
   </Card.Text>
 <Card.Body>
   <Card.Title> {travel.destiny} - {travel?.origin} </Card.Title>
 
   <Row className='d-flex flex-row dateCard'>   
    <Col xs={12} sm={3} md={4} xl={3} >
  <Card.Text>
    <h6>Fecha de ida:</h6>
  </Card.Text>
  <Card.Text>
    {departure_date}
  </Card.Text>

      </Col>
      <Col xs={12} sm={3} md={4} xl={3}>
      <Card.Text>
   <h6>Fecha de vuelta:</h6>
  </Card.Text>
  <Card.Text>
  {arrival_date}
  </Card.Text>
      </Col>
      <Col xs={12} sm={3} md={4} xl={3}>
  <Card.Text>
      <h6>Pasajeros :</h6>
   </Card.Text>
   <Card.Text>
     {travel.passenger}
   </Card.Text>
      </Col> 
      
      

  </Row>
    
   
  <Button variant="primary" >
  <Link to={`/oneTravel/${travel.travel_product_id}`} className='buttonCardsTravel'>Ver más</Link>
</Button>
 </Card.Body>
 {user?.type === 2 && blockMsg && <CardFooter>
  
    <h4 style={{color: 'red', fontWeight:'bold', textAlign: 'end'}}>Bloqueado</h4>
  </CardFooter>}

  {user?.type === 2 && !blockMsg &&  <CardFooter>
  
  <h4 style={{color: 'green', fontWeight:'bold',  textAlign: 'end'}}>Disponible</h4>
  </CardFooter>}

  </div>
</Card>
     

    </Col>
   
    </Row>
    
    
  )
}
