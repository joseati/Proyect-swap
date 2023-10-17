import { Modal, Form, Button } from 'react-bootstrap'
import "./modal-login.scss"
export const ModalLogin = ({ showRegister, handleShow1,
  setShowRegister ,show, handleClose,handleChange, inputLogin, onSubmit, showMsg, setShowMsg, setInputLogin}) => {

    const mostrarModalRegister = () =>{
      handleClose()
      handleShow1()
    }

  return (
    <>
     <Modal className='modal-login' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div className="d-flex flex-column p-lg-3 border-bottom-0 align-items-start">
          <p className='already'>¿Ya tienes cuenta?</p>
          <Modal.Title className='p-1 enter'>Entra desde aqui</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
      <Form>

      <div className="inputs-login d-flex flex-column align-items-center justify-content-center">
        <Form.Group>
         <Form.Control
         className='input-login'
          id='email' placeholder='Correo electrónico'
          value={inputLogin.email}
          name='email'
          onChange={handleChange}/>
         </Form.Group>
         
        <Form.Group>
         <Form.Control
          className='input-login'
          id='password' placeholder='Contraseña'
          value={inputLogin.password}
          name='password'
          type='password'
          onChange={handleChange}/>
         </Form.Group>
   

       {showMsg && <p style={{color: "red", fontWeight: "bold", fontSize: "20px", marginTop: "2vw"}}>email o password incorrectos</p>}
       <div className='d-flex flex-column flex align-items-center justify-content-center'>
       <Button onClick={onSubmit}  className='btn-login m-3'>Acceder</Button>
     
      
         <p onClick={mostrarModalRegister} className='p-account'>¿No tienes cuenta? <span  className='link-register'> Regístrate gratis</span> </p>
         </div> 
       </div>
     
     </Form>
      </Modal.Body>
      
    </Modal>
   
    {}
    </>
  )
}
