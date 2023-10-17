import { Col } from "react-bootstrap";

export const FooterCol1 = ({navigate}) => {
  return (
    <Col md={4} xs={12} className="col-1">
    <h4 className="title-col">SOMOS SWAP YOUR TRAVEL</h4>
    <p onClick={() => navigate("/sobreNosotros")}>¿Quiénes somos?</p>
    <p onClick={() => navigate("/comofunciona")}>¿Cómo funciona?</p>
    <p onClick={() => navigate("/faqs")}>Preguntas frecuentes</p>
    <p onClick={() => navigate("/contactaConNosotros")}>Contacto</p>
    </Col>
  )
}
