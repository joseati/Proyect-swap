import React, { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const initialUser = {
  name: "",
  lastname: "",
  email:"",
  password: ""
};

export const Register = () => {
const [inputUser, setInputUser] = useState(initialUser)
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
  

  // utilizamos axios ,para enviar a la direccion donde creamos el metodo post, e insertarlo en la base de datos colgandole el objeto inputUser
  axios
    .post("http://localhost:4000/users/register", inputUser)
    .then( (res) =>{
      console.log(res.data)
      navigate("/")
    }
      )
    .catch( (err) => console.log(err)  )
    
}
  return (
    <Col>
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

         <Button onClick={onSubmit} className=' mt-5'>Enviar</Button>
      </Form>
    </Col>
  )
}
