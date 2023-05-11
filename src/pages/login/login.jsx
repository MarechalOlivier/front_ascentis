import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

import style from "./style_login.scss";


const Login =() => {


    const handleSubmit = (event) => {
        // j'empêche le rechargement automatique de la page
        event.preventDefault();
      
        // je récupère les valeurs des champs du formulaire
        // username et password
        const username = event.target.username.value;
        const password = event.target.password.value;
      
        // je fais une requête vers l'api (express)
        // sur l'url login avec la méthode POST
        fetch("http://localhost:3005/api/user/login", { // Promesse faite avec la méthode fetch
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Je précise que je vais envoyer du JSON
          },
          // j'envoie dans le corps de la requête POST
          // les données du formulaire
          // formattées en JSON
          body: JSON.stringify({// Je transforme les données en JSON
            username: username,// Je récupère les données username du formulaire
            password: password,// Je récupère les données password du formulaire
          }),
        })
          // le serveur express me renvoie un JWT
          // si les infos sont valides (username et password
          // correspondent à un utilisateur en BDD)
          .then((responseJson) => {           
            if (responseJson.ok) {             
              // L'authentification a réussi, je stocke le JWT dans le localStorage
              const jwt = responseJson.token;
              localStorage.setItem("jwt", jwt);      
              // redirection vers la page d'accueil si l'authentification a réussi
              window.location.href = "http://localhost:3000/";
            } else {
              // L'authentification a échoué, j'affiche un message d'erreur
              alert("Nom d'utilisateur ou mot de passe incorrect !");                     
            }
          })
            
      };



      // je créé un formulaire avec deux champs :
      // username et password
      // pour connecter mon utilisateur
      // j'attache un event listener sur le submit du formulaire
    return(
        <>
            <Header />
            <main>
                <section id="formulaire-connexion">
                    <h1>Identifiez-vous</h1>
                    
                    <div className="login">
                        <form onSubmit={handleSubmit} className="row g-3">
                            <h2>Connexion</h2>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail" className="form-label">Email </label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Votre adresse email" name="username"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Votre mot de passe" name="password" />
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary">Connexion</button>
                            </div>
                            <p>Mot de passe perdu ?</p>

                            <h2>Nouveau client ?</h2>

                            <div className="col-12 btn-center">
                                <button type="submit" className="btn btn-primary"><Link to="/admin/create_account">Créez un compte</Link></button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />  
            
        </>
    )
}

export default Login;