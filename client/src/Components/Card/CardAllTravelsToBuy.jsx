import React, { useContext, useEffect, useState } from 'react'
import { Col, Card, Button, Row, CardFooter } from 'react-bootstrap'
import { getDate } from '../../Utils/getDateTime';
import './cardAllTravelsToBuy.scss'
import { Link } from 'react-router-dom';
import { SwapContext } from '../../context/SwapContext';
import axios from 'axios';




export const CardAllTravelsToBuy = ({travel, blockMsg}) => {
   const { user } = useContext(SwapContext)
   const [corazon, setCorazon] = useState(false)

  let departure_date = 0
  let arrival_date = 0
  // Utilizamos una funcion de utils para separar la parte que no nos interesa y guardar la que nos interesa en una variable
  if(travel?.departure_date && travel?.arrival_date) {
  departure_date = getDate(travel?.departure_date)
  arrival_date = getDate(travel?.arrival_date)
  
}

    useEffect(()=>{
      const user_temp = JSON.stringify(user)
       axios
       .get(`http://localhost:4000/users/getFavoritos/${user_temp}`)
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))
       const liked = localStorage.getItem('likedTravel_' + travel.travel_product_id);

  if (liked === 'true') {
    setLike('heart2.svg');
    setCorazon(true)
  }
  
    },[])

  const [like, setLike] = useState('heart1.svg')

  const isLiked = () => {
    if (user) {
      console.log(user)
      console.log(travel)
      const {travel_product_id} = travel
      const {user_id} = user

    if (corazon === false) {
      axios
    .post('http://localhost:4000/users/favoritos', {user_id, travel_product_id})
    .then((res) => {
        console.log(res);
        setLike('heart2.svg');
        setCorazon(true)
        // Update local storage to reflect the like
        localStorage.setItem('likedTravel_' + travel_product_id, true);
      })
    .catch((err)=>console.log(err))

    } else if (corazon === true){
      axios
    .post('http://localhost:4000/users/deleteFavoritos', {user_id, travel_product_id})
    .then((res) => {
      console.log(res);
      setLike('heart1.svg');
      setCorazon(false)
      // Update local storage to reflect the dislike
      localStorage.setItem('likedTravel_' + travel_product_id, false);
    })
    .catch((err)=>console.log(err))
    }
    }
    
  };
   console.log(like)
  
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
    <Col xs={12} sm={4} md={4} xl={4} >
  <Card.Text>
    <h6>Fecha de ida:</h6>
  </Card.Text>
  <Card.Text>
    {departure_date}
  </Card.Text>

      </Col>
      <Col xs={12} sm={4} md={4} xl={4}>
      <Card.Text>
   <h6>Fecha de vuelta:</h6>
  </Card.Text>
  <Card.Text>
  {arrival_date}
  </Card.Text>
      </Col>
      <Col xs={12} sm={4} md={4} xl={4}>
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
 {user?.type === 2 && travel.admin_enabled == 1 && <CardFooter>
  
    <h4 style={{color: 'red', fontWeight:'bold', textAlign: 'end'}}>Bloqueado</h4>
  </CardFooter>}

  {user?.type === 2 &&  travel.admin_enabled == 0 &&  <CardFooter>
  
  <h4 style={{color: 'green', fontWeight:'bold',  textAlign: 'end'}}>Disponible</h4>
  </CardFooter>}

  </div>
</Card>
     

    </Col>
   
    </Row>
    
    
  )
}
