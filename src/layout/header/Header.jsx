import { useState, useEffect } from 'react';
import { useNavigate, Link, Navigate, useParams } from 'react-router-dom';
import logo from "../img/logo_c.png"
import logoCompte from "../img/logo_compte.png"

import style from "../header/style_header.scss"


const Header =() => {

    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); 


  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    window.location.replace("/");
  };
  
    

  return (
    <>
      <header>
        <nav>
          <div className="first_navbar">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Logo de l'entreprise"/></Link>
            </div>
            <div className="search">
              <input type="text" placeholder="Recherche"/>
              <button type="submit">Rechercher</button>
            </div>
            <div className="account-logo">
                <div className="account">
                    <img src={logoCompte} alt="Logo de compte"/>
                    <Link to="/account">Mon Compte</Link>
                </div>
                <div className="account">
                <img src={logoCompte} alt="Logo de deconnexion" />
                    {isLoggedIn ? (
                     
                        
                        <Link to="#" onClick={handleLogOut}>Déconnexion</Link>
                 
                ) : (
                  <Link to="/login">Déconnexion</Link>
                )}
                </div>
            </div>       
          </div>
          <div className="links">
            <ul>
              <li><a href="#">Dépannage</a></li>
              <li><a href="#">Maintenance</a></li>
              <li><a href="#">Cybersécurité</a></li>
              <li>|</li>
              <li><a href="#">Configurateur PC</a></li>
              <li><Link to="/Computer">Ordinateur</Link></li>
              <li><a href="#">Périphériques</a></li>
              <li><a href="#">Composant</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>    
  )};
    
    
export default Header;





// import { useState, useEffect } from 'react';
// import { useNavigate, Link, Navigate } from 'react-router-dom';
// import logo from "../img/logo_c.png"
// import logoCompte from "../img/logo_compte.png"

// import style from "../header/style_header.scss"


// const Header =() => {

 

    

//   return (
//     <>
//       <header>
//         <nav>
//           <div className="first_navbar">
//             <div className="logo">
//               <Link to="/"><img src={logo} alt="Logo de l'entreprise"/></Link>
//             </div>
//             <div className="search">
//               <input type="text" placeholder="Recherche"/>
//               <button type="submit">Rechercher</button>
//             </div>
//             <div className="account">
//                 <img src={logoCompte} alt="Logo de compte"/>
//                 <Link to="/admin/account">Mon Compte</Link>
//             </div>
//             <div className="account">
//                 <img src={logoCompte} alt="Logo de deconnexion"/>
//                 <Link to="/admin/account">Déconnexion</Link>
//             </div>
//           </div>
//           <div className="links">
//             <ul>
//               <li><a href="#">Dépannage</a></li>
//               <li><a href="#">Maintenance</a></li>
//               <li><a href="#">Cybersécurité</a></li>
//               <li>|</li>
//               <li><a href="#">Configurateur PC</a></li>
//               <li><Link to="/Computer">Ordinateur</Link></li>
//               <li><a href="#">Périphériques</a></li>
//               <li><a href="#">Composant</a></li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>    
//   )};
    
    
// export default Header;