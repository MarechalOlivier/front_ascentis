import React from "react";
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

import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import style from "../Home/style_home.scss"

const Home =() => {

return(
    <>
        <Header />
        <main>
          <section id="banner">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={depannage} class="d-block w-100" alt="..."/>
                  
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Dépannage informatique</h2>
                  </div>

                </div>
                <div class="carousel-item">
                  <img src={maintenance} class="d-block w-100" alt="..."/>

                  <div class="carousel-caption d-none d-md-block">
                    <h2>Maintenance informatique</h2>
                  </div>

                </div>
                <div class="carousel-item">
                  <img src={cyber} class="d-block w-100" alt="..."/>

                  <div class="carousel-caption d-none d-md-block">
                    <h2>Cybersécurité</h2>
                  </div>

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>

          <section id="presentations">
            <div className="title">
              <h1>Support et vente informatique</h1>
              <p>Des solutions informatiques adaptées à vos besoins</p>
            </div>
            <div className="services">
              <div class="presentation">
                  <div class="img-container">
                      <img src={support} alt="Personne travaillant sur un ordinateur portable"/>
                  </div>
                  <div class="content">
                      <h2>Support Informatique</h2>
                      <p>Problèmes informatiques ? Performances à améliorer ? Besoin de renforcer la sécurité votre infrastructure ? Nous avons les solutions pour répondre à vos besoins, que vous soyez une entreprise ou un particulier.</p>
                  </div>
                  <a class="btn btn-support" href="#">En savoir plus</a>
              </div>
              <div class="presentation">
                  <div class="img-container">
                      <img src={sale} alt="Ensemble de matériels informatique"/>
                  </div>
                  <div class="content">
                      <h2>Vente Informatique</h2>
                      <p>Besoin de matériel ou de logiciels informatiques performants ? Nous avons les solutions adaptées à vos besoins et à votre budget.</p>
                  </div>    
                  <a class="btn btn-sale" href="#">En savoir plus</a>
              </div>
            </div>
          </section>

          <section id="prestation">
            <div class="container">
              <div class="row">
                  <h2>NOS PRESTATIONS</h2>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src={logo_depanne} alt=""/>
                  <h3>DÉPANNAGE</h3>
                  <p>Besoin d’un dépannage informatique, d’une réparation d’ordinateur ? Pas besoin de vous déplacer, nous sommes là pour vous aider.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src= {logo_maintenance} alt=""/>
                  <h3>MAINTENANCE</h3>
                  <p>Indépendant, Profession libérale, TPE/PME. Vous recherchez un partenaire fiable et disponible ? Prenez contact avec nous.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src={logo_cyber} alt=""/>
                  <h3>CYBERSÉCURITÉ</h3>
                  <p>Protégez votre entreprise contre les menaces en ligne et assurez-vous que vos données sont en sécurité avec notre service d'audit de sécurité personnalisés.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src={logo_donnees} alt=""/>
                  <h3>RÉCUPÉRATION DE DONNÉES</h3>
                  <p>Nous pouvons récupérer vos données en cas de problème de disque dur, suppression accidentelle ou défaut matériel.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src={logo_training} alt=""/>
                  <h3>FORMATION INFORMATIQUE</h3>
                  <p>Nous vous proposons diverses formules de formation allant de la découverte au perfectionnement et à l’utilisation de votre matériel informatique.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src={logo_virus} alt=""/>
                  <h3>DÉPANNAGE VIRUS INFORMATIQUE</h3>
                  <p>Nous sommes à votre service pour diagnostiquer votre PC et supprimer les virus informatiques. Nous ferons le nécessaire pour sauver les données récupérables.</p>
                </div>
              </div>
            </div>
            <a className="btn" href="">PRENDRE RENDEZ-VOUS</a>
        </section>

            

      </main>
      <Footer />
    </>
  );
};

export default Home;