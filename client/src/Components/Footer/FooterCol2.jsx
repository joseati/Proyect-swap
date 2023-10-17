import { Col } from "react-bootstrap";

export const FooterCol2 = ({navigate}) => {
  return (
    <Col md={4} xs={12} className="col-2">
    <h4 className="title-col">POLÍTICAS LEGALES</h4>
    <p onClick={() => navigate("/avisoLegal")}>Aviso Legal</p>
    <p onClick={() => navigate("/politicas-de-privacidad")}>Política de privacidad</p>
    <p onClick={() => navigate("/politicacookies")}>Política de cookies</p>
    <p onClick={() => navigate("/clausulaDeConsentimiento")}>Claúsula de consentimiento</p>
    <p onClick={() => navigate("/advertenciasgenericas")}>Advertencia Genérica</p>
    <p onClick={() => navigate("/terminos-condiciones")}>Términos y condiciones</p>
  </Col>
  )
}
