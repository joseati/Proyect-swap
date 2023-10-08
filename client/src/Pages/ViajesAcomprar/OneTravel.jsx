import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import "./onetravel.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SwapContext } from '../../context/SwapContext';

export const OneTravel = () => {
  // const {travel_id} = useParams;
  const {user, isLoged} =useContext(SwapContext)
  // console.log("USER REGISTRADO", user)
  const travel_id = 16;

  const [oneTravelSell, setOneTravelSell] = useState([]);
  
  const ida = oneTravelSell[0];
  let vuelta = {};
  if (oneTravelSell.length !== 1){
    vuelta = oneTravelSell[1];
  } 

  // console.log("Esto es vueltaaa", vuelta);
  useEffect(()=>{
    axios
      .get(`http://localhost:4000/travels/getOneTravel/${travel_id}`)
      .then( (res) => {
        setOneTravelSell(res.data)
      } )
      .catch( (err) => console.log(err) )
  }, [])

  // console.log("ONE TRAVELLLLL", oneTravelSell)
  // console.log("IIIIIIDDDDDDAAAAAAA", ida)
  // console.log("VVVVVUUUUUUEEEEELLLLTTTTTAAAA", vuelta)
    
  return (
    <Col>
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
        {Object.keys(vuelta).length > 0 && (
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
    </Col>
  );
}


