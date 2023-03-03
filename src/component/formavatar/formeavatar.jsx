import React, { useEffect } from "react";
import "./formeavatar.css";
import Quizito3 from "../../assets/images/quizito3.png"
import aos from "aos"
import "aos/dist/aos.css"
import { Box, Stack, TextField, Typography } from "@mui/material";


export const Cardemep = ({
    title, text, negocios
}) => {
    return (
        <>
            <Stack p={1} gap={4}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{negocios}</p>
            </Stack>
        </>
    )
}



export const Formeavatar = () => {
    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);


    return (
        <>
            <div className="formeavatar">
                <div className="container-avatar-img" >
                    <div className="poster">
                        <img src={Quizito3} alt="" />
                    </div>
                    <div className="div-logo-avatar">
                        <h2>Quizs da Bele</h2>
                    </div>
                </div>
                <div className="container-avatar-text" >
                    <Stack>
                        <Cardemep
                            title="Os Compradores Estão Aqui!"
                            text="Anuncie seu negócio no maior"
                            negocios="portal de vendas de negócios do Brasil!"
                        />

                    </Stack>

                </div>
            </div>
        </>
    )
}