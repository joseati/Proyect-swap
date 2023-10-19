import  { useContext, useEffect, useState } from 'react'
import { Col, Card, Button, Row, CardFooter } from 'react-bootstrap'
import { getDate } from '../../Utils/getDateTime';
import './cardAllTravelsToBuy.scss'
import { Link } from 'react-router-dom';
import { SwapContext } from '../../context/SwapContext';
import axios from 'axios';





export const CardAllTravelsToBuy = ({travel, blockMsg, onUnlockTravel, onDeleteTravel}) => {
  const { user } = useContext(SwapContext)
  const [corazon, setCorazon] = useState(false)
  const [like, setLike] = useState('heart1.svg')

  let departure_date = 0
  let arrival_date = 0
  // Utilizamos una funcion de utils para separar la parte que no nos interesa y guardar la que nos interesa en una variable
  if(travel?.departure_date && travel?.arrival_date) {
    departure_date = getDate(travel?.departure_date)
    arrival_date = getDate(travel?.arrival_date)  
  }

    useEffect(()=>{
      if(user){
        const {user_id} = user
        const user_temp = JSON.stringify(user_id)
        axios
        .get(`http://localhost:4000/users/getFavoritos/${user_temp}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        const liked = localStorage.getItem('likedTravel_' + travel.travel_product_id);

        if (liked === 'true') {
          setLike('heart2.svg');
          setCorazon(true)
        }
      }     
    },[corazon, like])

  const isLiked = () => {
    if (user) {
      const {travel_product_id} = travel
      const {user_id} = user

      if (corazon === false) {
        axios
          .post('http://localhost:4000/users/favoritos', {user_id, travel_product_id})
          .then((res) => {
              setLike('heart2.svg');
              setCorazon(true)
              // Actualiza local storage para reflejar el like
              localStorage.setItem('likedTravel_' + travel_product_id, true);
            })
          .catch((err)=>console.log(err))
      } else if (corazon === true){
        axios
          .post('http://localhost:4000/users/deleteFavoritos', {user_id, travel_product_id})
          .then((res) => {
            setLike('heart1.svg');
            setCorazon(false)
            // Actualiza local storage para reflejar el like dislike
            localStorage.setItem('likedTravel_' + travel_product_id, false);
          })
          .catch((err)=>console.log(err))
        }
    }    
  };

  return (

    <Row className='cardPadre'>     
      <Col lg={12} className='bg-allTv allTravelsCard '>   
        <Card className={travel.type === 1 ? `card-All-Travels CardTravelsBorder` : `card-All-Trains CardTravelsBorder`}>
        {user?.type === 2 && travel.admin_enabled === 0 && 
        <Card.Header className='header-card cardBlackEffect'>
                        <Button
                          className="buttonn-admin-red"
                          onClick={() => onDeleteTravel(travel)}
                        >
                          Bloquear viaje
                        </Button>
        
        </Card.Header>}
        {user?.type === 2 && travel.admin_enabled === 1 && 
        <Card.Header className='header-card cardBlackEffect'>
                        <Button
                          className="buttonn-admin-green"
                          onClick={() => onUnlockTravel(travel)}
                        >
                          Desbloquear viaje
                        </Button>
        
        </Card.Header>}
        <div className='cardBlackEffect'>
        {user?.type === 1 && <img
              className='like'
              src={`/assets/images/${like}`}
              alt="Imagen"
              onClick={isLiked}
              style={{ cursor: 'pointer' }}
            />}
          <Card.Text className='marginLeft'>
            Ofertado por: 
          </Card.Text>
          <Card.Text className='marginLeft'>
            <span style={{fontWeight:"bold"}}>{travel?.name}</span>
          </Card.Text>
          <Card.Text className='marginLeft'>
            {travel?.company_name}
          </Card.Text>
          <Card.Body>
          <Card.Title> {travel?.origin} - {travel?.destiny} </Card.Title> 
          <Row className='d-flex flex-row dateCard'>   
            <Col xs={4} sm={4} md={4} xl={4} >
              <Card.Text>
              <span style={{fontWeight:"bold"}}>Fecha de ida:</span>
              </Card.Text>
              <Card.Text>
                {departure_date}
              </Card.Text>
            </Col>
            <Col xs={4} sm={4} md={4} xl={4}>
              <Card.Text>
              <span style={{fontWeight:"bold"}}>Fecha de vuelta:</span>
              </Card.Text>
              <Card.Text>
                {arrival_date}
              </Card.Text>
            </Col>
            <Col xs={4} sm={4} md={4} xl={4}>
              <Card.Text>
              <span style={{fontWeight:"bold"}}>Pasajeros :</span>
              </Card.Text>
              <Card.Text>
                {travel?.passenger}
              </Card.Text>
            </Col>  
          </Row>
          <Row>
          
            <Col >
            <Button className='Buttonn' style={{marginTop:"15px"}} variant="primary" >
            <Link  to={`/oneTravel/${travel.travel_product_id}`} className='buttonCardsTravel'>Ver más</Link>
          </Button>
            </Col>
            
            <Col className='d-flex align-items-end justify-content-end'>
            <Card.Text>
               <span style={{fontSize: "30px", fontWeight: 700}}>{travel?.client_price} € </span> 
              </Card.Text>
            </Col>
          </Row>
          
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
