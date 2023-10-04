import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export const ModalLogin = ({show, handleClose,handleChange, inputLogin, onSubmit}) => {
  return (
    <>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Fromulario de registro</Modal.Title>
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

       <Button onClick={onSubmit}  className=' mt-5'>Enviar</Button>
     </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
