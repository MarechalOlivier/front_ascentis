import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_creat_account.scss";

const Creat_account = () => {
    return (
        <>
            <Header />
            <main>
                <section id="formulaire">
                    <form class="row g-3">
                        <h2>Identifiants</h2>
                        <div class="col-md-6">
                            <label htmlFor="inputEmail" class="form-label">Email *</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Votre adresse email" required />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="inputPassword" class="form-label">Password *</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Votre mot de passe" required />
                        </div>
                        
                        <h2>Informations personnelles</h2>
                        <div class="col-md-6">
                            <label htmlFor="inputName" class="form-label">Prénom *</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Votre Prénom" required />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="inputLastName" class="form-label">Nom *</label>
                            <input type="text" class="form-control" id="inputLastName" placeholder="Votre Nom" required />
                        </div>
                        <div class="col-12">
                            <label htmlFor="inputAdresse1" class="form-label">Adresse *</label>
                            <input type="text" class="form-control" id="inputAddress1" placeholder="Adresse" required />
                        </div>
                        <div class="col-12">
                            <label htmlFor="inputAdresse2" class="form-label">Complément d'adresse</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Entrée, bat, résidence" required />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="inputCity" class="form-label">Ville *</label>
                            <input type="text" class="form-control" id="inputCity" required />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Pays *</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choisir...</option>
                                <option>France (métropolitaine)</option>
                                <option>Luxembourg</option>
                                <option>Belgique</option>
                                <option>Monaco</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Code Postal</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary">Valider</button>
                        </div>
                        <div class="col-12 text-center">
                            <p>* Champs obligatoires</p>
                        </div>
                        <div class="col-12 text-center">
                            <p>Nous nous engageons à garder ces informations strictement confidentielles.</p>
                            <p>Les informations recueillies par Ascentis font l'objet d'un traitement destiné à la gestion de la relation client-prospect et aux opérations associées.</p>
                        </div>
                    </form>
                </section>               
                                
            </main>
            <Footer />
        </>
    )
}

export default Creat_account;