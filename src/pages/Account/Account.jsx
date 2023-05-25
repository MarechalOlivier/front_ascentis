import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./style_account.scss";

const Account = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userRoles, setUserRoles] = useState("");

  // Autorisation JWT
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/login");
      return;
    }

    const jwtData = token.split(".")[1];
    const decodedJwt = JSON.parse(atob(jwtData));
    const expirationTime = decodedJwt.exp * 1000;
    const username = decodedJwt.username;
    const roles = decodedJwt.roles;

    const timeoutId = setTimeout(() => {
      navigate("/login");
    }, expirationTime - Date.now());

    setUserName(username);
    setUserRoles(roles);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const isAdmin = userRoles.includes("admin");

  return (
    <>
      <Header />
      <main>
        <section id="account">
          <h1>Bienvenue {userName}</h1>
          <h2>Niveau d'administration : {userRoles}</h2>
          <div className="content-account">
            <div className="ticket">
              <div className="line-ticket">
                <h3>Statut réparation</h3>
                <p>Vérifier l'état de réparation de vos produits</p>
              </div>
              <div className="line-ticket">
                <h3>Créer un ticket</h3>
                <p>Ouvrir un ticket de support pour signaler un problème</p>
                <button className="btn btn-primary">
                  <Link to="/admin/create_ticket">Créer un ticket</Link>
                </button>
              </div>
            </div>
            <div className="infos">
              <div className="line">
                <h3>Mes informations personnelles</h3>
                <p>Gérer vos informations personnelles</p>
                <button className="btn btn-primary">Modifier</button>
              </div>
              {isAdmin && (
                <div className="line">
                  <h3>Admininistration des tickets</h3>
                  <p>Gérer les tickets</p>
                  <button className="btn btn-primary">
                    <Link to="/admin/list_ticket">Gérer les tickets</Link>
                  </button>
                </div>
              )}
              <div className="line">
                <h3>Mes commandes et factures</h3>
                <p>Consulter vos commandes et télécharger vos factures</p>
                <button className="btn btn-primary">Consulter</button>
              </div>
              <div className="line">
                <h3>Préférences</h3>
                <p>Gérer vos préférences de compte</p>
                <button className="btn btn-primary">Modifier</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Account;




// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../../layout/header/Header";
// import Footer from "../../layout/footer/Footer";
// import "./style_account.scss";

// const Account =() => {

// ////////////////////////////////Authentification JWT + durée de validité du token ///////////////////////////
//     const navigate = useNavigate(); 
//     // Autorisation JWT
//     useEffect(() => {
//       const token = localStorage.getItem("jwt");
//       if (!token) {
//         navigate("/login");
//         return;
//       } 



//       // Décode le token JWT pour récupérer la date d'expiration
//       const jwtData = token.split(".")[1]; //
//       const decodedJwt = JSON.parse(atob(jwtData)); //
//       const expirationTime = decodedJwt.exp * 1000; // Convertit la date d'expiration en millisecondes
  
//       // Redirige vers la page de connexion lorsque le jeton expire
//       const timeoutId = setTimeout(() => {
//         navigate("/login");
//       }, expirationTime - Date.now()); // Définit le délai en millisecondes avant la redirection
  
//       // Nettoie le timeout lorsque le composant est démonté
//       return () => clearTimeout(timeoutId);
//     }, [navigate]);  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     return(
//         <>
//             <Header />
//             <main>
//                 <section id="account">
//                     <h1>Mon compte</h1>
                    
//                     <div className="content-account">

//                         <div className="ticket">
//                             <div className="line-ticket">
//                                 <h3>Statut réparation</h3>
//                                 <p>Vérifier l'état de réparation de vos produits</p>
//                             </div>
//                             <div className="line-ticket">
//                                 <h3>Créer un ticket</h3>
//                                 <p>Ouvrir un ticket de support pour signaler un problème</p>
//                                 <button className="btn btn-primary"><Link to="/admin/create_ticket">Créer un ticket</Link></button>
//                             </div>
//                         </div>
//                         <div className="infos">
//                             <div className="line">
//                                 <h3>Mes informations personnelles</h3>
//                                 <p>Gérer vos informations personnelles</p>
//                                 <button className="btn btn-primary">Modifier</button>
//                             </div>
//                             <div className="line">
//                                 <h3>Liste des tickets</h3>
//                                 <p>Gérer les tickets</p>
//                                 <button className="btn btn-primary"><Link to="/admin/list_ticket">Gérer les tickets</Link></button>
//                             </div>
//                             <div className="line">
//                                 <h3>Mes commandes et factures</h3>
//                                 <p>Consulter vos commandes et télécharger vos factures</p>
//                                 <button className="btn btn-primary">Consulter</button>
//                             </div>
//                             <div className="line">
//                                 <h3>Préférences</h3>
//                                 <p>Gérer vos préférences de compte</p>
//                                 <button className="btn btn-primary">Modifier</button>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default Account;