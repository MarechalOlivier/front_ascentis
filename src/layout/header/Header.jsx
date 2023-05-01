import React from "react";
import logo from "../img/logo.png"
import logoCompte from "../img/logo_compte.png"
import { Link } from "react-router-dom";
import style from "../header/style.scss"


const Header =() => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo de l'entreprise"/>
          </div>
          <div class="search">
            <input type="text" placeholder="Recherche"/>
            <button type="submit">Rechercher</button>
          </div>
          <div className="account">
            <img src={logoCompte}  alt="logo compte"/>
            <a href="#">Mon compte</a>
          </div>
        </nav>
      </header>
    </>    
  )};
    
    
export default Header;



{/* <h1>header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/header">Blogs</Link>
          </li>
          <li>
            <Link to="/footer">Contact</Link>
          </li>
        </ul>
      </nav> */}