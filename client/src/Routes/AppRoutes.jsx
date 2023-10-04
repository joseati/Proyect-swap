import React from 'react'
import {Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Dashboard/Home/Home';
import { Register } from '../Pages/Auth/Register/Register';
import { Login } from '../Pages/Auth/Login/Login';
import { Error } from '../Pages/Error/Error';
import { NavbarrApp } from '../Components/Navbar/NavbarrApp';
import { PoliticasDePrivacidad } from '../Pages/Dashboard/PoliticasLegales/PoliticasDePrivacidad';
import { Footer } from '../Components/Footer/Footer';


export const AppRoutes = () => {
  return (
    <Container fluid>
      <Row>
        <NavbarrApp/>
      </Row>

      <Row>
        <Routes>
          <Route path='politicas-de-privacidad' element={<PoliticasDePrivacidad/>}/>
          <Route path='/' element= {<Home/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='*' element= {<Error/>}/>

        </Routes>
      </Row>

      <Footer/>
    </Container>
  )
}
