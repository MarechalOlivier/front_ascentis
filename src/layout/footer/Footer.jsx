import style from "../footer/style.scss"
import logo from  "../img/logo_c.png"
import facebook from "../img/facebook_b.png"
import linkedin from "../img/linked_b.png"
import github from "../img/github_b.png"
import youtube from "../img/youtube_b.png"

const Footer =() =>{
    return(
        <footer>
            <div className="first-footer">
                <ul>
                    <li><a href="#">Qui sommes-nous</a></li>
                    <li><a href="#">Nos engagements</a></li>
                    <li><img src={logo}/></li>
                    <li><a href="#">Contacter-nous</a></li>
                    <li><a href="#">Où nous trouver</a></li>
                </ul>
            </div>
            <div className="social-links">
                <a href="https://facebook.com/" target="_blank">
                    <img src={facebook} alt="Logo facebook"/>
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedin} alt="Logo linkedin"/>
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={github} alt="Logo github" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <img src={youtube} alt="Logo youtube"/>
                </a>
                <p>© Copyright 2023 | Mentions légales | Conditions Générales de vente</p>
            </div>


 
        </footer>
    )
    
}

export default Footer;