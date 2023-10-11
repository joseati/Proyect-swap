import {
  Col, Accordion, Form, FormGroup, 
  FormLabel, FormControl, FormSelect, Button, Container
} from 'react-bootstrap';

export const ColFilters = ({handleChange}) => {
  return (
    
      <Container className=' mt-5 bg' xs={5}>
          <Col className='pt-4 col-filters'>
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
                                          <FormControl
                                           type="text"
                                          placeholder="Compañía" 
                                          onChange={handleChange}
                                          name='company_name'
                                          id="company" />
                                      </FormGroup>
                                      <FormGroup className="mb-3 filters-label">
                                          <FormLabel>
                                              <img src="/assets/images/arrivals.png" alt="" />
                                              Precio de venta:
                                          </FormLabel>
                                          <FormControl 
                                          type="number"
                                            placeholder="Precio"
                                            onChange={handleChange}
                                            id="salePrice"
                                            name="price"  />
                                      </FormGroup>
                                      <FormGroup className="mb-3 filters-label">
                                          <FormLabel>
                                              <img src="/assets/images/calendar(1).png" alt="" />
                                              Fecha salida:
                                          </FormLabel>
                                          <FormControl 
                                          type="date" 
                                          onChange={handleChange}
                                          id="departureDate"
                                          name="departure_date" />
                                      </FormGroup>
                                      <FormGroup className="mb-3 filters-label">
                                          <FormLabel>
                                              <img src="/assets/images/departures.png" alt="" />
                                              Origen:
                                          </FormLabel>
                                          <FormControl 
                                          type="text"
                                            placeholder="Origen"
                                            onChange={handleChange}
                                             id="origin"
                                             name='origin' />
                                      </FormGroup>
                                      <FormGroup className="mb-3 filters-label">
                                          <FormLabel>
                                              <img src="/assets/images/arrivals.png" alt="" />
                                              Destino:
                                          </FormLabel>
                                          <FormControl 
                                          type="text"
                                           placeholder="Destino" 
                                           id="destination"
                                           onChange={handleChange}
                                           name='destination' />
                                      </FormGroup>
                                      <FormGroup className="mb-3 filters-label">
                                          <FormLabel htmlFor='orderbyPrice'>
                                              <img src="/assets/images/discount.png" alt="" />
                                              Precio:
                                          </FormLabel>
                                          
                                          <FormSelect 
                                            id="orderbyPrice"
                                            onChange={handleChange}
                                            name='filterByPrice'
                                            >
                                             <option value="de menor a mayor precio"> menor a mayor precio</option>
                                             <option value="de mayor a menor precio"> mayor a menor precio</option>
                                          </FormSelect>
                                          
                                          
                                      </FormGroup>
                                      {/* <Button onClick={} className='btn-filter'>Aplicar filtros</Button> */}
                                  </Form>
                              </Col>
                          </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
          </Col>
          </Container>
      
      

  );
}
