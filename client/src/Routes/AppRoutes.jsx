import React from 'react'
import {Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Dashboard/Home/Home';
import { Register } from '../Pages/Auth/Register/Register';
import { Login } from '../Pages/Auth/Login/Login';
import { Error } from '../Pages/Error/Error';
import { NavbarrApp } from '../Components/Navbar/NavbarrApp';


export const AppRoutes = () => {
  return (
    <Container fluid>
      <Row>
        <NavbarrApp/>
      </Row>

      <Row>
        <Routes>

          <Route path='/' element= {<Home/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='*' element= {<Error/>}/>

        </Routes>
      </Row>
    </Container>
  )
}
