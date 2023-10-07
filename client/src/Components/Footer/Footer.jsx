import { Container, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import "./footer.scss";

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container className="footer">
        <Row>
          <Col md={4} xs={12} className="col-1">
            <h4 className="title-col">SOMOS SWAP YOUR TRAVEL</h4>
            <p onClick={() => navigate("/sobreNosotros")}>¿Quiénes somos?</p>
            <p onClick={() => navigate("/comofunciona")}>Cómo funciona?</p>
            <p onClick={() => navigate("/faqs")}>Preguntas frecuentes</p>
            <p>Blog</p>
            <p onClick={() => navigate("/contactaConNosotros")}>Contacto</p>
            <p>¿Qué dicen de nosotros?</p>

          </Col>
          <Col md={4} xs={12} className="col-2">
            <h4 className="title-col">POLÍTICAS LEGALES</h4>
            <p onClick={() => navigate("/avisoLegal")}>Aviso Legal</p>
            <p onClick={() => navigate("/politicas-de-privacidad")}>Política de privacidad</p>
            <p onClick={() => navigate("/politicacookies")}>Política de cookies</p>
            <p onClick={() => navigate("/clausulaDeConsentimiento")}>Claúsula de consentimiento</p>
            <p onClick={() => navigate("/advertenciasgenericas")}>Advertencia Genérica</p>
            <p onClick={() => navigate("/terminos-condiciones")}>Términos y condiciones</p>
          </Col>

          <Col md={4} xs={12} className="col-3">
            <div className="d-flex align-items-end justify-content-end">
              <img
                className="square-logo"
                onClick={()=> navigate("/")}
                src="/assets/images/swapframe.png"
                alt=""
              />
            </div>
            <ul className="ul-redes-footer mt-4 align-items-end justify-content-end">
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
              Marketplace para comprar y vender viajes con seguridad
            </h3>
          </Col>
        </Row>
        <Row>
          <Row>
       
          </Row>
          <div className="rights">
            <p className="rights-text">2023 © Todos los derechos reservados</p>
          </div>
        </Row>
      </Container>
      <Row className="justify-content-center">
       
        <Col className=" logos-footer d-flex align-items-end justify-content-end ">
   
          <p className="p-footer">Con el apoyo de: </p>
            <div className="d-flex flex-column logos">
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
            </div>
     
        </Col>
      </Row>
      
    </>
    
  );
};
