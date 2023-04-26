import React from "react";
import { Link } from "react-router-dom";
import style from "../header/style.css";

const Header =() => {
  return (
    <>
    <header>
      <h1>header</h1>
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
      </nav>
    </header>
    </>    
  )};
    
    
    


export default Header;