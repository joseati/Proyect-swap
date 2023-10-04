import React from 'react'
import {Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Dashboard/Home/Home';
import { Register } from '../Pages/Auth/Register/Register';
import { Login } from '../Pages/Auth/Login/Login';
import { Error } from '../Pages/Error/Error';
import { NavbarrApp } from '../Components/Navbar/NavbarrApp';
import { AvisoLegal } from '../Pages/Dashboard/PoliticasLegales/AvisoLegal';
import { ClausulaConsentimiento } from '../Pages/Dashboard/PoliticasLegales/ClausulaConsentimiento';
import { ContactaConNosotros } from '../Pages/Dashboard/ContactaConNosotros';
import { SobreNosotros } from '../Pages/Dashboard/SobreNosotros';


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
          <Route path='/avisoLegal' element = {<AvisoLegal/>} ></Route>
          <Route path='/clausulaDeConsentimiento' element = {<ClausulaConsentimiento/>} ></Route>
          <Route path='/contactaConNosotros' element = {<ContactaConNosotros/>} ></Route>
          <Route path='/sobreNosotros' element = {<SobreNosotros/>} ></Route>
          <Route path='*' element= {<Error/>}/>

        </Routes>
      </Row>
    </Container>
  )
}
