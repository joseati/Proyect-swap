import { BrowserRouter } from "react-router-dom"
import { SwapProvider } from './context/SwapContext';
import { AppRoutes } from './Routes/AppRoutes';

//hoja de estilo global de la app
import './app.scss'

// Requerimos SwapProvider que debe de estar la parte superior de la aplicacion para usarla en los componentes mediante useContex()
function App() {
 

  return (
    <>
    <BrowserRouter>
      <SwapProvider>
        <AppRoutes />
      </SwapProvider>
    </BrowserRouter>
     
    </>
  )
}

export default App
