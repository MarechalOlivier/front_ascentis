import React from "react";
import { Link } from "react-router-dom";
import depannage from "../../assets/img/depannage_a.jpeg"
import maintenance from "../../assets/img/maintenance_a.jpg"
import cyber from "../../assets/img/cyber_a.jpg"
import support from "../../assets/img/support_b.jpg"
import sale from "../../assets/img/vente_a.png"
import logo_depanne from "../../assets/img/fixit.png"
import logo_maintenance from "../../assets/img/maintenance.png"
import logo_cyber from "../../assets/img/cyb.png"
import logo_donnees from "../../assets/img/dd1.png"
import logo_training from "../../assets/img/training.png"
import logo_virus from "../../assets/img/virus.png"
import logo_validation from "../../assets/img/validation.png"
import client_a from "../../assets/img/nancy-martin.png"
import client_b from "../../assets/img/nicolas-basso.png"
import client_c from "../../assets/img/remi-dubois.png"
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "../Home/style_home.scss"

const Home =() => {

return(
    <>
        <Header />
        <main>
          <section id="banner">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={depannage} className="d-block w-100" alt="..."/>
                  
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Dépannage informatique</h2>
                  </div>

                </div>
                <div className="carousel-item">
                  <img src={maintenance} className="d-block w-100" alt="..."/>

                  <div className="carousel-caption d-none d-md-block">
                    <h2>Maintenance informatique</h2>
                  </div>

                </div>
                <div className="carousel-item">
                  <img src={cyber} className="d-block w-100" alt="..."/>

                  <div className="carousel-caption d-none d-md-block">
                    <h2>Cybersécurité</h2>
                  </div>

                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>

          <section id="presentations">
            <div className="title">
              <h1>Support et vente informatique</h1>
              <p>Des solutions informatiques adaptées à vos besoins</p>
            </div>
            <div className="services">
              <div className="presentation">
                  <div className="img-container">
                      <img src={support} alt="Personne travaillant sur un ordinateur portable"/>
                  </div>
                  <div className="content">
                      <h2>Support Informatique</h2>
                      <p>Problèmes informatiques ? Performances à améliorer ? Besoin de renforcer la sécurité votre infrastructure ? Nous avons les solutions pour répondre à vos besoins, que vous soyez une entreprise ou un particulier.</p>
                  </div>
                  <a className="btn btn-support" href="#">En savoir plus</a>
              </div>
              <div className="presentation">
                  <div className="img-container">
                      <img src={sale} alt="Ensemble de matériels informatique"/>
                  </div>
                  <div className="content">
                      <h2>Vente Informatique</h2>
                      <p>Besoin de matériel ou de logiciels informatiques performants ? Nous avons les solutions adaptées à vos besoins et à votre budget.</p>
                  </div>    
                  <a className="btn btn-sale" href="#">En savoir plus</a>
              </div>
            </div>
          </section>

          <section id="prestation">
            <div className="container">
              <div className="row">
                  <h2>NOS PRESTATIONS</h2>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={logo_depanne} alt="Logo outils de réparation"/>
                  <h3>DÉPANNAGE</h3>
                  <p>Besoin d'un dépannage informatique, d'une réparation d'ordinateur ? Pas besoin de vous déplacer, nous sommes là pour vous aider.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src= {logo_maintenance} alt="Logo de maintenance"/>
                  <h3>MAINTENANCE</h3>
                  <p>Indépendant, Profession libérale, TPE/PME. Vous recherchez un partenaire fiable et disponible ? Prenez contact avec nous.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={logo_cyber} alt="Logo de cadenas réseau"/>
                  <h3>CYBERSÉCURITÉ</h3>
                  <p>Protégez votre entreprise contre les menaces en ligne et assurez-vous que vos données sont en sécurité avec notre service d'audit de sécurité personnalisés.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={logo_donnees} alt="Logo de disque dur"/>
                  <h3>RÉCUPÉRATION DE DONNÉES</h3>
                  <p>Si vous avez accidentellement supprimé des données ou si votre disque dur rencontre un problème, nous disposons de différentes méthodes pour récupérer vos données.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={logo_training} alt="Logo de formation"/>
                  <h3>FORMATION INFORMATIQUE</h3>
                  <p>Nous vous proposons diverses formules de formation allant de la découverte au perfectionnement et à l'utilisation de votre matériel informatique.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={logo_virus} alt="Logo de virus informatique"/>
                  <h3>DÉPANNAGE VIRUS INFORMATIQUE</h3>
                  <p>Nous sommes à votre service pour diagnostiquer votre PC et supprimer les virus informatiques. Nous ferons le nécessaire pour sauver les données récupérables.</p>
                  <a className="btn" href="#">En savoir plus</a>
                </div>
              </div>
            </div>
          </section>

          <section id="question_banner">
            <h2>Vous avez besoin d'un dépannage, vous avez un projet d'achat ou tout simplement des questions </h2>
            <p>Ascentis votre partenaire informatique, disponible de 8h00 à 19h00</p>
          </section>

          <section id="testimonials">
            <div className="container">
              <div className="row">
                <img src={logo_validation} alt="Logo de validation"/>
                <h2>ILS NOUS FONT CONFIANCE</h2>
                <div className="testimonial-container col-12 col-md-6 col-lg-4">
                  
                    <img src={client_a} alt="Logo outils de réparation"/>
                 
                  <div className="content">
                    <p>Dépannage très Pro, efficace, sérieux, ponctuel, avec un temps de résolution très rapide après alerte.</p>
                    <p className="name-bold">Nancy Martin</p>
                  </div>
                </div>
                <div className="testimonial-container col-12 col-md-6 col-lg-4">
                  
                    <img src={client_b} alt="Logo outils de réparation"/>
                  
                  <div className="content">
                    <p>Intervention à distance rapide et efficace, un samedi matin, un quart d'heure seulement après mon appel. </p>
                    <p className="name-bold">Nicolas Basso</p>
                  </div>
                </div>
                <div className=" testimonial-container col-12 col-md-6 col-lg-4">
                 
                    <img src={client_c} alt="Logo outils de réparation"/>
                  
                  <div className="content">
                    <p>Partenaire compétant et à l'écoute de ses clients. Toujours prompt à trouver une réponse.</p>
                    <p className="name-bold">Pedro Dos santos</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
            

      </main>
      <Footer />
    </>
  );
};

export default Home;