import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './home.scss'
export const Home = () => {
  return (
    <Col>
      <Row className='homeSection1'>
       <Col className='homeCol1'>
        <h2>¿Tienes un viaje que no vas a disfrutar?</h2>
        <h5>¡RECUPERA TU DINERO!</h5>
        <Button className='boton'>SWAPEALO</Button>
       </Col>
       <Col>
       <img src="/assets/images/fondo-1.png" alt="" />
       </Col>
      </Row>

    </Col>
  )
}
