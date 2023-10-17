import React, { useContext, useState } from 'react'
import {Col} from "react-bootstrap"
import { ModalLogin } from '../../../Components/Modal/ModalLogin'
import axios from "axios"
import { saveLocalStora } from "../../../Utils/localStorage"
import { SwapContext } from '../../../context/SwapContext'

const initialValue = {
  email:"",
  password:""
}
export const Login = ({show, handleClose,handleShow1}) => {
 const [inputLogin, setInputLogin] = useState(initialValue)
const {setIsLoged} = useContext(SwapContext)
const [showMsg, setShowMsg] = useState(false)

// Cambios en los imput para capatar los datos de login
 const handleChange = (e) => {
  const { name, value } = e.target;
  setInputLogin({...inputLogin, [name]: value})
 }

//  Funcion para traernos del back la informacion del user , utilizamos un metodo post ya que enviamos informacion
const onSubmit = (e) => {
  e.preventDefault()

  axios
    .post("http://localhost:4000/users/login", inputLogin)
    .then((res)=>{
      console.log(res.data)
      saveLocalStora("token", res.data)
      setInputLogin(initialValue)
      setIsLoged(true)
      setShowMsg(false)
      handleClose()
    })
    .catch((err) =>setShowMsg(true))

}


  return (
    <Col>
    <ModalLogin show={show}
                handleShow1={handleShow1}
                handleClose={handleClose}
                handleChange={handleChange}
                inputLogin = {inputLogin}
                setInputLogin = {setInputLogin}
                onSubmit = {onSubmit}
                showMsg = {showMsg}
                setShowMsg = {setShowMsg}
                />
    </Col>
  )
}