import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export const ComoFunciona = () => {
  return (
    <Row>
      <Col className="text-center">
        <h1>Cómo Funciona</h1>
      </Col>
      <br />
      <Row className="gap-5">
        <Col xs={12} md={5}>
          <h4>MUY FÁCIL,</h4>
          <h3>
            Sigue estos pasos si quieres <span>vender</span> un Viaje
          </h3>
          <p>Bono, billete avión/tren, hotel, paquete vacacional…</p>
          <hr />
          <ol>
            <li> Crea tu cuenta en Swap Your Travel.</li>
            <li> Sube tu producto a la plataforma.</li>
            <li>
              Espera a que tu oferta sea comprada, firma la compraventa y haz el
              cambio de titularidad.
            </li>
            <li>
              Una vez transferido correctamente tu viaje al comprador recibirás
              el dinero cuando todo esté verificado por Swap Your Travel.
            </li>
            <li>Disfruta de tu dinero recuperado.</li>
          </ol>
          <br />
          <Button>Véndelo</Button>
        </Col>
        <Col xs={12} md={5}>
          <h4>MUY FÁCIL,</h4>
          <h3>
            Sigue estos pasos si quieres <span>comprar</span> un Viaje
          </h3>
          <p>Bono, billete avión/tren, hotel, paquete vacacional…</p>
          <hr />
          <ol>
            <li> Crea tu cuenta en Swap Your Travel.</li>
            <li> Compra el viaje que te interese y firma la compraventa.</li>
            <li>
              Espera que te llegue el ticket de viaje con tus datos (verificado
              por swap Your Travel).
            </li>
            <li>
              Revisa que todo está correcto y confírmalo a Swap Your Travel.
            </li>
            <li>Disfruta de tu viaje.</li>
          </ol>
          <br />
          <Button>Cómpralo</Button>
        </Col>
      </Row>
    </Row>
  );
};
