import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "./style_create_account.scss"
import bcrypt from "bcryptjs";


const Create_account = () => {


    // Gère la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();


        const plainPassword = event.target.password.value; // Mot de passe en clair
        const saltRounds = 12; // Nombre de tours de hachage
        const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds); // Récupère les valeurs des champs du formulaire
        
        const username = event.target.username.value;
        const password = event.target.password.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const address = event.target.address.value;
        const city = event.target.city.value;
        const country = event.target.country.value;
        const postalCode = event.target.postalCode.value;
        const phoneNumber = event.target.phoneNumber.value;




        

        // Envoie une requête POST à l'API pour créer un ticket   
        fetch("http://localhost:3005/api/customer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({
                username: username,
                password: hashedPassword, // Mot de passe haché
                firstName: firstName,
                lastName: lastName,
                address: {
                    address: address,                  
                    city: city,
                    country: country,
                    postalCode: postalCode,
                },              
                phoneNumber: phoneNumber,

            }),

            // si l'api renvoie une reponse 200
            // ça veut dire que tout s'est bien passé
            // alors on affiche un message dans la console
        }).then((response) => {
            if (response.status === 200) {
                console.log("L'utilisateur a bien été créé");
                // sinon on affiche un message d'erreur
                // car cela veut dire que le coworking n'a pas été créé
            } else {
                console.log("Erreur lors de la création de l'utilisateur");
            }
        });
    };

    console.log("Le formulaire de création utilisateur à bien été émis");






    return (
        <>
            <Header />
            <main>
                <section id="formulaire">
                    <h1>Création de compte</h1>

                    <div className="account">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <h2>Identifiants</h2>
                            <div className="col-md-6">
                                <label htmlFor="username" className="form-label">Email *</label>
                                <input type="email" className="form-control" name="username" placeholder="Votre adresse email" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password *</label>
                                <input type="password" className="form-control" name="password" placeholder="Votre mot de passe" required />
                            </div>

                            <h2>Informations personnelles</h2>
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">Prénom *</label>
                                <input type="text" className="form-control" name="firstName" placeholder="Votre Prénom" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Nom *</label>
                                <input type="text" className="form-control" name="lastName" placeholder="Votre Nom" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Adresse *</label>
                                <input type="text" className="form-control" name="address" placeholder="Adresse" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label">Ville *</label>
                                <input type="text" className="form-control" name="city" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="country" className="form-label">Pays *</label>
                                <select name="country" className="form-select">
                                    <option selected>Choisir...</option>
                                    <option>France (métropolitaine)</option>
                                    <option>Luxembourg</option>
                                    <option>Belgique</option>
                                    <option>Monaco</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="postalCode" className="form-label">Code Postal</label>
                                <input type="text" className="form-control" name="postalCode" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="phoneNumber" className="form-label">Téléphone</label>
                                <input type="number" className="form-control" name="phoneNumber" placeholder="Votre numéro de téléphone" required />
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