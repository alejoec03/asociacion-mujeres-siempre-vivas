import { Navbar } from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { MenuInicio } from "./pages/MenuInicio"
import { Registro } from "./pages/Registro"
import { InicioDeSesion } from "./pages/InicioDeSesion"
import { RecuperarContrasena } from "./pages/RecuperarContrasena"
import { RestablecerContrasena } from "./pages/RestablecerContrasena"
import { Productos } from "./pages/Productos"
import { Ecoturismo } from "./pages/Ecoturismo"
import { Contacto } from "./pages/Contacto"
import { CartProvider  } from "./context/CartContext"
import { Carrito } from "./pages/Carrito";

function App() {

  return (
    <CartProvider >
   <>
  

  <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Navigate to="/menu-inicio" replace />} />
          <Route path="/menu-inicio" element={<MenuInicio/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/inicio-de-sesion" element={<InicioDeSesion/>}/>
          <Route path="/recuperar-contrasena" element={<RecuperarContrasena/>} />
          <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/ecoturismo" element={<Ecoturismo/>}/>
          <Route path="/contacto" element={<Contacto/>}/>    
          <Route path="/" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />    
          
      </Routes>

  </Router>  

  
  </>
  </CartProvider >
  )
}

export default App