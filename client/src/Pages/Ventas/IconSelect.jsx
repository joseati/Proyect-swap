import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./viajes.scss";
export const IconSelect = ({ selectedIcon, handleImageClick }) => {
  return (
    <>

      <div className="div-icons d-flex align-items-center justify-content-center mt-4 text-center">
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center justify-content-between ${
            selectedIcon === "avion" ? "selected" : ""
          }`}
        >
          <img
            src="/assets/images/avion1.svg"
            alt="avion"
            onClick={() => handleImageClick("avion")}
            style={{ cursor: "pointer",width:"80px", height:"70px" }}
          />
          <p style={{marginTop:"10px"}}>BILLETES DE AVIÓN</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center justify-content-between ${
            selectedIcon === "tren" ? "selected" : ""
          }`}
        >
          <img
            src="/assets/images/tren.svg"
            alt="tren"
            onClick={() => handleImageClick("tren")}
            style={{ cursor: "pointer",width:"80px", height:"70px" }}
          />
          <p style={{marginTop:"10px"}}>BILLETES DE TREN</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center justify-content-between `}
        >
          <img
              src="/assets/images/bono.svg"
              alt="bono"
            style={{ cursor: "pointer",width:"80px", height:"70px"}}
          />
          <p style={{marginTop:"10px"}}>BONOS DE VIAJE</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center justify-content-between`}
        >
          <img
             src="/assets/images/alojamiento.svg"
             alt="alojamiento"
            style={{ cursor: "pointer",width:"80px", height:"70px"}}
          />
          <p style={{marginTop:"10px"}}>NOCHES DE HOTEL</p>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={2}
          className={`sell-icon d-flex flex-column align-items-center justify-content-between`}
        >
          <img
            src="/assets/images/vacacional.svg"
            alt="vacacional"
            style={{ cursor: "pointer",width:"80px", height:"70px" }}
          />
          <p style={{marginTop:"10px"}}>PACKS VACACIONALES</p>
        </Col>
      </div>
  </>
  );
};
