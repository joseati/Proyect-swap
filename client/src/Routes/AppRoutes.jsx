import React from "react";
import { Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Dashboard/Home/Home";
import { Register } from "../Pages/Auth/Register/Register";
import { Login } from "../Pages/Auth/Login/Login";
import { Error } from "../Pages/Error/Error";
import { NavbarrApp } from "../Components/Navbar/NavbarrApp";
import { PreguntasFrecuentes } from "../Pages/Dashboard/Dudas/PreguntasFrecuentes";
import { TerminosYCondiciones } from "../Pages/Dashboard/Dudas/TerminosYCondiciones";
import { OneUser } from "../Pages/Users/OneUser";
import { PoliticasDePrivacidad } from "../Pages/Dashboard/PoliticasLegales/PoliticasDePrivacidad";
import { Footer } from "../Components/Footer/Footer";
import { AvisoLegal } from "../Pages/Dashboard/PoliticasLegales/AvisoLegal";
import { ClausulaConsentimiento } from "../Pages/Dashboard/PoliticasLegales/ClausulaConsentimiento";
import { ContactaConNosotros } from "../Pages/Dashboard/ContactaConNosotros";
import { SobreNosotros } from "../Pages/Dashboard/SobreNosotros";
import { AdvertenciasGenericas } from "../Pages/Dashboard/PoliticasLegales/AdvertenciasGenericas";
import { PoliticasCookies } from "../Pages/Dashboard/PoliticasLegales/PoliticasCookies";
import { ComoFunciona } from "../Pages/Dashboard/Dudas/ComoFunciona";
import { UserApp } from "../Pages/User/UserApp";

export const AppRoutes = () => {
  return (
    <Container fluid>
      <Row>
        <NavbarrApp />
      </Row>
      <Row>
        <Routes>
          <Route
            path="/advertenciasgenericas"
            element={<AdvertenciasGenericas />}
          />
          <Route path="/politicacookies" element={<PoliticasCookies />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/oneUser" element={<UserApp />} />


          <Route
            path="/politicas-de-privacidad"
            element={<PoliticasDePrivacidad />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/oneUser" element={<OneUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<PreguntasFrecuentes />} />
          <Route
            path="/terminos-condiciones"
            element={<TerminosYCondiciones />}
          />
          <Route path="/avisoLegal" element={<AvisoLegal />}></Route>
          <Route
            path="/clausulaDeConsentimiento"
            element={<ClausulaConsentimiento />}
          ></Route>
          <Route
            path="/contactaConNosotros"
            element={<ContactaConNosotros />}
          ></Route>
          <Route path="/sobreNosotros" element={<SobreNosotros />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Row>

      <Footer />
    </Container>
  );
};
