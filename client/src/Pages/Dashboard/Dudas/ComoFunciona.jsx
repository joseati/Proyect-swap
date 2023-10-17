import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./comofunciona.scss";

export const ComoFunciona = () => {
  return (
    <Col>
      <Row className="fondoCF mx-auto ">
        <Col xs={12} className="firstRow">
          <h1>Cómo Funciona</h1>
        </Col>
        <br />

        <Col xs={12} md={5}>
          <Card className="cardCF">
            <div className="hgroupCF">
              <h4>MUY FÁCIL,</h4>
              <h2>
                Sigue estos pasos si quieres{" "}
                <span className="spanWord">vender</span> un Viaje
              </h2>
              <h6>Bono, billete avión/tren, hotel, paquete vacacional…</h6>
            </div>
            <ol className="colored-list">
              <li>Crea tu cuenta en Swap Your Travel.</li>
              <li>Sube tu producto a la plataforma.</li>
              <li>
                {" "}
                Espera a que tu oferta sea comprada, firma la compraventa y haz
                el cambio de titularidad.
              </li>
              <li>
                Una vez transferido correctamente tu viaje al comprador
                recibirás el dinero cuando todo esté verificado por Swap Your
                Travel.
              </li>
              <li>Disfruta de tu dinero recuperado.</li>
            </ol>
            <br />
            <Button className="btnCF " href="/viajes">Véndelo</Button>
          </Card>
        </Col>
        <Col xs={12} md={5}>
          <Card className="cardCF">
            <div className="hgroupCF">
              <h4>MUY FÁCIL,</h4>
              <h2>
                Sigue estos pasos si quieres{" "}
                <span className="spanWord2">comprar</span> un Viaje
              </h2>
              <h6>Bono, billete avión/tren, hotel, paquete vacacional…</h6>
            </div>
            <ol className="colored-list">
              <li>Crea tu cuenta en Swap Your Travel.</li>
              <li>Compra el viaje que te interese y firma la compraventa.</li>
              <li>
                Espera que te llegue el ticket de viaje con tus datos
                (verificado por swap Your Travel).
              </li>
              <li>
                Revisa que todo está correcto y confírmalo a Swap Your Travel.
              </li>
              <li>Disfruta de tu viaje.</li>
            </ol>
            <br />
            <Button className="btnCF " href="/todosLosViajes">Cómpralo</Button>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
