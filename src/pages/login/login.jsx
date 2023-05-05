import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";
import style from "./style_login.scss";


const Login =() => {
    return(
        <>
            <Header />
            <main>
                <section id="formulaire-connexion">
                    <form className="row g-3">
                        <h2>Connexion</h2>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email </label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Votre adresse email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Votre mot de passe" />
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-primary">Connexion</button>
                        </div>
                        <p>Mot de passe perdu ?</p>

                        <h2>Nouveau client ?</h2>

                        <div className="col-12 btn-center">
                            <button type="submit" className="btn btn-primary"><Link to="/admin/creat_account">Créez un compte</Link></button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />  
            
        </>
    )
}

export default Login;