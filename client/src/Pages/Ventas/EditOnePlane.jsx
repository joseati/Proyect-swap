import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./editOnePlane.scss"

const initialState = {
  original_price:"",
  commentaries: "", 
  exchange_rate:"",
  client_price:""
}

export const EditOnePlane = ({ida, vuelta}) => {
  console.log(ida);
  const [editInputs, setEditInputs] = useState(initialState)

  //Controlar los inputs:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInputs({...editInputs, [name]: value})
    }

  // Traer los datos incorporados para modificar: 
  useEffect(()=>{
    setEditInputs({...editInputs, 
      original_price: ida.original_price,
      commentaries: ida.commentaries,
      exchange_rate: ida.exchange_rate,
      client_price: client_price
    });
  }, [])

  // Botón para hacer volcar los nuevos datos del viaje en la Base de Datos.
  // Hay que sacar esta funcionalidad a ONETRAVEL que es donde está el botón y pasarsela a esa página.  
  const onSubmit = (e) =>{
    e.preventDefault();
    axios
      .post(`http://localhost:4000/travels/editOneTravel`)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
  }

  return (
    <Row >
      <Form className="d-flex">      
          <Col md={6} xs={12} className="d-flex align-items-end flex-column p-4">            
            <Form.Group>
              <Form.Label className="label" htmlFor="original_price">
                Precio original billete/persona(€)
              </Form.Label>
              <Form.Control
                name="original_price"
                className="custom-input"
                id="original_price"
                placeholder="Precio original billete/persona(€)"
                onChange={handleChange}
                value={ida.original_price}
              />
            </Form.Group>  
            <Form.Group>
              <Form.Label className="label" htmlFor="commentaries">
                Otras especificaciones
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="commentaries"
                id="commentaries"
                placeholder="Otras especificaciones"
                onChange={handleChange}
                value={ida.commentaries}
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="d-flex align-items-start flex-column p-4">
            <Form.Group>
              <Form.Label className="label" htmlFor="exchange_rate">
                Tasa de cambio de titularidad
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="exchange_rate"
                id="exchange_rate"
                placeholder="  Tasa de cambio de titularidad"
                type="text"
                onChange={handleChange}
                value={ida.exchange_rate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label" htmlFor="total_amount">
                Importe mínimo a recibir. (Precio Final - €)
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="client_price"
                id="client_price"
                placeholder="Introduce la cantidad"
                type="text"
                onChange={handleChange}
                value={ida.client_price}
              />
            </Form.Group>
          </Col>            
      </Form>
    </Row>
  )
}
