import { BrowserRouter } from "react-router-dom"
import { SwapProvider } from './Context/SwapContext';
import { AppRoutes } from './Routes/AppRoutes';

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
