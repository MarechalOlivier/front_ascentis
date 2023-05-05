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
                            <label for="inputEmail" class="form-label">Email *</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Votre adresse email" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword" class="form-label">Password *</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Votre mot de passe" required />
                        </div>
                        
                        <h2>Informations personnelles</h2>
                        <div class="col-md-6">
                            <label for="inputName" class="form-label">Prénom *</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Votre Prénom" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName" class="form-label">Nom *</label>
                            <input type="text" class="form-control" id="inputLastName" placeholder="Votre Nom" required />
                        </div>
                        <div class="col-12">
                            <label for="inputAdresse1" class="form-label">Adresse *</label>
                            <input type="text" class="form-control" id="inputAddress1" placeholder="Adresse" required />
                        </div>
                        <div class="col-12">
                            <label for="inputAdresse2" class="form-label">Complément d'adresse</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Entrée, bat, résidence" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Ville *</label>
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
                            <p>Nous nous engageons à garder ces informations strictement confidentielles.</p>
                        </div>
                    </form>
                </section>
                <p>Les informations recueillies par Ascentis font l'objet d'un traitement destiné à la gestion de la relation client-prospect et aux opérations associées.</p>
            </main>
            <Footer />
        </>
    )
}

export default Creat_account;