import React from "react";
import { useState, useEffect, useRef } from "react";
import "./vendas.css";
import Otiziuq from "../../images/novoquizito.png";
import { ControlledCarousel } from "../carousel/carousel";
import { Controllvendas } from "../enviroment/environment";
import { Fields } from "../itensmodelo/shoppingfields";
import { Footer } from "../../../components/Footer";
// import { motion } from "framer-motion"



export const Logovendas = () => {


    return (
        <>
            <div className="div-container-vendas">
                <div className="wrapper-vendas">
                    <div className="containe-marcas">

                        <h2>Suas Compras</h2>
                    </div>
                    <div className="container-loja" >
                        <div className="logo-loja-text">
                            <h3>new purchases</h3>
                            <h2>New men style  2023</h2>
                            <p>
                                Com nossos anúncios inteligentes e práticos,
                                você pode alcançar mais clientes relevantes
                                com seu orçamento. Além disso, ajudamos você a melhorar os
                                anúncios para alcançar resultados importantes para sua empresa.
                            </p>
                            <button className="botao-marca-loja">Buy now</button>
                        </div>
                        <div className="logo-loja-img">
                            <img src={Otiziuq} alt="" />
                        </div>
                    </div>
                </div>

                <div className="carousel">
                    <ControlledCarousel />
                </div>

                <div className="environment-vendas">
                    <Controllvendas />
                </div>
                <div className="itensmodelos-vendas">
                    <Fields />
                </div>
                <div className="item-vendas-footer">
                    <Footer />
                </div>

            </div>
        </>
    )
}