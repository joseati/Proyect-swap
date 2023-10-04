import React, {Children, useState} from 'react'
import { Modal,Button, Form } from 'react-bootstrap';


export const ModalRegister = ({ handleClose ,handleChange , onSubmit, inputUser, show, showMsgReg }) => {
  
  
  
  return (
    <>
 

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Formulario de registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>

      <Form.Group>
       <Form.Label htmlFor='name'>Nombre</Form.Label>
       <Form.Control
        id='name' placeholder='Nombre'
        value={inputUser.name}
        name='name'
        onChange={handleChange}/>     

       </Form.Group>      


      <Form.Group>
       <Form.Label htmlFor='email'>Email</Form.Label>
       <Form.Control
        id='email' placeholder='email'
        value={inputUser.email}
        name='email'
        onChange={handleChange}/>     

       </Form.Group>      

      <Form.Group>
       <Form.Label htmlFor='password'>Contraseña</Form.Label>
       <Form.Control
        id='password' placeholder='Contraseña'
        value={inputUser.password}
        name='password'
        onChange={handleChange}/>
       </Form.Group>      
       {showMsgReg && <p style={{color: "red", fontWeight: "bold", fontSize: "20px", marginTop: "2vw"}}>email o password no válidos</p>}
       <Button onClick={onSubmit} className=' m-3'>Enviar</Button>
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  </>
);
}
  
