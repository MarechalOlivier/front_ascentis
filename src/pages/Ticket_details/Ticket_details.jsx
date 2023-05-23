import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_ticket_details.scss";


const Ticket_details = () => {
    // je créé un state pour stocker un coworking
    const [ticket, setTicket] = useState(null);

    const navigate = useNavigate();
  
    // je récupère l'id présent dans l'url
    const { id } = useParams();
  
   
    // j'utilise useEffect, pour executer l'appel à l'api
    // une seule fois, au chargement du composant
    useEffect(() => {
      // je fais un appel fetch, vers l'url de l'api pour récupérer
      //  un ticket en fonction de l'id présent dans l'url
      fetch(`http://localhost:3005/api/ticket/${id}`)
        .then((responseJson) => responseJson.json())
        .then((responseJs) => {
          // si j'ai une réponse de l'api, je stocke le coworking
          // renvoyé dans le state
          setTicket(responseJs.data);
        });
    }, [id]); 



////////////////////////////////Suppression d'un ticket///////////////////////////////
    const handleDeleteClick = (ticket) => {
        const token = localStorage.getItem("jwt"); // Récupère le jeton d'authentification dans le localStorage
    
        // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
        // et je passe l'id du coworking à supprimer en paramètre de l'url
        fetch("http://localhost:3005/api/ticket/" + ticket.id, {
          method: "DELETE",
          // si l'url de mon api nécessite une authentification
          // je lui passe le JWT stocké en localStorage dans le header
          // de la requête
          headers: {
            Authorization: `Bearer ${token}`, // Ajoute le jeton dans le header de la requête POST pour l'authentification
          },
        })
          // quand le fetch est terminé, je recharge la page actuelle grâce
          // à la fonction navigate du react router
          .then(() => { 
            navigate(0); 
          })
          .catch((error) => {
            console.log((error) + ("Erreur lors de la suppression du ticket"));
          });
      };
////////////////////////////////////////////////////////////////////////////////////////  


    return (
        <div>
            <Header />
            {ticket ? (
                <>
                    <div className="ticket-details">
                        <h1>Détail du ticket</h1>
                        <div className="content-details">
                            <h2>{ticket.client_name}</h2>
                            <p>Numéro de client : {ticket.client_number}</p>
                            <p>Type : {ticket.type}</p>
                            <p>Urgence : {ticket.urgency}</p>
                            <p>Catégorie : {ticket.category}</p>
                            <p>Sujet : {ticket.subject}</p>
                            <p>Description : {ticket.description}</p>

                            {/* 
                                Vu que l'adresse n'est pas obligatoire
                                je vérifie qu'elle existe avant de l'afficher
                                */}
                            {ticket.address && ( 
                                <p>
                                    Adresse : {ticket.address.address} {ticket.address.postCode} - {ticket.address.city}
                                   
                                </p>
                            )}
                            {/* <p>Téléphone : {ticket.phone}</p> */}

                            <div className="ticket-content">
                                
                            <button className="btn" ><Link to={`/admin/ticket/${ticket.id}/update`}>modifier le ticket</Link></button>
                                   

                                <button className="btn" onClick={() => handleDeleteClick(ticket)}>Supprimer le ticket</button>
                            </div>
                        </div>
                        <Link className="btn" to="/admin/list_ticket">Retour à la liste des tickets</Link>
                    </div>
                </>
            ) : (
                <p>Le ticket a bien été supprimé</p>
            )}
            <Footer />
        </div>
    );
    
}
  
export default Ticket_details;
  