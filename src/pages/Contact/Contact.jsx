import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_contact.scss";
import horloge from "../../assets/img/horloge.png";
import mail from "../../assets/img/mail.png";
import telephone from "../../assets/img/telephone.png";

const Contact =() => {
    return(
        <>
            <Header />
            <main>
                <section id="formulaire-contact">
                <h1>Formulaire de contact</h1>

                    <div className="contact">
                    <h2>Une demande ? Une question ?</h2>
                        <form className="row g-3 form">
                            <div class="col-md-6">
                                <label htmlFor="inputLastName" class="form-label">Nom *</label>
                                <input type="text" class="form-control" id="inputLastName" placeholder="Votre Nom" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail" className="form-label">Email * </label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Votre adresse email"/>
                            </div>
                            <div class="col-md-6">
                                <label htmlFor="inputMessage" class="form-label">Message *</label>
                                <textarea class="form-control" id="inputMessage" rows="6" placeholder="Ecrivez votre message"></textarea>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPhone" className="form-label">Téléphone *</label>
                                <input type="tel" className="form-control" id="inputPhone" placeholder="Votre mot de passe"/>
                            </div>                          
                            <div className="col-md-12 btn-contact">
                                <p>* Champs obligatoires</p>
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>                           
                        </form>
                    </div>
                    
                </section>
            </main >
            <Footer />
        </>
    )
}

export default Contact;