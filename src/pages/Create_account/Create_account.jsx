import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_create_account.scss";

const Create_account = () => {
    return (
        <>
            <Header />
            <main>
                <section id="formulaire">
                    <h1>Création de compte</h1>

                    <div className="account">
                        <form className="row g-3">
                            <h2>Identifiants</h2>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail" className="form-label">Email *</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Votre adresse email" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword" className="form-label">Password *</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Votre mot de passe" required />
                            </div>

                            <h2>Informations personnelles</h2>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="form-label">Prénom *</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Votre Prénom" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputLastName" className="form-label">Nom *</label>
                                <input type="text" className="form-control" id="inputLastName" placeholder="Votre Nom" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAdresse1" className="form-label">Adresse *</label>
                                <input type="text" className="form-control" id="inputAddress1" placeholder="Adresse" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAdresse2" className="form-label">Complément d'adresse</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Entrée, bat, résidence" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Ville *</label>
                                <input type="text" className="form-control" id="inputCity" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Pays *</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choisir...</option>
                                    <option>France (métropolitaine)</option>
                                    <option>Luxembourg</option>
                                    <option>Belgique</option>
                                    <option>Monaco</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Code Postal</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary">Valider</button>
                            </div>
                            <div className="col-12 text-center">
                                <p>* Champs obligatoires</p>
                            </div>
                            <div className="col-12 text-center">
                                <p>Nous nous engageons à garder ces informations strictement confidentielles.</p>
                                <p>Les informations recueillies par Ascentis font l'objet d'un traitement destiné à la gestion de la relation client-prospect et aux opérations associées.</p>
                            </div>
                        </form>
                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}

export default Create_account;