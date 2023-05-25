
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

import style from "./style_list_ticket.scss";

const List_ticket = () => {

    const [ticketsData, setTicketsData] = useState([]);

    // je récupère la fonction navigate du react router
    const navigate = useNavigate();

    // je fais l'appel fetch vers l'url de mon api (qui est en local)
    // et qui renvoie un json contenant la liste des coworkings en BDD
    // quand l'appel est terminé, je stocke les données récupérées
    // dans le state, ce qui force mon composant à se recharger

    useEffect(() => {
        fetch("http://localhost:3005/api/ticket")
            .then((ticketsDataJson) => {
                return ticketsDataJson.json();
            })
            .then((ticketsDataJs) => {
                setTicketsData(ticketsDataJs.data);
            });
    }, []);

    const handleDeleteClick = (ticket) => {
        const token = localStorage.getItem("jwt");

        // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
        // et je passe l'id du coworking à supprimer en paramètre de l'url
        fetch("http://localhost:3005/api/ticket/" + ticket.id, {
            method: "DELETE",
            // si l'url de mon api nécessite une authentification
            // je lui passe le JWT stocké en localStorage dans le header
            // de la requête
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            // quand le fetch est terminé, je recharge la page actuelle grâce
            // à la fonction navigate du react router
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
            <main>
                <section id="tickets">
                    <h1>Liste des tickets</h1>

                    <div className="ticket">

                        <div className="ticket-search">
                            <h2>Recherche</h2>
                            <form>
                                <input type="text" className="text-search" placeholder="Recherche" />
                                <button className="btn-search" type="submit">Ok</button>
                                <button className="btn btn-primary btnc">
                                    <Link to="/admin/create_ticket">Créer un ticket</Link>
                                </button>
                            </form>


                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Statut</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Ouvert</button></li>
                                    <li><button className="dropdown-item" type="button">Affecté</button></li>
                                    <li><button className="dropdown-item" type="button">En cours de traitement</button></li>
                                    <li><button className="dropdown-item" type="button">Résolu</button></li>
                                    <li><button className="dropdown-item" type="button">Clos</button></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Technicien</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">du plus ancien au plus récent</button></li>
                                    <li><button className="dropdown-item" type="button">du plus récent au plus ancien</button></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Date de création</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">du plus ancien au plus récent</button></li>
                                    <li><button className="dropdown-item" type="button">du plus récent au plus ancien</button></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Date de modification</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">du plus ancien au plus récent</button></li>
                                    <li><button className="dropdown-item" type="button">du plus récent au plus ancien</button></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Date de clôture</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">du plus ancien au plus récent</button></li>
                                    <li><button className="dropdown-item" type="button">du plus récent au plus ancien</button></li>
                                </ul>
                            </div>
                        </div>

                        <div className="ticket-list">

                            {ticketsData.map((ticket) => {
                                return (
                                    <div key={ticket.id}>

                                        <div className="table">
                                            <div className="ticket-title">
                                                <h2>{ticket.client_name}</h2>
                                                <p>Priorité : {ticket.urgency}</p>
                                            </div>

                                            {/* 
                                            Je créé un lien (grâce au react router)
                                            vers la page de détail du ticket
                                            et je lui passe en parametre l'id du ticket actuel
                                        */}
                                            <div className="ticket-content">
                                                <Link to={`/admin/ticket/${ticket.id}`}>Voir le ticket</Link>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default List_ticket;