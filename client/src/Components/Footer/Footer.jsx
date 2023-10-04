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
            <h4 className="title">SOMOS SWAP YOUR TRAVEL</h4>
            <p>¿Quiénes somos?</p>
            <p>Cómo funciona?</p>
            <p>Preguntas frecuentes</p>
            <p>Blog</p>
            <p>Contacto</p>
          </Col>
          <Col>
            <h4 className="title">LEGAL</h4>
            <p>Aviso Legal</p>
            <p>Política de privacidad</p>
            <p>Política de cookies</p>
            <p>Política de cookies</p>
            <p>Claúsula de consentimiento</p>
            <p>Advertencia</p>
          </Col>

          <Col>
            <img
              src="./assets/images/lanzadera.png"
              alt="lanzadera"
              className="lanzadera"
            />
            <img
              src="./assets/images/minerva.png"
              alt="minerva"
              className="minerva"
            />
          </Col>
          <ul className="ul-redes-footer">
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
        </Row>
        <Row>
          <Row>
            <div className="legal">
              <h4 className="title-footer">Políticas Legales</h4>
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
    </>
  );
};
