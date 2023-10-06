import { Row, Col, Form } from "react-bootstrap";
export const TrainForm = ({ handleChange, inputFormTrain }) => {
  return (
    <Form>
      <Row>
        <Col md={6} xs={12} className="d-flex align-items-end flex-column">
          <Form.Group>
            <Form.Label className="label" htmlFor="train_type">
              Tipo de tren
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="train_type"
              placeholder="Tipo de tren..."
              onChange={handleChange}
              name="train_type"
              value={inputFormTrain.train_type}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="rate_type">Tipo de tarifa</Form.Label>
            <Form.Control
              className="custom-input"
              id="rate_type"
              placeholder="Tarifa..."
              type="text"
              onChange={handleChange}
              name="rate_type"
              value={inputFormTrain.rate_type}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="train_destination">
              Destino del tren{" "}
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="train_destination"
              placeholder="Destino del tren"
              type="text"
              onChange={handleChange}
              name="train_destination"
              value={inputFormTrain.train_destination}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="original_price">
              Precio original billete(€)
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="original_price"
              placeholder="Precio original billete(€)"
              onChange={handleChange}
              name="original_price"
              value={inputFormTrain.original_price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label" htmlFor="canSellIndividually">
              Si en la reserva hay más de un billete,
              <br /> ¿es posible venderlos individualmente?
            </Form.Label>
            <Form.Select className="custom-input" id="canSellIndividually">
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label className="label" htmlFor="telephone">
             préfijo y Teléfono
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="telephone"
              placeholder="Introduce el préfijo y el teléfono"
              name="telephone"
              onChange={handleChange}
              value={inputFormTrain.telephone}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="commentaries">
              Otras especificaciones
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="telephone"
              placeholder="Otras especificaciones"
              name="commentaries"
              onChange={handleChange}
              value={inputFormTrain.telephone}
            />
          </Form.Group>
        </Col>
        <Col md={6} xs={12} className="d-flex align-items-start flex-column">
          <Form.Group className="mb-3">
            <Form.Label className="label" htmlFor="type">
              Tipo de billete
            </Form.Label>
            <Form.Select id="type" className="custom-select">
              <option value="ida">Ida</option>
              <option value="idaYVuelta">Ida y vuelta</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="number_of_passengers">
              Nº de pasajeros
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="number_of_passengers"
              placeholder="Pasajeros..."
              type="text"
              name="number_of_passengers"
              onChange={handleChange}
              value={inputFormTrain.number_of_passengers}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="label" htmlFor="train_origin">
              Origen del tren
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="train_origin"
              placeholder="Origen del tren"
              type="text"
              name="train_origin"
              onChange={handleChange}
              value={inputFormTrain.train_origin}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="train_date">
              Fecha del viaje
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="train_date"
              type="date"
              name="train_date"
              onChange={handleChange}
              value={inputFormTrain.train_date}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="label" htmlFor="exchange_rate">
              Tasa de cambio de titularidad
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="exchange_rate"
              placeholder="  Tasa de cambio de titularidad"
              type="text"
              name="exchange_rate"
              value={inputFormTrain.exchange_rate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="label" htmlFor="price_receive">
              Importe mínimo a recibir
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="price_receive"
              placeholder="Importe mínimo a recibir"
              type="text"
              name="price_receive"
              onChange={handleChange}
              value={inputFormTrain.price_receive}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="name">
              Nombre del vendedor
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="name"
              placeholder="Nombre..."
              type="text"
              name="name"
              value={inputFormTrain.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="last_name">Apellidos del vendedor</Form.Label>
            <Form.Control
              className="custom-input"
              id="last_name"
              placeholder=" Apellidos..."
              type="text"
              onChange={handleChange}
              name="last_name"
              value={inputFormTrain.last_name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label" htmlFor="email">
              Email del vendedor
            </Form.Label>
            <Form.Control
              className="custom-input"
              id="email"
              placeholder=" Email..."
              type="text"
              name="email"
              value={inputFormTrain.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
