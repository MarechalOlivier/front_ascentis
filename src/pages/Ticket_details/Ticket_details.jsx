import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_ticket_details.scss";

const Tickets_details = () => {
    // je créé un state pour stocker un coworking
    const [ticket, setTicket] = useState(null);
  
    // je récupère l'id présent dans l'url
    const { id } = useParams();
  
    // j'utilise useEffect, pour executer l'appel à l'api
    // une seule fois, au chargement du composant
    useEffect(() => {
      // je fais un appel fetch, vers l'url de l'api pour récupérer
      //  un coworking en fonction de l'id présent dans l'url
      fetch(`http://localhost:3005/api/ticket/${id}`)
        .then((responseJson) => responseJson.json())
        .then((responseJs) => {
          // si j'ai une réponse de l'api, je stocke le coworking
          // renvoyé dans le state
          setTicket(responseJs.data);
        });
    }, [id]); 
  
    return (
        <div>
            <Header />
            {ticket ? (
                <>
                    <div className="ticket-details">
                        <h1>Détail du ticket</h1>
                        <div className="content">
                            <h2>{ticket.client_name}</h2>
                            <p>Numéro de client : {ticket.client_number}</p>
                            <p>Type : {ticket.type}</p>
                            <p>Urgence : {ticket.urgency}</p>
                            <p>Catégorie : {ticket.category}</p>
                            <p>Description : {ticket.description}</p>

                            {/* 
                                Vu que l'adresse n'est pas obligatoire
                                je vérifie qu'elle existe avant de l'afficher
                                */}
                            {ticket.address && (
                                <p>
                                    Adresse : {ticket.address.number} {ticket.address.street} - {ticket.address.postCode},{" "}
                                    {ticket.address.city}
                                </p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Pas de ticket trouvé</p>
            )}
        </div>
    );
};
  
  export default Tickets_details;
  