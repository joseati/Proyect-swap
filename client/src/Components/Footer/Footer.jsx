import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Row>
          <Col>
            <h4 className="title-col">SOMOS SWAP YOUR TRAVEL</h4>
            <p>¿Quiénes somos?</p>
            <p>Cómo funciona?</p>
            <p>Preguntas frecuentes</p>
            <p>Blog</p>
            <p>Contacto</p>
          </Col>
          <Col>
            <h4 className="title-col">LEGAL</h4>
            <p>Aviso Legal</p>
            <p>Política de privacidad</p>
            <p>Política de cookies</p>
            <p>Política de cookies</p>
            <p>Claúsula de consentimiento</p>
            <p>Advertencia</p>
          </Col>

          <Col>
            <div className="d-flex align-items-end justify-content-end">
              <img
                className="square-logo"
                src="/assets/images/swapframe.png"
                alt=""
              />
            </div>
            <ul className="ul-redes-footer mt-4">
              <li className="iconStyle">
                <a
                  href="https://www.linkedin.com/company/swap-your-travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="iconInnerStyle" />
                </a>
              </li>
              <li className="iconStyle">
                <a
                  href="https://www.instagram.com/swapyourtravel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="iconInnerStyle" />
                </a>
              </li>
              <li className="iconStyle">
                <a
                  href="https://www.facebook.com/swapyourtravel/?ti=as"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="iconInnerStyle" />
                </a>
              </li>
              <li className="iconStyle">
                <a
                  href="https://twitter.com/swapyourtravel_?t=_h-pGGkDhUWe7C7v-JQtfw&amp;s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="iconInnerStyle" />
                </a>
              </li>
            </ul>
            <h3 className="title-swap">
              Marketplace para comprar y vender viajes con seguridad 2023
            </h3>
          </Col>
        </Row>
        <Row>
          <Row>
            <div className="legal">
              <h4 className="title-footer">POLÍTICAS LEGALES</h4>
              <p>Aviso legal</p>
              <p>Políticas de privacidad</p>
              <p>Políticas de cookies</p>
              <p>Cláusula de consentimiento</p>
              <p>Advertencia</p>
            </div>
          </Row>
          <div className="rights">
            <p className="rights-text">2023 © Todos los derechos reservados</p>
          </div>
        </Row>
      </Container>
      <Row className="justify-content-center">
        <Col className="d-flex align-items-center justify-content-end">
          <p className="p-footer">Con el apoyo de: </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <img
            src="./assets/images/lanzadera.png"
            alt="lanzadera"
            className="lanzadera-img"
          />
          <img
            src="./assets/images/minerva.png"
            alt="minerva"
            className="minerva-img"
          />
        </Col>
      </Row>
      
    </>
    
  );
};
