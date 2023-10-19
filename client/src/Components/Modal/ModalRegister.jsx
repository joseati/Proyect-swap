import {useState} from 'react'
import { Modal,Button, Form } from 'react-bootstrap';
import "./modal-register.scss"

export const ModalRegister = ({ handleClose ,handleChange , onSubmit, inputUser, show, showMsgReg, setShowMsgReg }) => {

  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  
  return (
    <>
    <Modal className='modal-div' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div className="d-flex flex-column p-4 p-lg-3 border-bottom-0 align-items-start">
          <Modal.Title className='modal-title'>¡Únete! Es gratis</Modal.Title>
          <p>Compra y vende viajes en un solo click</p>
        </div>
      </Modal.Header>
      <Modal.Body>
      <>

      <div className='d-flex flex-column align-items-center justify-content-center'>
        <Form.Group>
         <Form.Control
         className='input-modal'
          id='name' placeholder='Nombre / Alias (Empresas)'
          value={inputUser.name}
          name='name'
          maxLength={150}
          onChange={handleChange}/>
         </Form.Group>
        <Form.Group>
         <Form.Control
           className='input-modal'
          id='email' placeholder='Correo electrónico'
          value={inputUser.email}
          maxLength={150}
          name='email'
          onChange={handleChange}/>
         </Form.Group>
        <Form.Group>
         <Form.Control
           className='input-modal'
          id='password' placeholder='Contraseña'
          type='password'
          value={inputUser.password}
          maxLength={25}
          name='password'
          onChange={handleChange}/>
         </Form.Group>
     
       {showMsgReg && <p style={{color: "red", fontWeight: "bold", fontSize: "20px", marginTop: "2vw"}}>email o password no válidos</p>}
      <Form.Group className="d-flex align-items-center">
  <Form.Check 
    type="checkbox" 
    label={
      <>
  Acepto el <a href="/avisoLegal" >aviso legal</a> y la <a href="/politicas-de-privacidad">protección de datos</a>
      </>
    
    }
    checked={hasAcceptedTerms}
    onChange={(e) => setHasAcceptedTerms(e.target.checked)}
  />
      </Form.Group>
</div>
       <div className="d-flex align-items-center justify-content-center"><Button onClick={onSubmit}  disabled={!hasAcceptedTerms} className='btn-register'>Regístrate</Button></div>
  
     </>
      </Modal.Body>

    </Modal>
  </>
);
}
  
