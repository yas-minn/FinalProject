import "../Header/Headerr.css"
import Logo from "/Images/Logo.png"
import CartLogo from "/Images/cart.png"
import { Link } from "react-router-dom"
import { useState } from "react"

const Headerr = () => {
    
    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/Home" className="logo"><img src={Logo} /></Link>
            </div>
            <div className="menu">
                <ul>
                    <li className="navItem">
                        <Link to="/Home" className="navItem" >Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/Shop" className="navItem">Shop</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/Contact" className="navItem">Contact</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/Cart" className="navItem"><img src={CartLogo} alt="Cart" /></Link>
                    </li>
                </ul>
            </div>
           
        </nav>
    )
}

export default Headerr;