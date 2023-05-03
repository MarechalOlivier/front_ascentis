import React from "react";
import depannage from "../../assets/img/depannage_a.jpeg"
import maintenance from "../../assets/img/maintenance_a.jpg"
import cyber from "../../assets/img/cyber_a.jpg"
import support from "../../assets/img/support_b.jpg"
import sale from "../../assets/img/vente_a.png"




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
                  <a class="btn btn-support" href="#">Choisir cette classe</a>
              </div>
              <div class="presentation">
                  <div class="img-container">
                      <img src={sale} alt="Ensemble de matériels informatique"/>
                  </div>
                  <div class="content">
                      <h2>Vente Informatique</h2>
                      <p>Besoin de matériel ou de logiciels informatiques performants ? Nous avons les solutions adaptées à vos besoins et à votre budget.</p>
                  </div>    
                  <a class="btn btn-sale" href="#">Choisir cette classe</a>
              </div>
            </div>
            
            
        </section>

            </main>
            <Footer />
        </>
    );
};

export default Home;