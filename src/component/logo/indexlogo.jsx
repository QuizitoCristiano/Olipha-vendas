import React, { Component, useState } from "react";
import './indexlogo.css';
import Menuolipha from "../../assets/images/olipha1.png"
import Foto from "../../assets/images/foto1 .png";

export const IndexLogo = () => {

    return (
        <>

            <div className="logo-container">

                <div className="logo-olipha">

                    <h1>Somos de um grupo </h1>
                    <img src={Menuolipha} alt="" />
                </div>
                <div className="logo-olipha-text">
                    <p>O melhor lugar de fazer suas compras com garantia e segurança</p>
                    <button className="botao">vamos</button>
                </div>
            </div>
        </>
    )
}