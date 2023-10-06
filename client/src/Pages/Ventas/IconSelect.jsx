import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./viajes.scss";
export const IconSelect = ({ selectedIcon, handleImageClick }) => {
  return (
    <>
      <Row className="tickets-sell justify-content-center">
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center ${
            selectedIcon === "avion" ? "selected" : ""
          }`}
        >
          <img
            src="/assets/images/avion1.svg"
            alt=""
            onClick={() => handleImageClick("avion")}
            style={{ cursor: "pointer" }}
          />

          <p>BILLETES DE AVIÓN</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center ${
            selectedIcon === "tren" ? "selected" : ""
          }`}
        >
          <img
            src="/assets/images/tren.svg"
            alt=""
            onClick={() => handleImageClick("tren")}
            style={{ cursor: "pointer" }}
          />
          <p>BILLETES DE TREN</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className="sell-icon d-flex flex-column align-items-center"
        >
          <img
            src="/assets/images/bono.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />

          <p>BONOS DE VIAJE</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className="sell-icon d-flex flex-column align-items-center"
        >
          <img
            src="/assets/images/alojamiento.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <p>NOCHES DE HOTEL</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className="sell-icon d-flex flex-column align-items-center"
        >
          <img
            src="/assets/images/vacacional.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />

          <p>PACKS VACACIONALES</p>
        </Col>
      </Row>
    </>
  );
};
