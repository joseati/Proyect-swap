import {
    Col, Row, Accordion} from 'react-bootstrap';

export const SwapSelect = ({ selectedSwap, handleSwapClick }) => {
    return (
        <Accordion defaultActiveKey="0" className='filter1'>
                                  <Accordion.Item eventKey="0">

            <Accordion.Header className='header-title'>
                <h2 className='title-filter1'>Tipos de Swap</h2>
            </Accordion.Header>

            <Accordion.Body>
                <Row className='row-swap'>
                    {/* MAPEO DE CADA COL */}
                    {[
                        { type: "todos", imgSrc: "/assets/images/logo-sobre-nosotros.svg", label: "TODOS LOS SWAPS" },
                        { type: "avion", imgSrc: "/assets/images/avion1.svg", label: "BILLETES DE AVIÓN" },
                        { type: "tren", imgSrc: "/assets/images/tren.svg", label: "BILLETES DE TREN" },
                        { type: "bono", imgSrc: "/assets/images/bono.svg", label: "BONOS DE VIAJE" },
                        { type: "hotel", imgSrc: "/assets/images/alojamiento.svg", label: "NOCHES DE HOTEL" },
                        { type: "pack", imgSrc: "/assets/images/vacacional.svg", label: "PACKS VACACIONALES" }
                    ].map(item => (
                        <Col 
                            md={2} xs={12} 
                            key={item.type}
                            className={`swap-item ${selectedSwap === item.type ? "type-selected" : ""}`}
                            onClick={() => handleSwapClick(item.type)}
                        >
                            <img className='img-type mb-2' src={item.imgSrc} alt={item.label} />
                            <p style={{ fontSize:"12px" , cursor: "pointer" }}>{item.label}</p>
                        </Col>
                    ))}
                </Row>
            </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}