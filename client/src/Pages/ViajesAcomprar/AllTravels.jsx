import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Button, Row, Form, Container, FormGroup, FormLabel, FormControl, FormSelect, Accordion, Card } from 'react-bootstrap';
import { SwapContext } from '../../context/SwapContext';
import "./allTravelsstyle.scss";
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy';

export const AllTravels = () => {

 const {allTravelsToBuy} = useContext(SwapContext)


  return (
    <>
    <Container fluid>
      <Row>
      <p>Tipos de Swap</p>
      </Row>
      <Row className='filter-type d-flex'>
        <Col lg={2} xs={12} className="text-center">
      <img src="/assets/images/avion1.svg" alt="" />
      <p>BILLETES DE AVIÓN </p>
      </Col>
      <Col lg={2} xs={12} className="text-center">
      <img src="/assets/images/tren.svg" alt="" />
      <p>BILLETES DE TREN </p>
      </Col>
      <Col lg={2} xs={12} className="text-center">

      <img src="/assets/images/bono.svg" alt="" />
      <p>BONOS DE VIAJE </p>
      </Col>
      <Col lg={2} xs={12} className="text-center">

      <img src="/assets/images/alojamiento.svg" alt="" />
      <p>NOCHES DE HOTEL </p>
      </Col>
      <Col lg={2} xs={12} className="text-center">

      <img src="/assets/images/vacacional.svg" alt="" />
      <p>PACKS VACACIONALES </p>
      </Col>
    


      </Row>


      
    </Container>
      <Col className='pt-4' lg={2} xs={12}>
        <Row className='bg'>
          <Container className="mt-4">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtros</Accordion.Header>
        <Accordion.Body>
        <Form className="mt-3">
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel><img src="/assets/images/airline.png" alt="" /> Compañía:</FormLabel>
                                <FormControl type="text" placeholder="Compañía" id="company" />
                            </FormGroup>
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel> <img src="/assets/images/arrivals.png" alt="" /> Precio de venta:</FormLabel>
                                <FormControl type="number" placeholder="Precio" id="salePrice" />
                            </FormGroup>
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel><img src="/assets/images/calendar(1).png" alt="" /> Fecha salida:</FormLabel>
                                <FormControl type="date" id="departureDate" />
                            </FormGroup>
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel><img src="/assets/images/departures.png" alt="" /> Origen:</FormLabel>
                                <FormControl type="text" placeholder="Origen" id="origin" />
                            </FormGroup>
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel> <img src="/assets/images/arrivals.png" alt="" /> Destino:</FormLabel>
                                <FormControl type="text" placeholder="Destino" id="destination" />
                            </FormGroup>
                            <FormGroup className="mb-3 filters-label">
                                <FormLabel> <img src="/assets/images/discount.png" alt="" /> Descuento:</FormLabel>
                                <FormSelect id="discount">
                                    <option value="50">Elija el descuento</option>
                                    <option value="50">Más de 50%</option>
                                    <option value="40">De 40 a 50 %</option>
                                    <option value="30">De 30 a 40 %</option>
                                    <option value="20">De 20 a 30 %</option>
                                    <option value="10">De 10 a 20 %</option>
                                    <option value="0">De 0 a 10 %</option>
                                </FormSelect>
                            </FormGroup>
                            <Button className='btn-filter'>Aplicar filtros</Button>
                        </Form>
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
          </Container>
        </Row>
      </Col>
      
      <Col>
        {allTravelsToBuy?.map((travel, i) => (
          <Row key={i}>
            <CardAllTravelsToBuy travel={travel} />
          </Row>
        ))}
      </Col>
    </>
  );
}
