import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { SwapContext } from "../../context/SwapContext";
import "./viajes.scss";

export const Viajes = () => {
  // const { isLoged } = useContext(SwapContext);
  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  // const [showModalLogin, setShowModalLogin] = useState(false);
  const [planeButton, setPlaneButton] = useState(false);
  const [trainButton, setTrainButton] = useState(false);

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleImageClick = (iconType) => {
    setSelectedIcon(iconType);
    if (iconType === "avion") {
      setPlaneButton(true);
    } else if (iconType === "tren") {
      setTrainButton(true);
    }
  };
  // const handleClose = () => setShow(false);

  // const handleShow = () => setShow(true);

  // const handleCloseModalLogin = () => {
  //   setShowModalLogin(false);
  // };
  // const handleShowModalLogin = () => {
  //   setShowModalLogin(true);
  // };
  return (
    <>
      <Container fluid>
        {/* {
    //     !isLoged(
    //       <div className="container-sell d-flex flex-column py-5 border-0 align-items-center justify-content-center ">
    //         <h3 className="fs-3 fw-bold">
    //           1<sup>er</sup> paso
    //         </h3>
    //         <h2 className="text-center fw-bold">
    //           Crea o accede a tu cuenta para vender tus viajes
    //         </h2>
    //         <div className="btn-modal d-flex align-items-center justify-content-center">
    //           <Button oncl className="swapealo">
    //             Crear cuenta
    //           </Button>
    //           <Button className="swapealo">Acceder</Button>
    //         </div>
    //       </div>
    //     )
    //   } */}
      </Container>
      <Container fluid className="container-ticket">
        <Row className="justify-content-center py-5 border-0">
          <Col xs={12} className="d-flex justify-content-center">
            <h2 className="text-center">¿Qué quieres vender hoy?</h2>
          </Col>
        </Row>

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
            />
            <p>BILLETES DE TREN</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="sell-icon d-flex flex-column align-items-center"
          >
            <img src="/assets/images/bono.svg" alt="" />
            <p>BONOS DE VIAJE</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="sell-icon d-flex flex-column align-items-center"
          >
            <img src="/assets/images/alojamiento.svg" alt="" />
            <p>NOCHES DE HOTEL</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="sell-icon d-flex flex-column align-items-center"
          >
            <img src="/assets/images/vacacional.svg" alt="" />
            <p>PACKS VACACIONALES</p>
          </Col>
        </Row>

        {planeButton && (
          <>
            <hr />
            <h1 className="text-center title-form">
              Rellene los datos del billete de avión
            </h1>
            <Form>
              <Col md={6} xs={12}>

                
              </Col>
              <Col md={6} xs={12}></Col>
            </Form>
          </>
        )}
      </Container>
    </>
  );
};
