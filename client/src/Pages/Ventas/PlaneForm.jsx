import { Row, Col, Form } from "react-bootstrap";

export const PlaneForm = ({handleChangeAirport_tp2,airportCity_tp2, airportCityDestiny_tp2,handleChangeDestiny_tp2 ,airportCityDestiny ,airportCity,handleChangeAirport , shwoGoAndBack, handleChange,handleChangeDestiny, inputFormPlane }) => {


  return (
    <>
      <Form>
        <Row className="row-col-plane">
          <Col md={6} xs={12} className="col-plane-1">
            <Row>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Aeropuerto de salida (ciudad de origen)
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de origen..."
                name="origin"
                onChange={handleChangeAirport}
                value={inputFormPlane.origin}
                maxLength={199}
                className="input-formulario">
              </Form.Control>
              </Form.Group>
              
              <Form.Group>
              <Form.Label className="label" htmlFor="origin_airpoty_id">
                  Elige el aeropuerto de salida - Ida
              </Form.Label>
              <Form.Select
                name="origin_airpoty_id"
                onChange={handleChange}
                id="origin_airpoty_id"
                className="input-formulario"
                value={inputFormPlane.origin_airpoty_id}
              >{
                airportCity?.map((e) => {

                  return(
                  <option  key={e.airport_id} 
                  
                  value={e.airport_id}>{e.icao_code} - {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
             
            
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Aeropuerto de llegada (ciudad de destino)
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de destino..."
                name = "destiny"
                onChange={handleChangeDestiny}
                value={inputFormPlane.destiny}
                id="destiny"
                maxLength={150}
                className="input-formulario">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="destiny_airpoty_id">
                  Elige el aeropuerto de llegada - Ida
              </Form.Label>
              <Form.Select
                name="destiny_airpoty_id"
                onChange={handleChange}
                id="destiny_airpoty_id"
                className="input-formulario"
                value={inputFormPlane.destiny_airpoty_id}
              >{
                airportCityDestiny?.map((e) => {

                  return(
                  <option key={e.airport_id} 
                 
                  value={e.airport_id}>{e.icao_code} - {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
             
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_date">
                Fecha de salida - Ida
              </Form.Label>
              <Form.Control
                className="input-formulario"
                id="departure_date"
                name="departure_date"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormPlane.departure_date}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date">
                Fecha de llegada - Ida
              </Form.Label>
              <Form.Control
                className="input-formulario"
                id="arrival_date"
                name="arrival_date"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormPlane.arrival_date}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="original_price">
                Precio original billete/persona(€)
              </Form.Label>
              <Form.Control
                name="original_price"
                className="input-formulario"
                id="original_price"
                maxLength={9}
                placeholder="Precio original billete/persona(€)"
                onChange={handleChange}
                value={inputFormPlane.original_price}
              />
            </Form.Group>
            
           
        
            <Form.Group>
              <Form.Label className="label" htmlFor="commentaries">
                Otras especificaciones
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="commentaries"
                id="commentaries"
                maxLength={299}
                placeholder="Otras especificaciones"
                onChange={handleChange}
                value={inputFormPlane.commentaries}
              />
            </Form.Group>
            </Row>
          </Col>
          <Col md={6} xs={12} className="col-plane-2">
            <Row>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="plane_travel_id">
                Tipo de billete{" "}
              </Form.Label>
              <Form.Select
                name="plane_travel_id"
                onChange={handleChange}
                id="plane_travel_id"
                className="input-formulario"
                value={inputFormPlane.plane_travel_id}
              >
                <option value="1">Ida</option>
                <option value="2">Ida y vuelta</option>
              </Form.Select>
            </Form.Group>
        
 {/* Fecha de vuelta si es ida y vuelta */}{console.log(shwoGoAndBack)}
 {shwoGoAndBack && <>
  <Form.Label style={{fontSize:"25px", fontWeight:"700"}} className="label" htmlFor="plane_travel_id">
               Información del vuelo de vuelta
              </Form.Label>
              <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Aeropuerto de salida 
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de origen..."
                onChange={handleChangeAirport_tp2}
                className="input-formulario">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="origin_airpoty_id_tp2">
                  Elige el aeropuerto de salida - Ida
              </Form.Label>
              <Form.Select
                name="origin_airpoty_id_tp2"
                onChange={handleChange}
                id="origin_airpoty_id_tp2"
                className="input-formulario"
                value={inputFormPlane.origin_airpoty_id_tp2}
              >{
                airportCity_tp2?.map((e) => {

                  return(
                  <option  key={e.airport_id} 
                  
                  value={e.airport_id}>{e.icao_code} - {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
             
            
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Aeropuerto de llegada 
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de destino..."
                onChange={handleChangeDestiny_tp2}
                id="destiny_t"
                className="input-formulario">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="destiny_airpoty_id_tp2">
                  Elige el aeropuerto de llegada - Vuelta
              </Form.Label>
              <Form.Select
                name="destiny_airpoty_id_tp2"
                onChange={handleChange}
                id="destiny_airpoty_id_tp2"
                className="input-formulario"
                value={inputFormPlane.destiny_airpoty_id_tp2}
              >{
                airportCityDestiny_tp2?.map((e) => {

                  return(
                  <option key={e.airport_id} 
                 
                  value={e.airport_id}>{e.icao_code} - {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="arrival_time_tp2">
                Hora Salida-Vuelta
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="arrival_time_tp2"
                id="arrival_time_tp2"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.arrival_time_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_time_tp2">
                Hora Llegada-Vuelta 
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="departure_time_tp2"
                id="departure_time_tp2"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.departure_time_tp2}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name_tp2">
                  Nombre de la compañía de vuelta
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="compani_name_tp2"
                id="compani_name_tp2"
                maxLength={90}
                placeholder="Nombre compañía"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.compani_name_tp2}
              />
              </Form.Group>
              
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_date_tp2">
                Fecha de salida - Vuelta
              </Form.Label>
              <Form.Control
                className="input-formulario"
                id="departure_date_tp2"
                name="departure_date_tp2"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormPlane.departure_date_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date_tp2">
                Fecha de llegada - Vuelta
              </Form.Label>
              <Form.Control
                className="input-formulario"
                id="arrival_date_tp2"
                name="arrival_date_tp2"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormPlane.arrival_date_tp2}
              />
            </Form.Group>
            </>}
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_time">
                Hora Salida - Ida
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="arrival_time"
                id="arrival_time"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.arrival_time}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_time">
                Hora LLegada - Ida
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="departure_time"
                id="departure_time"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.departure_time}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name">
                  Nombre de la compañía de ida
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="compani_name"
                id="compani_name"
                placeholder="Nombre compañía"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.compani_name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="exchange_rate">
                Tasa de cambio de titularidad
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="exchange_rate"
                id="exchange_rate"
                placeholder="  Tasa de cambio de titularidad"
                maxLength={9}
                type="text"
                onChange={handleChange}
                value={inputFormPlane.exchange_rate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="passengers">
                Nº de pasajeros
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="passengers"
                id="passengers"
                maxLength={150}
                placeholder="Nº de pasajeros"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.passengers}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="total_amount">
                Importe mínimo a recibir en total de todos los pasajeros. <br />{" "}
                (Precio final) (€)
              </Form.Label>
              <Form.Control
                className="input-formulario"
                name="client_price"
                id="client_price"
                placeholder="Introduce la cantidad"
                type="text"
                maxLength={9}
                onChange={handleChange}
                value={inputFormPlane.client_price}
              />
            </Form.Group>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};
