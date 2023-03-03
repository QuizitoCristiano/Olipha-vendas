import React from "react";
import "./formlogo.css"
import Quizito from "../../assets/images/quizito3.png"

import { useEffect } from "react";
import aos from "aos"
import "aos/dist/aos.css"

export const Formlogo = () => {

    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);



    return (<>
        <div className="formelogo-container">
            <div className="wrapper-text" >
                <h2>Sobre Nós</h2>
                <div className="wrapper-son-text">
                    <p>Somo uma empresa de negócios que você pode fazer sua compra em sua casa
                        Somos hunidos para colaboramos com você e ajudar você com suas compras
                        Agora você não pode sofrer porque em qualquer ponto onde você se encontra você vai fazer sua compras  🛍 com  garantia.
                    </p>
                    <p>
                        E não se esqueça que na nossa loja você é muito
                        bem-vindo e o nosso mercado está aperto a partir das 6:00 horas  tá manhã até as 9 horas da noite então você pode fazer  a qualquer hora que você quiser.

                    </p>
                    <p className="so-na-olipha">Tudo isso só na Olipha</p>
                </div>
            </div>
            <div className="mywrapper">
                <div className="wrapper-img">
                    <img src={Quizito} alt="" />
                </div>
            </div>

        </div>
    </>)
}