import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./style_account.scss";

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
            <main>
                <section id="account">
                    <h1>Mon compte</h1>
                    
                    <div class="content-account">

                        <div class="ticket">
                            <div class="line-ticket">
                                <h3>Statut réparation</h3>
                                <p>Vérifier l'état de réparation de vos produits</p>
                            </div>
                            <div class="line-ticket">
                                <h3>Créer un ticket</h3>
                                <p>Ouvrir un ticket de support pour signaler un problème</p>
                                <button class="btn btn-primary"><Link to="/admin/create_ticket">Créez un ticket</Link></button>
                            </div>
                        </div>
                        <div class="infos">
                            <div class="line">
                                <h3>Mes informations personnelles</h3>
                                <p>Gérer vos informations personnelles</p>
                                <button class="btn btn-primary">Modifier</button>
                            </div>
                            <div class="line">
                                <h3>Mes adresses de livraison</h3>
                                <p>Gérer vos adresses de livraison pour vos commandes</p>
                                <button class="btn btn-primary">Modifier</button>
                            </div>
                            <div class="line">
                                <h3>Mes commandes et factures</h3>
                                <p>Consulter vos commandes et télécharger vos factures</p>
                                <button class="btn btn-primary">Consulter</button>
                            </div>
                            <div class="line">
                                <h3>Préférences</h3>
                                <p>Gérer vos préférences de compte</p>
                                <button class="btn btn-primary">Modifier</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Account;