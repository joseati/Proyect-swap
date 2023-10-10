import {
  Col, Row, Accordion, Form, FormGroup, 
  FormLabel, FormControl, FormSelect, Button
} from 'react-bootstrap';

export const ColFilters = () => {
  return (
      <Col className='pt-4 d-flex align-items-start justify-content-start col-filters' md={10} xs={12}>
          <Row className='bg'>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className='title-filter2'>Filtros</Accordion.Header>
                      <Accordion.Body>
                          <Col xs={12} className='column-filters'>
                              <Form className="mt-3">
                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/airline.png" alt="" />
                                          Compañía:
                                      </FormLabel>
                                      <FormControl type="text" placeholder="Compañía" id="company" />
                                  </FormGroup>

                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/arrivals.png" alt="" />
                                          Precio de venta:
                                      </FormLabel>
                                      <FormControl type="number" placeholder="Precio" id="salePrice" />
                                  </FormGroup>

                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/calendar(1).png" alt="" />
                                          Fecha salida:
                                      </FormLabel>
                                      <FormControl type="date" id="departureDate" />
                                  </FormGroup>

                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/departures.png" alt="" />
                                          Origen:
                                      </FormLabel>
                                      <FormControl type="text" placeholder="Origen" id="origin" />
                                  </FormGroup>

                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/arrivals.png" alt="" />
                                          Destino:
                                      </FormLabel>
                                      <FormControl type="text" placeholder="Destino" id="destination" />
                                  </FormGroup>

                                  <FormGroup className="mb-3 filters-label">
                                      <FormLabel>
                                          <img src="/assets/images/discount.png" alt="" />
                                          Descuento:
                                      </FormLabel>
                                      <FormSelect id="discount">
                                          <option value="50">Elija el descuento</option>
                                          <option value="50">Más de 50%</option>
                                          <option value="40">De 40 a 50 %</option>
                                          <option value="30">De 30 a 40 %</option>
                                          <option value="20">De 20 a 30 %</option>
                                          <option value="10">De 10 a 20 %</option>
                                          <option value="0">De 0 a 10 %</option>
                                      </FormSelect>
                                  </FormGroup>

                                  <Button className='btn-filter'>Aplicar filtros</Button>
                              </Form>
                          </Col>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
      </Col>
  );
}
