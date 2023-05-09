
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

import style from "./style_list_ticket.scss";

const List_ticket =() => {
    return(
        <>
            <Header />
            <main>
                <section id="tickets">
                    <h1>List des tickets</h1>
                    
                    <div className="ticket">
                        
                        <div className="ticket-search">
                            <h2>Recherche</h2>
                            <form>
                                <input type="text" className="text-search" placeholder="Recherche" />
                                <button className="btn-search" type="submit">Ok</button>
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
                            <h2>Tickets</h2>
                            <ul>
                                <li>
                                    <Link to="/computer/1">Ordinateur</Link>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </section>
            </main>
            <Footer />
        </>
    )
}

export default List_ticket;