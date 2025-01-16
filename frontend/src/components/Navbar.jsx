import { UserCircle, ShoppingCart} from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '/src/assets/imagenes/logo.png';

import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";

export const Navbar = () => {

    const { totalItems } = useContext(CartContext);

    return (
        <div>   
        <div className="navbar">
        <div className="left">
            <Link to="/">
            <div>
                <img className="navbar-logo" src={logo} alt="Logo" />
            </div>
            <div>Asociación Mujeres Siempre Vivas</div>
            </Link>
        </div>
        
        <div className="right">
            
            <div className="right-buttons">
            <Link to="/">Inicio</Link>  
                      
            <Link to="/productos">Productos</Link>
            <Link to="/ecoturismo">Ecoturismo</Link>
            <Link to="/contacto">Contacto</Link>

            <div className="navbar-cart">
            <Link to="/carrito">
            <ShoppingCart size={32} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>                
            </div>              
            <>
            <Link to="/usuario">
                <UserCircle size={32} />
            </Link>
            </>            
            </div>
        </div>
        </div>
        </div>
    )
}

