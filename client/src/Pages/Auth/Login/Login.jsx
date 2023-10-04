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
export const Login = ({show, handleClose}) => {
 const [inputLogin, setInputLogin] = useState(initialValue)
const {setIsLoged} = useContext(SwapContext)

// Cambios en los imput para capatar los datos de login
 const handleChange = (e) => {
  const { name, value } = e.target;
  setInputLogin({...inputLogin, [name]: value})
  console.log(inputLogin);

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
      handleClose()
    })
    .catch((err) => console.log(err))

}


  return (
    <Col>
    <ModalLogin show={show}
                handleClose={handleClose}
                handleChange={handleChange}
                inputLogin = {inputLogin}
                onSubmit = {onSubmit}
                />
    </Col>
  )
}
