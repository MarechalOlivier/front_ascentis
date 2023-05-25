import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_ticket_details.scss";

const Ticket_details = () => {
  const [ticket, setTicket] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3005/api/ticket/${id}`)
      .then((ticketsDataJson) => {
        return ticketsDataJson.json();
      })
      .then((ticketsDataJs) => {
        setTicket(ticketsDataJs.data);
      });
  }, [id]);

  const handleDeleteClick = (ticket) => {
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:3005/api/ticket/" + ticket.id, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`, //
        
      },
    })
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />

      {ticket && Object.keys(ticket).length > 0 ? ( // si ticket existe et qu'il y a des données dans l'objet ticket
        <div className="ticket-details">
          <h1>Détail du ticket </h1>
          <div className="content-details">
            <h2>{ticket.client_name}</h2>
            <p>Numéro de client : {ticket.client_number}</p>
            <p>Type : {ticket.type}</p>
            <p>Urgence : {ticket.urgency}</p>
            <p>Catégorie : {ticket.category}</p>
            <p>Sujet : {ticket.subject}</p>
            <p>Description : {ticket.description}</p>

            {ticket.address && ( 
              <p>
                Adresse : {ticket.address.address} {ticket.address.postCode} - {ticket.address.city}
              </p>
            )}

            <div className="ticket-content">
              <button className="btn">
                <Link to={`/admin/ticket/${ticket.id}/update`}>Modifier le ticket</Link>
              </button>
              <button className="btn" onClick={() => handleDeleteClick(ticket)}>
                Supprimer le ticket
              </button>
            </div>
          </div>

          <Link className="btn" to="/admin/list_ticket">
            Retour à la liste des tickets
          </Link>
        </div>
      ) : (
        <div className="ticket-details">
          <h1>Détail du ticket </h1>
          <p>Le ticket a bien été supprimer.</p>
          <Link className="btn" to="/admin/list_ticket">
            Retour à la liste des tickets
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Ticket_details;