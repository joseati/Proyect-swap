import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import "./onetravel.scss"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SwapContext } from '../../context/SwapContext';
import { EditOnePlane } from '../Ventas/EditOnePlane';
import { EditOneTrain } from '../Ventas/EditOneTrain';

export const OneTravel = () => {
  const navigate = useNavigate();
  const {travel_id} = useParams();
  const {user, isLoged} =useContext(SwapContext)
  //Estado para el seteo de la información que llegar por el context
  const [oneTravelSell, setOneTravelSell] = useState([]);
  // Estados para mostra los datos del viaje o el formulario de edición. 
  const [editing, setEditing] = useState(false)  
  const [showPlaneForm, setShowPlaneForm] =useState(false)
  const [showTrainForm, setShowTrainForm] =useState(false)
  const [like, setLike] = useState('heart1.svg')
  
  
  // Trae la información para mostrar de un viaje. 
  useEffect(()=>{
    axios
      .get(`http://localhost:4000/travels/getOneTravel/${travel_id}`)
      .then( (res) => {
        setOneTravelSell(res.data)
        console.log("RESSSSSSSS",res.data);
      } )
      .catch( (err) => console.log(err) )
  }, [])

  // Handle para abrir un formulario u otro dependiente del tipo de viaje. 
  const handleEditForm = () => {
    setEditing(true)
    if (oneTravelSell?.type === 1 ) {
      setShowPlaneForm(true)
      setShowTrainForm(false)
    } else if (oneTravelSell?.type === 2) {
      setShowPlaneForm(false)
      setShowTrainForm(true)
    }
  }

  // División de la información  que nos llega pera su tratamiente (pte de revisar)
  const ida = oneTravelSell[0];
  let vuelta = {};
  if (oneTravelSell.length !== 1){
    vuelta = oneTravelSell[1];
  } 

  //Borrar un viaje activo
  const deleteOneTravel = (travel_id) =>{
    
    axios
      .put(`http://localhost:4000/travels/deleteOneTravel/${travel.travel_id}`, {travel_id})
      .then((res)=>{
        setOneTravelSell([...oneTravelSell].filter((elem)=> elem.travel_id !== travel_id))
      })
      .catch((err) => console.log(err));
  }
      
  const isLiked = () => {
    if (user) {
      
      
      const {user_id} = user
      const travel_product_id =  parseInt(travel_id)
      console.log(travel_product_id)
    if (like === 'heart1.svg') {
      axios
    .post('http://localhost:4000/users/favoritos', {user_id, travel_product_id})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

      setLike('heart2.svg');
    } else {
      axios
    .post('http://localhost:4000/users/deleteFavoritos', {user_id, travel_product_id})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
      setLike('heart1.svg');
    }
    }
    
  };
  return (
    <Col>
    {/* DATOS PRINCIPALES VIAJE */}
    {!editing ? (   
          <>
            <Row className='section1OneTravel'>
            <Col md={4} xs={12} className='col1'>
            <img className='imgProduct' src="/assets/images/placeholder-avion.jpg" alt="avion" />
            </Col>
            <Col md={7} xs={12} className='colSection1OneTravel'>
            <h3>{ida?.origin} -{ida?.destiny} </h3>
            <h2>{ida?.client_price} €</h2>
            <h4>{ida?.original_price} €</h4>
            <p>Ofertado por: {ida?.user_name}</p>
            </Col>
            </Row>          
            <Row className='section2OneTravel'>
              <Col md={12} className='goTravel'>
                <h4>Vuelo de ida</h4>
                <Row className='rowCards'>
                  <Col >
                    <h5>{ida?.departure_date}</h5>
                    <h5>{ida?.departure_time}</h5>
                    <p></p>
                    <h5>{ida?.iata_code}</h5>
                  </Col>
                  <Col >
                  <hr  className='hrOneTravel' />
                  </Col>
                  <Col>
                    <h5>{ida?.arrival_date}</h5>
                    <h5>{ida?.arrival_time}</h5>
                    <p></p>
                    <h5>{vuelta?.iata_code}</h5>
                  </Col>
                </Row>
              </Col>
              <Col md={2} xs={0} ></Col>
              {oneTravelSell.length > 1 && (
              <Col md={12}  className='goTravel'>
                <h4>Vuelo de vuelta</h4>
                <Row className='rowCards'>
                  <Col>
                    <h5>{vuelta?.departure_date}</h5>
                    <h5>{vuelta?.departure_time}</h5>
                    <p></p>
                    <h5>{vuelta?.iata_code}</h5>
                  </Col>
                  <Col>
                  <hr className='hrOneTravel'/>
                  </Col>
                  <Col>
                    <h5>{vuelta?.arrival_date}</h5>
                    <h5>{vuelta?.arrival_time}</h5>
                    <p></p>
                    <h5>{ida?.iata_code}</h5>
                  </Col>
                </Row>
              </Col>
              )}
            {!isLoged &&
            <>
              <p>Para continuar tienes que tener una cuenta en Swap Your Travel.</p>
              <p><a href="">Acceder a tu cuenta</a> o <a href="">Registrate</a></p>
            </>
      }
            </Row>      
            {/* BOTONES */}
            <Row className='section3OneTravel'>
              <Col>
                  <Button onClick={()=>navigate(-1)}>VOLVER</Button>
              </Col>
              <Col>
                <Button onClick={isLiked}>GUARDAR
                <img
        className='like'
        src={`/assets/images/${like}`}
        alt="Imagen"
        onClick={isLiked}
        style={{ cursor: 'pointer' }}
      />
                </Button>
              </Col>
              <Col>
                <Button>SWAPEAR</Button>
              </Col>
              {/* {user && user?.user_id === user?.seller_user_id && ( */}
                <Col>
                  <Button onClick={handleEditForm} variant="warning">MODIFICAR</Button>
                </Col>
                <Col>
                  <Button onClick={()=>deleteOneTravel(travel)} variant="danger">ELIMINAR</Button>
                </Col>
              {/* )} */}
            </Row>
            {/* MAS INFORMACIÓN */}
            <Row className='section4OneTravel'>        
              <Col className='text-center'>
                <h5>Más información</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>DETALLES</Accordion.Header>
                      <Accordion.Body>
                      {ida?.commentaries}
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
          </>
        )  : (  
          <Row className='section2OneTravel'>
            <Col md={12} className='goTravel'>
              <h4>FORMULARIO DE EDICIÓN DE UN VIAJE</h4>             
                {showPlaneForm && <EditOnePlane />}                            
                <EditOnePlane/>                        
                {showTrainForm && <EditOneTrain/>}              
              <Row>
                <Col><Button onClick={()=>setEditing(false)}>VOLVER</Button></Col>
                <Col><Button variant="success">GUARDAR</Button></Col>
              </Row>
            </Col>        
          </Row>
        )  
    }
    </Col>
  );
}


