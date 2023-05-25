import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_create_ticket.scss";

const Create_ticket = () => {

    ////////////////////////////////Authentification JWT + durée de validité du token ///////////////////////////   
    const navigate = useNavigate();
    // Autorisation JWT
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("/login");
            return;
        }
        // Décode le token JWT pour récupérer la date d'expiration
        const jwtData = token.split(".")[1];
        const decodedJwt = JSON.parse(atob(jwtData));
        const expirationTime = decodedJwt.exp * 1000; // Convertit la date d'expiration en millisecondes

        // Redirige vers la page de connexion lorsque le jeton expire
        const timeoutId = setTimeout(() => {
            navigate("/login");
        }, expirationTime - Date.now()); // Définit le délai en millisecondes avant la redirection

        // Nettoie le timeout lorsque le composant est démonté
        return () => clearTimeout(timeoutId);
    }, [navigate]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // Gère la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();


        // Récupère les valeurs des champs du formulaire
        const client_name = event.target.client_name.value;
        const client_number = event.target.client_number.value;
        const type = event.target.type.value;
        const urgency = event.target.urgency.value;
        const category = event.target.category.value;
        const subject = event.target.subject.value;
        const description = event.target.description.value;
        // const address = event.target.address.value;
        // const postCode = event.target.postCode.value;
        // const city = event.target.city.value;
        // const phone = event.target.phone.value;

        console.log("Le formulaire a été soumis");


        // Récupère le jeton JWT stocké dans le local storage   
        const token = localStorage.getItem("jwt");

        // Envoie une requête POST à l'API pour créer un ticket   
        fetch("http://localhost:3005/api/ticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Ajoute le jeton dans le header de la requête POST pour l'authentification 
            },
            body: JSON.stringify({
                client_name: client_name,
                client_number: client_number,
                type: type,
                urgency: urgency,
                category: category,
                subject: subject,
                description: description,
                // address: {
                //     address: address,
                //     postCode: postCode,
                //     city: city,
                // },
                // phone: phone,

            }),

            // si l'api renvoie une reponse 200
            // ça veut dire que tout s'est bien passé
            // alors on affiche un message dans la console
        }).then((response) => {
            if (response.status === 200) {
                console.log("Le ticket a bien été créé");
                // sinon on affiche un message d'erreur
                // car cela veut dire que le coworking n'a pas été créé
            } else {
                console.log("Erreur lors de la création du ticket");
            }
        });
    };

    


    return (
        <>
            <Header />

            <section id="create-tickets">
                <h1>Création de ticket</h1>
                <div className="content-ticket">
                    <form onSubmit={handleSubmit}>
                        <div className="create-ticket-line">
                            <h2>Informations ticket</h2>
                            <div className="line">
                                <label htmlFor="client_name">Nom</label>
                                <input type="text" name="client_name" />
                            </div>
                            <div className="line">
                                <label htmlFor="client_number">Numéro de client</label>
                                <input type="number" name="client_number" />
                            </div>
                            <div className="line">
                                <label htmlFor="type">Type</label>
                                <input type="text" name="type" />               {/* A voir si on peut faire un select */}
                            </div>
                            <div className="line">
                                <label htmlFor="urgency">Urgence</label>        {/* A voir si on peut faire un select */}
                                <input type="text" name="urgency" />
                            </div>
                            <div className="line">
                                <label htmlFor="subject">Sujet</label>
                                <input type="text" name="subject" />
                            </div>
                            <div className="line">
                                <label htmlFor="category">Catégorie</label>     {/* A voir si on peut faire un select */}
                                <input type="text" name="category" />
                            </div>
                            <div className="line">
                                <label htmlFor="description">Description</label>
                                <input type="textarea" name="description" />
                            </div>
                        </div>
                        

                        {/* <h2>Coordonnées</h2>                                         
                        <div className="line">
                            <label htmlFor="address">Adresse</label>
                            <input type="text" name="address" />
                        </div>
                        <div className="line">
                            <label htmlFor="postCode">Code postal</label>
                            <input type="number" name="postCode" />
                        </div>
                        <div className="line">
                            <label htmlFor="city">Ville</label>
                            <input type="text" name="city" />
                        </div>
                        <div className="line">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="number" name="phone" />
                        </div> */}

                        <div className="validate">
                            <button className="btn" type="submit">Créer</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Create_ticket;












