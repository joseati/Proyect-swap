import { Row, Col, Form } from "react-bootstrap";

export const PlaneForm = ({ handleChange, inputFormPlane }) => {
  return (
    <>
      <Form>
        <Row>
          <Col md={6} xs={12} className="d-flex align-items-end flex-column">
            <Form.Group>
              <Form.Label className="label" htmlFor="air_company">
                Compañía aérea
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="air_company"
                id="air_company"
                placeholder="Compañía..."
                onChange={handleChange}
                value={inputFormPlane.air_company}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="departure_airport">
                Aeropuerto de salida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_airport"
                name="departure_airport"
                placeholder="Elija el aeropuerto de salida"
                type="select"
                onChange={handleChange}
                value={inputFormPlane.departure_airport}
              />
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
                value={inputFormPlane.departure_date}
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
                value={inputFormPlane.original_price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="canSellIndividually">
                Si en la reserva hay más de un billete,
                <br /> ¿es posible venderlos individualmente?
              </Form.Label>
              <Form.Select
                name="canSellIndividually"
                onChange={handleChange}
                className="custom-input"
                id="canSellIndividually"
              >
                <option value="yes">Sí</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="telephone">
                Teléfono
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="telephone"
                id="telephone"
                placeholder="Introduce el teléfono"
                onChange={handleChange}
                value={inputFormPlane.telephone}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="commentaries">
                Otras especificaciones
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="commentaries"
                id="telephone"
                placeholder="Otras especificaciones"
                onChange={handleChange}
                value={inputFormPlane.commentaries}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="name">
                Nombre del vendedor
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="name"
                id="name"
                placeholder="Nombre..."
                type="text"
                onChange={handleChange}
                value={inputFormPlane.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="last_name">
                Apellidos del vendedor
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="last_name"
                id="last_name"
                placeholder=" Apellidos..."
                type="text"
                onChange={handleChange}
                value={inputFormPlane.last_name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="email">
                Email del vendedor
              </Form.Label>
              <Form.Control
                name="email"
                className="custom-input"
                id="email"
                placeholder=" Email..."
                type="text"
                onChange={handleChange}
                value={inputFormPlane.email}
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="d-flex align-items-start flex-column">
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="ticketType">
                Tipo de billete{" "}
              </Form.Label>
              <Form.Select
                name="ticketType"
                onChange={handleChange}
                id="ticketType"
                className="custom-select"
              >
                <option value="ida">Ida</option>
                <option value="idaYVuelta">Ida y vuelta</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_airport">
                Aeropuerto de llegada (IDA)
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="arrival_airport"
                id="arrival_airport"
                placeholder="Elija el aeropuerto de llegada"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.arrival_airport}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_hour">
                Hora de salida- Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="arrival_hour"
                id="arrival_hour"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.arrival_hour}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_hour">
                Hora de llegada - Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="departure_hour"
                id="departure_hour"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
                onChange={handleChange}
                value={inputFormPlane.departure_hour}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="label" htmlFor="rate_type">
                Tipo de tarifa{" "}
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="rate_type"
                id="rate_type"
                placeholder="Tipo de tarifa"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.rate_type}
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
                value={inputFormPlane.exchange_rate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="number_of_passengers">
                Nº de pasajeros
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="number_of_passengers"
                id="number_of_passengers"
                placeholder="Nº de pasajeros"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.number_of_passengers}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="total_amount">
                Importe mínimo a recibir en total de todos los pasajeros. <br />{" "}
                (Tasa incluida) (€)
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="total_amount"
                id="total_amount"
                placeholder="Introduce la cantidad"
                type="text"
                onChange={handleChange}
                value={inputFormPlane.total_amount}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};
