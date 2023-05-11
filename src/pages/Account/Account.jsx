import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

const Account =() => {

    const navigate = useNavigate();
  // si l'utilisateur n'est pas connecté
  // donc qu'il n'a pas de jwt dans le localStorage
  // on le redirige vers la page de connexion


///////////////////////////Autorisation JWT//////////////////
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {  // Si le JWT n'existe pas
      navigate("/login"); // Redirection vers la page de connexion
    }
  }, [navigate]);//
/////////////////////////////////////////////////////////////

    return(
        <>
            <Header />
            <h1>Mon compte</h1>
            <Footer />
        </>
    )
}

export default Account;