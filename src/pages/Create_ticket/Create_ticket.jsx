import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_create_ticket.scss";



const Create_ticket =() => {

    const navigate = useNavigate();
  // si l'utilisateur n'est pas connecté
  // donc qu'il n'a pas de jwt dans le localStorage
  // on le redirige vers la page de connexion


///////////////////////////Autorisation JWT//////////////////
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
    }
  }, [navigate]);
////////////////////////////////////////////////////////////


  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    const client_name = event.target.cleint_name.value;
    const client_number = event.target.client_number.value;
    const type = event.target.type.value;
    const urgency = event.target.urgency.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const number = event.target.number.value;
    const street = event.target.street.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;


    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
    fetch("http://localhost:3005/api/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: client_name,
        client_number: client_number,
        type: type,
        urgency: urgency,
        category: category,
        description: description,
        address: {
            number: number,
            street: street,
            postCode: postCode,
            city: city,
        },
        
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


    return(
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="client_name">Nom du client</label>
                    <input type="text" name="client_name" />
                </div>
                <div>
                    <label htmlFor="client_number">Numéro de client</label>
                    <input type="number" name="client_number" />
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" />
                </div>
                <div>
                    <label htmlFor="urgency">Urgence</label>
                    <input type="text" name="urgency" />
                </div>
                <div>
                    <label htmlFor="category">Catégorie</label>
                    <input type="text" name="category" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" />
                </div>
                <div>
                    <label htmlFor="address">Adresse</label>
                    <input type="text" name="address" />
                </div>

                <button type="submit">Valider</button>

            </form>
            <Footer />
        </>
    )
}

export default Create_ticket;