// External Libraries
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Components
import { FooterCol1 } from "./FooterCol1";
import { FooterCol2 } from "./FooterCol2";
import { IconosSocial } from "./IconosSocial";

// Styles
import "./footer.scss";

export const Footer = () => {
    const navigateTo = useNavigate();

    function navigate(path) {
        // Navigate to the desired route
        navigateTo(path);

        // Scroll the window to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <Container className="footer">
                <Row>
                  {/* COMPONENTES IMPORTADOS  */}
                    <FooterCol1 navigate={navigate} />
                    <FooterCol2 navigate={navigate} />
                    <IconosSocial navigate={navigate} />
                </Row>
                <Row>
                    <div className="rights">
                        <h5 style={{paddingBottom:"10px"}} className="rights-text">2023 © Todos los derechos reservados</h5>
                    </div>
                </Row>
            </Container>

            <Row className="justify-content-center">
                <Col xs={12} className="logos-footer d-flex align-items-end justify-content-end">
                    <Row>
                        <Col xs={12}>
                            <p className="p-footer">Con el apoyo de: </p>
                        </Col>
                        <Col xs={12} className="d-flex flex-column logos">
                            <img src="./assets/images/lanzadera.png" alt="lanzadera" className="lanzadera-img" />
                            <img src="./assets/images/minerva.png" alt="minerva" className="minerva-img" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
