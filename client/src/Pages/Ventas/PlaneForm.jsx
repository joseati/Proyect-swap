import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./viajes.scss"

export const PlaneForm = () => {
  return (
    <>
      <Form>
        <Row>
          <Col md={6} xs={12} className="d-flex align-items-center flex-column">
            <Form.Group>
              <Form.Label className="label" htmlFor="air_company">
                Compañía aérea
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="air_company"
                placeholder="Compañía..."
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="departure_airport">
                Aeropuerto de salida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_airport"
                placeholder="Elija el aeropuerto de salida"
                type="select"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_date">
                Fecha de ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_date"
                placeholder="Fecha"
                type="date"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="original_price">
                Precio original billete/persona(€)
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="original_price"
                placeholder="Precio original billete/persona(€)"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="canSellIndividually">
                Si en la reserva hay más de un billete,
                <br /> ¿es posible venderlos individualmente?
              </Form.Label>
              <Form.Select className="custom-select" id="canSellIndividually">
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
                id="telephone"
                placeholder="Introduce el teléfono"
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="last_name">
                Apellidos del vendedor
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="last_name"
                placeholder=" Apellidos..."
                type="text"
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
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="type">
                Tipo de billete{" "}
              </Form.Label>
              <Form.Select id="type" className="custom-select">
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
                id="arrival_airport"
                placeholder="Elija el aeropuerto de llegada"
                type="text"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="label" htmlFor="arrival_hour">
                Hora de salida- Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="arrival_hour"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="departure_hour">
                Hora de llegada - Ida
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="departure_hour"
                placeholder="Elija el aeropuerto de llegada"
                type="time"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="label" htmlFor="rate_type">
                Tipo de tarifa{" "}
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="rate_type"
                placeholder="Tipo de tarifa"
                type="text"
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="number_of_passengers">
                Nº de pasajeros
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="number_of_passengers"
                placeholder="Nº de pasajeros"
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="number_of_passengers">
                Importe mínimo a recibir en total de todos los pasajeros.(Tasa
                incluida)(€)
              </Form.Label>
              <Form.Control
                className="custom-input"
                id="number_of_passengers"
                placeholder="Introduce la cantidad"
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};
