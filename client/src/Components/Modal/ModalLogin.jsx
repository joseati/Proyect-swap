import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export const ModalLogin = ({show, handleClose,handleChange, inputLogin, onSubmit, showMsg}) => {
  return (
    <>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>

      <Form.Group>
       <Form.Label htmlFor='email'>Email</Form.Label>
       <Form.Control
        id='email' placeholder='email'
        value={inputLogin.email}
        name='email'
        onChange={handleChange}/>     

       </Form.Group>      

      <Form.Group>
       <Form.Label htmlFor='password'>Contraseña</Form.Label>
       <Form.Control
        id='password' placeholder='Contraseña'
        value={inputLogin.password}
        name='password'
        onChange={handleChange}/>
       </Form.Group>      
       {showMsg && <p style={{color: "red", fontWeight: "bold", fontSize: "20px", marginTop: "2vw"}}>email o password incorrectos</p>}
       <Button onClick={onSubmit}  className=' m-3'>Enviar</Button>
       <Button 
        variant="secondary" 
        onClick={handleClose}
        className=' m-3'
       >
          Close
        </Button>
     </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
    </>
  )
}
