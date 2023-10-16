import { Row, Col, Form } from "react-bootstrap";
export const TrainForm = ({handleChangeTrainStationDestiny_tp2,  trainStationDestiny_tp2,trainStationCity_tp2, trainStationCityDestiny,handleChangeTrainStation_tp2,handleChangeTrainStationDestiny,handleChangeTrainStation,  trainStation, shwoGoAndBack,handleChange, inputFormTrain }) => {
  return (
    <Form>
      <Row>
        <Col md={6} xs={12} className="d-flex align-items-end flex-column">
       {/*  ------------ */}
       <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Estacion de salida (ciudad de origen)
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de origen..."
                name="origin"
                onChange={handleChangeTrainStation}
                value={inputFormTrain.origin}
                className="custom-input">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="origin_trainStation_id">
                  Elige estación
              </Form.Label>
              <Form.Select
                name="origin_trainStation_id"
                onChange={handleChange}
                id="origin_trainStation_id"
                className="custom-input"
                value={inputFormTrain.origin_trainStation_id}
              >{
                trainStation?.map((e) => {

                  return(
                    <option key={e.train_station_id} 
                 
                    value={e.train_station_id}> {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
             
            
            {/* -------------------- */}
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Estacion de llegada (ciudad de destino)
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de destino..."
                name = "destiny"
                onChange={handleChangeTrainStationDestiny}
                value={inputFormTrain.destiny}
                id="destiny"
                className="custom-input">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="destiny_trainStation_id">
                  Elige estación
              </Form.Label>
              <Form.Select
                name="destiny_trainStation_id"
                onChange={handleChange}
                id="destiny_trainStation_id"
                className="custom-input"
                value={inputFormTrain.destiny_trainStation_id}
              >{
                trainStationCityDestiny ?.map((e) => {

                  return(
                    <option key={e.train_station_id} 
                 
                    value={e.train_station_id}> {e.name} - {e.city}</option>
                  )
                })
              }
               
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
                value={inputFormTrain.departure_date}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date">
                Fecha de vuelta
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="arrival_date"
                name="arrival_date"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormTrain.arrival_date}
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
                value={inputFormTrain.original_price}
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
                value={inputFormTrain.commentaries}
              />
            </Form.Group>
     
 
          </Col>
          <Col md={6} xs={12} className="d-flex align-items-start flex-column">
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="train_travel_id">
                Tipo de billete{" "}
              </Form.Label>
              <Form.Select
                name="train_travel_id"
                onChange={handleChange}
                id="train_travel_id"
                className="custom-input"
                value={inputFormTrain.train_travel_id}
              >
                <option value="1">Ida</option>
                <option value="2">Ida y vuelta</option>
              </Form.Select>
            </Form.Group>
        
 {/* Fecha de vuelta si es ida y vuelta */}{console.log(shwoGoAndBack)}
 {shwoGoAndBack && <>
  <Form.Label className="label" htmlFor="plane_travel_id">
               Información respecto al vuelo de vuelta
              </Form.Label>
              <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="">
                Estación de salida 
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de origen..."
                // name="origin"
                onChange={ handleChangeTrainStation_tp2}
                // value={inputFormPlane.origin}
                className="custom-input">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="origin_trainStation_id_tp2">
                  Elige estación
              </Form.Label>
              <Form.Select
                name="origin_trainStation_id_tp2"
                onChange={handleChange}
                id="origin_trainStation_id_tp2"
                className="custom-input"
                value={inputFormTrain.origin_trainStation_id_tp2}
              >{
                trainStationCity_tp2?.map((e) => {

                  return(
                    <option key={e.train_station_id} 
                 
                    value={e.train_station_id}> {e.name} - {e.city}</option>
                  )
                })
              }
               
              </Form.Select>
              </Form.Group>
             
            
            {/* -------------------- */}
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="destiny">
                Estación de llegada 
              </Form.Label>
              <Form.Control
              placeholder= "Ciudad de destino..."
                // name = "destiny"
                onChange={handleChangeTrainStationDestiny_tp2}
                // value={inputFormPlane.destiny}
                id="destiny_t"
                className="custom-input">
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label className="label" htmlFor="destiny_trainStation_id_tp2">
                  Elige estación
              </Form.Label>
              <Form.Select
                name="destiny_trainStation_id_tp2"
                onChange={handleChange}
                id="destiny_trainStation_id_tp2"
                className="custom-input"
                value={inputFormTrain.destiny_trainStation_id_tp2}
              >{
                trainStationDestiny_tp2?.map((e) => {

                  return(
                  <option key={e.train_station_id} 
                 
                  value={e.train_station_id}> {e.name} - {e.city}</option>
                  )
                })
              }
               
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
                onChange={handleChange}
                value={inputFormTrain.arrival_time_tp2}
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
                onChange={handleChange}
                value={inputFormTrain.departure_time_tp2}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name_tp2">
                  Nombre de la compañía
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="compani_name_tp2"
                id="compani_name_tp2"
                placeholder="Compañía"
                type="text"
                onChange={handleChange}
                value={inputFormTrain.compani_name_tp2}
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
                onChange={handleChange}
                value={inputFormTrain.departure_date_tp2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_date_tp2">
                Fecha de vuelta
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="arrival_date_tp2"
                name="arrival_date_tp2"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
                value={inputFormTrain.arrival_date_tp2}
              />
            </Form.Group>
            </>}
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
                onChange={handleChange}
                value={inputFormTrain.arrival_time}
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
                onChange={handleChange}
                value={inputFormTrain.departure_time}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label className="label" htmlFor="compani_name">
                  Nombre de la compañía
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="compani_name"
                id="compani_name"
                placeholder="Compañía"
                type="text"
                onChange={handleChange}
                value={inputFormTrain.compani_name}
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
                onChange={handleChange}
                value={inputFormTrain.exchange_rate}
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
                onChange={handleChange}
                value={inputFormTrain.passengers}
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
                onChange={handleChange}
                value={inputFormTrain.client_price}
              />
            </Form.Group>    
        </Col>
      </Row>
    </Form>
  );
};
