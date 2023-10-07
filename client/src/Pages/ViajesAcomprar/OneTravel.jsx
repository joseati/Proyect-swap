import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import "./onetravel.scss"
// import { SwapContext } from '../../context/SwapContext';
// import { useParams } from 'react-router-dom';
import { getDate } from '../../Utils/getDateTime';
import axios from 'axios';

export const OneTravel = () => {
  const [oneTravelSell, setOneTravelSell] = useState([]);
  const travel_id = 16;
  const ida = oneTravelSell[0];
  let vuelta = {};
  if (oneTravelSell.length !== 1){
    vuelta = oneTravelSell[1];
  }


  // const {allTravelsToBuy} = useContext(SwapContext)
  // const {travel_id} = useParams;
  // Se filtra el viaje correspondiente al travel_id
  // const selectedTravel = allTravelsToBuy.find((travel) => travel.travel_id === travel_id);

  useEffect(()=>{
    axios
      .get(`http://localhost:4000/travels/getOneTravel/${travel_id}`)
      .then( (res) => {
        setOneTravelSell(res.data)
      } )
      .catch( (err) => console.log(err) )
  }, [])

  // console.log("ONE TRAVELLLLL", oneTravelSell)
  console.log("IIIIIIDDDDDDAAAAAAA", ida)
  console.log("VVVVVUUUUUUEEEEELLLLTTTTTAAAA", vuelta)
  // if (!selectedTravel) {
  //   // Manejar el caso si no se encuentra el viaje con el ID proporcionado
  //   return (
  //     <div>
  //       <p>El viaje no se encontró o no existe.</p>
  //     </div>
  //   );
  // }
  // console.log(selectedTravel);
  
  return (
    <Col>
       <Row>
        <Col md={4} xs={12}>
        <img className='imgProduct' src="/assets/images/placeholder-avion.jpg" alt="avion" />
        </Col>
        <Col md={7} xs={12}>
        <h3>{ida?.origin} -{ida?.destiny} </h3>
        <h2>{ida?.client_price} €</h2>
        <h4>{ida?.original_price} €</h4>
        <p>Ofertado por: {ida?.user_name}</p>
        </Col>
      </Row> 
      <Row className='section2OneTravel'>
        <Col md={5} ms={12} className='goTravel'>
          <h4>Tu vuelo de ida</h4>
          <Row>
            <Col>
              <h5>{getDate(ida?.departure_date)}</h5>
              <h5>{ida?.departure_time}</h5>
              <p></p>
              <h5>{ida?.departure_time}</h5>
            </Col>
            <Col>
            <hr />
            </Col>
            <Col>
              <h5>{getDate(ida?.arrival_date)}</h5>
              <h5>{ida?.arrival_time}</h5>
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
              <h5>{getDate(vuelta?.departure_date)}</h5>
              <h5>{vuelta?.departure_time}</h5>
              <p></p>
              <h5>{vuelta?.iata_code}</h5>
            </Col>
            <Col>
            <hr />
            </Col>
            <Col>
              <h5>{getDate(vuelta?.arrival_date)}</h5>
              <h5>{vuelta?.arrival_time}</h5>
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
  );
}


