import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";
import style from "./style_create_ticket.scss";


const Create_ticket =() => {
    return(
        <>
            <Header />
            <h1>Création ticket</h1>
            <Footer />
        </>
    )
}

export default Create_ticket;