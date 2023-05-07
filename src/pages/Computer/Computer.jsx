import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

import style from "./style_computer.scss";

const Computer =() => {
    return(
        <>
            <Header />
            <main>
                <section id="computers">
                    <h1>Ordinateurs</h1>

                    <div className="computer">
                        <div className="computer-search">
                            <h2>Recherche</h2>
                            <form>
                                <input type="text" className="text-search" placeholder="Recherche" />
                                <button className="btn-search" type="submit">Rechercher</button>
                            </form>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Type d'ordinateur</button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">Ordinateurs de bureau</button></li>
                                    <li><button class="dropdown-item" type="button">Ordinateurs portables</button></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Type de processeur</button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">AMD Ryzen 5</button></li>
                                    <li><button class="dropdown-item" type="button">AMD Ryzen 7</button></li>
                                    <li><button class="dropdown-item" type="button">Intel core i3</button></li>
                                    <li><button class="dropdown-item" type="button">Intel Core i5</button></li>
                                    <li><button class="dropdown-item" type="button">Intel Core i7</button></li>
                                    <li><button class="dropdown-item" type="button">Intel Core i9</button></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mémoire (RAM)</button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">16 Go</button></li>
                                    <li><button class="dropdown-item" type="button">32 Go</button></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Capacité de stockage</button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">1 To</button></li>
                                    <li><button class="dropdown-item" type="button">2 To</button></li>
                                    <li><button class="dropdown-item" type="button">3 To</button></li>
                                    <li><button class="dropdown-item" type="button">4 To</button></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Carte graphique</button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">AMD Radeon 6400</button></li>
                                    <li><button class="dropdown-item" type="button">AMD Radeon 6600</button></li>
                                    <li><button class="dropdown-item" type="button">AMD Radeon 6700</button></li>
                                    <li><button class="dropdown-item" type="button">AMD Radeon 6800</button></li>
                                    <li><button class="dropdown-item" type="button">AMD Radeon 6900</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 2060</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 2070</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 2080</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 3060</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 3070</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 3080</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 3090</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 4070</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 4080</button></li>
                                    <li><button class="dropdown-item" type="button">Nvidia GeForce RTX 4090</button></li>                                  
                                </ul>
                            </div>

                            

                         </div>  

                        <div className="computer-list">
                            <h2>Liste des ordinateurs</h2>
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

export default Computer;