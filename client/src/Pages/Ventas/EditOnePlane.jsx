import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./editOnePlane.scss"

const initialState = {
  origin:"", 
  destiny:"",
  passengers: "",
  commentaries: "",
  original_price:"",
  client_price:"",
  exchange_rate:"",
   // Valores insert de plane_product
  // travel_product_id: "", /* se tiene que rescatar en el back */
  plane_travel_id:"", /* 1 si es solo ida o 2 si es ida y vuelta */
  origin_airpoty_id:"", /* Se tendran que rescartar en el back tras una consulta en la tabla airpot con el company_name*/
  destiny_airpoty_id:"",
  departure_date:"", 
  departure_time:"",
  arrival_date:"",
  arrival_time:"",
  compani_name: "",
  // Informacion del vuelo de vuelta si lo hubiera
  // plane_travel_id:"", /*  2 si es ida y vuelta */
  origin_airpoty_id_tp2:"",
  destiny_airpoty_id_tp2:"",
  departure_date_tp2:"", 
  departure_time_tp2:"",
  arrival_date_tp2:"",
  arrival_time_tp2:"",
  compani_name_tp2: "",
}

export const EditOnePlane = () => {
  const [inputFormPlane, setinputFormPlane] = useState(initialState)

  // Traer y cargar la información que tenemos en la BBDD
  /* useEffect(()=>{
    //Pte definir nombre que llega de la data
    setinputFormPlane({
      ...inputFormPlane,
      origin: data ? data.origin: "", 
      destiny: data ? data.destiny: "",
      passengers:  data ? data.passengers: "",
      commentaries: data ? data.commentaries: "",
      original_price: data ? data.original_price: "",
      client_price: data ? data.client_price: "",
      exchange_rate: data ? data.exchange_rate: "",
      // Valores insert de plane_product
      // travel_product_id: "", // se tiene que rescatar en el back 
      // 1 si es solo ida o 2 si es ida y vuelta 
      plane_travel_id: data ? data.plane_travel_id: "",
      // Se tendran que rescartar en el back tras una consulta en la tabla airpot con el company_name
      origin_airpoty_id: data ? data.origin_airpoty_id: "",
      destiny_airpoty_id: data ? data.destiny_airpoty_id: "",
      departure_date: data ? data.departure_date: "",
      departure_time: data ? data.departure_time: "",
      arrival_date: data ? data.arrival_date: "",
      arrival_time: data ? data.arrival_time: "",
      compani_name: data ? data.compani_name: "",
    })
  },[]) 
  */

  //Controlar los inputs, división por tipos:
  const handleChange = (e) => {
    const { name, value } = e.target;
    if( e.target.type == "text" ){
      setinputFormPlane({
        ...inputFormPlane,
        [name]: value,
      });
      //type == select
      //type == date
      //type == time
    }}

  return (
    <Row >
      <Form className='d-flex'>      
          <Col md={6} xs={12} className="d-flex align-items-end flex-column p-4">
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Aeropuerto de salida (ciudad de origen)
              </Form.Label>
              <Form.Control
                placeholder= "nombre de ciudad de oirgen"
                name="origin"
                onChange={handleChange}
                // value={inputFormPlane.origin}
                className="custom-input">
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="origin_airpoty_id">
                  Elige Aeropuerto
              </Form.Label>
              <Form.Select
                name="origin_airpoty_id"
                onChange={handleChange}
                id="origin_airpoty_id"
                className="custom-input"
                // value={inputFormPlane.origin_airpoty_id}
                >
                {/* {airportCity?.map((e) => {
                  return(
                    <option  key={e.airport_id} 
                      value={e.airport_id}>{e.icao_code} - {e.name} - {e.city}
                    </option>
                  )})
                } */}               
              </Form.Select>
            </Form.Group>   
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Aeropuerto de llegada (ciudad de destino)
              </Form.Label>
              <Form.Control
                placeholder= "nombre de Ciudad de destino"
                name = "destiny"
                onChange={handleChange}
                // value={inputFormPlane.destiny}
                id="destiny"
                className="custom-input">
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="destiny_airpoty_id">
                  Elige Aeropuerto
              </Form.Label>
              <Form.Select
                name="destiny_airpoty_id"
                onChange={handleChange}
                id="destiny_airpoty_id"
                className="custom-input"
                // value={inputFormPlane.destiny_airpoty_id}
              >{/* {airportCityDestiny?.map((e) => {
                  return(
                    <option key={e.airport_id} value={e.airport_id}>
                      {e.icao_code} - {e.name} - {e.city}
                    </option>
                  )})} */}
               
              </Form.Select>
            </Form.Group>             
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_date">
                Fecha de ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_date"
                name="departure_date"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                // value={inputFormPlane.departure_date}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date">
                Fecha de Vuelta
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="arrival_date"
                name="arrival_date"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                // value={inputFormPlane.arrival_date}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="original_price">
                Precio original billete/persona(€)
              </Form.Label>
              <Form.Control
                name="original_price"
                className="custom-input"
                id="original_price"
                placeholder="Precio original billete/persona(€)"
                onChange={handleChange}
                // value={inputFormPlane.original_price}
              />
            </Form.Group>  
            <Form.Group>
              <Form.Label className="label" htmlFor="commentaries">
                Otras especificaciones
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="commentaries"
                id="commentaries"
                placeholder="Otras especificaciones"
                onChange={handleChange}
                // value={inputFormPlane.commentaries}
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="d-flex align-items-start flex-column p-4">
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="plane_travel_id">
                Tipo de billete{" "}
              </Form.Label>
              <Form.Select
                name="plane_travel_id"
                onChange={handleChange}
                id="plane_travel_id"
                className="custom-input"
                // value={inputFormPlane.plane_travel_id}
              >
                <option value="1">Ida</option>
                <option value="2">Ida y vuelta</option>
              </Form.Select>
            </Form.Group>
           {/* Fecha de vuelta si es ida y vuelta {console.log(shwoGoAndBack)} */}
          {/* {shwoGoAndBack && <> */}
            <Form.Label className="label" htmlFor="plane_travel_id">
               Informacion respecto al vuelo de vuelta
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Aeropuerto de salida 
              </Form.Label>
              <Form.Control
                placeholder= "nombre de ciudad de oirgen"
                name="origin"
                // onChange={handleChangeAirport_tp2}
                // value={inputFormPlane.origin}
                className="custom-input">
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="origin_airpoty_id_tp2">
                  Elige Aeropuerto
              </Form.Label>
              <Form.Select
                name="origin_airpoty_id_tp2"
                // onChange={handleChange}
                id="origin_airpoty_id_tp2"
                className="custom-input"
                // value={inputFormPlane.origin_airpoty_id_tp2}
              >{/* {airportCity_tp2?.map((e) => {
                  return(
                  <option  key={e.airport_id} value={e.airport_id}>
                    {e.icao_code} - {e.name} - {e.city}
                  </option>
                  )})}   */}             
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Aeropuerto de llegada 
              </Form.Label>
              <Form.Control
                placeholder= "nombre de Ciudad de destino"
                // name = "destiny"
                // onChange={handleChangeDestiny_tp2}
                // value={inputFormPlane.destiny}
                id="destiny_t"
                className="custom-input">
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="destiny_airpoty_id_tp2">
                Elige Aeropuerto
              </Form.Label>
              <Form.Select
                name="destiny_airpoty_id_tp2"
                // onChange={handleChange}
                id="destiny_airpoty_id_tp2"
                className="custom-input"
                // value={inputFormPlane.destiny_airpoty_id_tp2}
              >{/* {airportCityDestiny_tp2?.map((e) => {
                  return(
                    <option key={e.airport_id} value={e.airport_id}>
                      {e.icao_code} - {e.name} - {e.city}
                    </option>
                  )})}  */}              
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_time_tp2">
                Hora de salida- Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="arrival_time_tp2"
                id="arrival_time_tp2"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                // onChange={handleChange}
                // value={inputFormPlane.arrival_time_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_time_tp2">
                Hora de llegada - Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="departure_time_tp2"
                id="departure_time_tp2"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                // onChange={handleChange}
                // value={inputFormPlane.departure_time_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name_tp2">
                  Nombre de la compañia
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="compani_name_tp2"
                id="compani_name_tp2"
                placeholder="Nombre compañia"
                type="text"
                // onChange={handleChange}
                // value={inputFormPlane.compani_name_tp2}
              />
            </Form.Group>              
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_date_tp2">
                Fecha de ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_date_tp2"
                name="departure_date_tp2"
                placeholder="Fecha"
                type="date"
                // onChange={handleChange}
                // value={inputFormPlane.departure_date_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date_tp2">
                Fecha de Vuelta
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="arrival_date_tp2"
                name="arrival_date_tp2"
                placeholder="Fecha"
                type="date"
                // onChange={handleChange}
                // value={inputFormPlane.arrival_date_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_time">
                Hora de salida- Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="arrival_time"
                id="arrival_time"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                // onChange={handleChange}
                // value={inputFormPlane.arrival_time}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_time">
                Hora de llegada - Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="departure_time"
                id="departure_time"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                // onChange={handleChange}
                // value={inputFormPlane.departure_time}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name">
                  Nombre de la compañia
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="compani_name"
                id="compani_name"
                placeholder="Nombre compañia"
                type="text"
                // onChange={handleChange}
                // value={inputFormPlane.compani_name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="exchange_rate">
                Tasa de cambio de titularidad
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="exchange_rate"
                id="exchange_rate"
                placeholder="  Tasa de cambio de titularidad"
                type="text"
                // onChange={handleChange}
                // value={inputFormPlane.exchange_rate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="passengers">
                Nº de pasajeros
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="passengers"
                id="passengers"
                placeholder="Nº de pasajeros"
                type="text"
                // onChange={handleChange}
                // value={inputFormPlane.passengers}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="total_amount">
                Importe mínimo a recibir en total de todos los pasajeros. <br />{" "}
                (Precio Final) (€)
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="client_price"
                id="client_price"
                placeholder="Introduce la cantidad"
                type="text"
                // onChange={handleChange}
                // value={inputFormPlane.client_price}
              />
            </Form.Group>
          </Col>            
      </Form>
    </Row>
  )
}
