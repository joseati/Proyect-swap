import React from 'react'
import { Col, Toast } from 'react-bootstrap'

export const ToastRegister = ({showOk, setShowOk}) => {
  return (
    <Col xs={12} className="mb-2 d-flex justify-content-end">
        
        <Toast 
          show={showOk} 
          onClose={()=>setShowOk(false)}
          className=''
          >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Login de SYT</strong>
            <small>Ahora</small>
          </Toast.Header>
          <Toast.Body>¡Te has registrado satisfactoriamente! </Toast.Body>
        </Toast>
      </Col>
  )
}
