import React, { useEffect, useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ModalRegister } from '../../../Components/Modal/ModalRegister';

const initialUser = {
  name: "",
  lastname: "",
  email:"",
  password: ""
};

export const Register = ({show, handleClose, handleShow}) => {

  const [inputUser, setInputUser] = useState(initialUser)
  const [showMsgReg, setShowMsgReg] = useState(false)


const navigate = useNavigate()
// Creamos un estado que almacene, en un objeto ya defindo(initialUser), los datos de los imputs que creamos para enviarlo al back

const handleChange = (e) =>{
  const { name, value } = e.target;
 
// seteamos el estado para mandarlo al back
  setInputUser({...inputUser, [name]: value})
  console.log(inputUser);
}

const onSubmit = (e) =>{
  e.preventDefault()
  

  // utilizamos axios ,para enviar a la direccion donde creamos el metodo post, e insertarlo en la base de datos colgandole el objeto inputUser, y cerrar el modal
  axios
    .post("http://localhost:4000/users/register", inputUser)

    .then( (res) =>{
      console.log(res.data)
      handleClose()
      navigate("/")
      setInputUser("")
    }
      )
    .catch((err) => setShowMsgReg(true))
    
}
  return (
    <Col>
     <ModalRegister
       inputUser = {inputUser}
       onSubmit = {onSubmit}
       handleChange = {handleChange}
       show = {show}
       handleShow = {handleShow}
       handleClose = {handleClose}
       showMsgReg = {showMsgReg}
       />
   
      
    </Col>
  )
}
