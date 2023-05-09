import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_c.png"
import logoCompte from "../img/logo_compte.png"

import style from "../header/style_header.scss"


const Header =() => {
  return (
    <>
      <header>
        <nav>
          <div className="first_navbar">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Logo de l'entreprise"/></Link>
            </div>
            <div class="search">
              <input type="text" placeholder="Recherche"/>
              <button type="submit">Rechercher</button>
            </div>
            <div className="account">
                <img src={logoCompte} alt="Logo de compte"/>
                <Link to="/login">Mon Compte</Link>
            </div>
          </div>
          <div className="links">
            <ul>
              <li><a href="#">Dépannage</a></li>
              <li><a href="#">Maintenance</a></li>
              <li><a href="#">Cybersécurité</a></li>
              <li>|</li>
              <li><a href="#">Configurateur PC</a></li>
              <li><Link to="/Computer">Ordinateur</Link></li>
              <li><a href="#">Périphériques</a></li>
              <li><a href="#">Composant</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>    
  )};
    
    
export default Header;



