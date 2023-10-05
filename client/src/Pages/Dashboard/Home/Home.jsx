import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './home.scss'
export const Home = () => {
  return (
    <Col>
      <Row className='homeSection1'>
       <Col className='homeCol1' >
        <div className='homesubCol1'>
          <h2>¿Tienes un viaje que no vas a disfrutar?</h2>
        <h5>¡RECUPERA TU DINERO!</h5>
        <Button className='boton'>SWAPEALO</Button>
        </div>
        
       </Col>
       <Col className='homeCol1'>
       <img src="/assets/images/fondo-1.png" alt="" />
       </Col>
      </Row>

      <Row className='homeSection2'>
        <Col className='homeSectionCol1'>
        <h2>Últimos Swaps añadidos</h2>
        <h4>SWAPEA Y CONOCE MUNDO AL MEJOR PRECIO</h4>
        <Row>
          <Col>
          
          </Col>
          <a href="">Ver más</a>
        </Row>
        </Col>
        <Row className='homeSubSection1'>
          <Col className='homeSubCol1'>
          <h2>¿No encuentras lo que buscas?</h2>
          <Button className='botonSubSection1'>Vente aquí</Button>
          </Col>
        </Row>
        
      </Row>
      <Row className='homeSection3' >
        <Col className='iconosHome' xs={6} xl={2} >
        <a href="">
          <img src="/assets/images/avion1.svg" alt="" />
        </a>
        <a href="">Billetes de avión</a>
        </Col>
        <Col className='iconosHome' xs={6} xl={2}>
        <a href="">
          <img src="/assets/images/bono.svg" alt="" />
        </a>
        <a href="">Bonos de viaje</a>
        </Col>
        <Col className='iconosHome' xs={6} xl={2}>
        <a href="">
          <img src="/assets/images/tren.svg" alt="" />
        </a>
        <a href="">Billetes de tren</a>
        </Col>
        <Col className='iconosHome' xs={6} xl={2}>
        <a href="">
          <img src="/assets/images/alojamiento.svg" alt="" />
        </a>
        <a href="">Estancias de hotel</a>
        </Col>
        <Col className='iconosHome' xs={6} xl={2}>
        <a href="">
          <img src="/assets/images/vacacional.svg" alt="" />
        </a>
        <a href="">Paquetes vacacionales</a>
        </Col>
      </Row>

    </Col>
  )
}
