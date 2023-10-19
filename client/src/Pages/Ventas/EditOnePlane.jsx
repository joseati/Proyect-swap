import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./editOnePlane.scss"
import axios from 'axios'

const initialState = {
  original_price:"",
  commentaries: "", 
  exchange_rate:"",
  client_price:"",


}

export const EditOnePlane = ({setSaveEditOnetravel, ida, vuelta}) => {
  // console.log(setSaveEditOnetravel);
  const [editInputs, setEditInputs] = useState(initialState)

  //Controlar los inputs:
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.type == "text"){
      setEditInputs({...editInputs, [name]: value})
      setSaveEditOnetravel({...editInputs,[name]: value})
    }
    }
console.log(editInputs);
  // Traer los datos incorporados para modificar: 
  useEffect(()=>{
    setEditInputs({...editInputs, 
      original_price: ida.original_price,
      commentaries: ida.commentaries,
      exchange_rate: ida.exchange_rate,
      client_price: ida.client_price
    });
  }, [])



  return (
    <Row >
      <Col className='columna-edit'>
      <Form className="d-flex align-items-center justify-content-center" >   
      <Row>
        <Col  md={6} xs={12} className=" form-Edit">            
            <Form.Group className='d-flex flex-column align-items-center'>
              <Form.Label className="label" htmlFor="original_price">
                Precio original billete/persona(€)
              </Form.Label>
              <Form.Control
                name="original_price"
                className="custom-input"
                id="original_price"
                maxLength={9}
                placeholder="Precio original billete/persona(€)"
                onChange={handleChange}
                value={!handleChange ? ida.original_price : editInputs.original_price}
              />
            </Form.Group>  
            <Form.Group className='d-flex flex-column align-items-center'>
              <Form.Label className="label" htmlFor="commentaries">
                Otras especificaciones
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="commentaries"
                id="commentaries"
                placeholder="Otras especificaciones"
                maxLength={299}
                onChange={handleChange}
                value={!handleChange ? ida.commentaries : editInputs.commentaries}
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="form-Edit">
            <Form.Group className='d-flex flex-column align-items-center'>
              <Form.Label className="label" htmlFor="exchange_rate">
                Tasa de cambio de titularidad
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="exchange_rate"
                id="exchange_rate"
                maxLength={9}
                placeholder="  Tasa de cambio de titularidad"
                type="text"
                onChange={handleChange}
                value={!handleChange ? ida.exchange_rate
                : editInputs.exchange_rate}
              />
            </Form.Group>
            <Form.Group className='d-flex flex-column align-items-center'>
              <Form.Label className="label" htmlFor="total_amount">
                Importe mínimo a recibir. (Precio Final - €)
              </Form.Label>
              <Form.Control
                className="custom-input"
                name="client_price"
                id="client_price"
                maxLength={9}
                placeholder="Introduce la cantidad"
                type="text"
                onChange={handleChange}
                value={!handleChange ? ida.client_price
                  : editInputs.client_price}
              />
            </Form.Group>
          </Col>  
        </Row>   
                    
      </Form>
      </Col>
      
    </Row>
  )
}
