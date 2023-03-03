import React from "react";
import "./Cardes.css";

import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import SportsKabaddiSharpIcon from '@mui/icons-material/SportsKabaddiSharp';
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';


import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";

import { useEffect } from "react";
import aos from "aos"
import "aos/dist/aos.css"
import { Stack } from "@mui/material";
import { Card } from "./Card";

export const Cardes = () => {

    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);

    const cards = [
        { img: Service1, title: "Serviço 1", price: '$19.90' },
        { img: Service2, title: "Serviço 2", price: '$19.90' },
        { img: Service3, title: "Serviço 3", price: '$19.90' },

    ]

    return (
        <>
            <div className="cardes">

                <div className="cardes-servicos">
                    <h2>Serviço</h2>
                </div>
                <div className="my-carde-service">
                    {cards.map(card => {
                        return <Card key={card.title} {...card} />
                    })}
                    {/* justifyContent="space-evenly" alignItems="center" mt={2} sx={{ width: '100%' }} */}
                </div>

                <div className="div-wrapper-cardes">
                    <div className="bloco-home" >
                        <div className="bloco-home-img">
                            <CleanHandsIcon className="icom" />

                        </div>
                        <div className="bloco-home-text">
                            <h2>Facilidade de fazer compras online</h2>
                            <p>Devido a grande quantidade de anúncios de
                                negócios
                                você pode realizar as suas  compras agora online em
                                forma mas simples e rápida.</p>
                        </div>
                    </div>
                    <div className="bloco-home" >
                        <div className="bloco-home-img">
                            <AccountBalanceRoundedIcon className="icom" />
                        </div>
                        <div className="bloco-home-text">
                            <h2>Facilidade de fazer compras online</h2>
                            <p>Devido a grande quantidade de anúncios de
                                negócios
                                você pode realizar as suas  compras agora online em
                                forma mas simples e rápida.</p>
                        </div>
                    </div>
                    <div className="bloco-home" >
                        <div className="bloco-home-img">
                            <SportsKabaddiSharpIcon className="icom" />
                        </div>
                        <div className="bloco-home-text">
                            <h2>Aja com propósito. Nossa visão de negócios</h2>
                            <p>cria soluções de negócios para transformar, em nível cultural, a maturidade da alta gestão das empresas familiares brasileiras..

                            </p>
                        </div>
                    </div>
                    <div className="bloco-home" >
                        <div className="bloco-home-img">
                            <DoneAllSharpIcon className="icom" />
                        </div>
                        <div className="bloco-home-text">
                            <h2>Controle de Qualidade nos Anúnciamos </h2>
                            <p>Possuímos um rígido de controle de qualidade para garantir que somente sejam anunciados para venda negócios na olipha.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}