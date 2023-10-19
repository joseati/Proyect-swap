import React, { useEffect, useState } from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ModalRegister } from '../../../Components/Modal/ModalRegister';
import { ToastRegister } from '../../../Components/Toast/ToastRegister';

const initialUser = {
  name: "",
  lastname: "",
  email:"",
  password: ""
};

export const Register = ({show, handleClose, handleShow}) => {

  const [inputUser, setInputUser] = useState(initialUser)
  const [showMsgReg, setShowMsgReg] = useState(false)
  const [showOk, setShowOk] = useState(false)

const navigate = useNavigate()
// Creamos un estado que almacene, en un objeto ya defindo(initialUser), los datos de los imputs que creamos para enviarlo al back

const handleChange = (e) =>{
  const { name, value } = e.target;
 
// seteamos el estado para mandarlo al back
  setInputUser({...inputUser, [name]: value})
}

const onSubmit = (e) =>{
  e.preventDefault()
  const validate = new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")
  console.log(validate);
  if(inputUser.name === "" || inputUser.email === "" || inputUser.password === "" ){
    setShowMsgReg(true)
    return
  }
  else if(validate.test(inputUser.email)){
// utilizamos axios ,para enviar a la direccion donde creamos el metodo post, e insertarlo en la base de datos colgandole el objeto inputUser, y cerrar el modal
axios
.post("http://localhost:4000/users/register", inputUser)

.then( (res) =>{
  handleClose()
  navigate("/")
  setInputUser("")
  setShowOk(true)
}
  )
.catch((err) => setShowMsgReg(true))
  }

  
    
}
  return (
    <Row>
      <Col>
      <ModalRegister
        inputUser = {inputUser}
        onSubmit = {onSubmit}
        handleChange = {handleChange}
        show = {show}
        handleShow = {handleShow}
        handleClose = {handleClose}
        showMsgReg = {showMsgReg}
        setShowMsgReg = {setShowMsgReg}
        />
      </Col>
      <Col>
      <ToastRegister 
        showOk = {showOk}
        setShowOk = {setShowOk}
      />
      
      </Col>
    </Row>
  )
}
