import React, { useEffect } from "react";

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import InstagramIcon from '@mui/icons-material/Instagram';
import Logofinalimg from '../../assets/images/olipha2.png';
import "./logofinal.css"
import aos from "aos";
import "aos/dist/aos.css"
import { Box, Stack, TextField, Typography, } from "@mui/material";



export const Cards = ({
    title, text1, text2, text3, text4
}) => {
    return (
        <>
            <Stack className="div-wrapper " spacing={0.20}>
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
            </Stack>
        </>
    )
}





export const Footer = () => {

    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);

    return (
        <>
            <Stack className="container-footer">
                <Stack className="BoxContainer" >

                    <Box className="div-container-logo-final" data-aos="fade-right">
                        <img src={Logofinalimg} alt="" />
                    </Box>

                    <Stack className="div-container-logo-icons" direction="row" my={2} spacing={1} data-aos="fade-down">
                        <FacebookTwoToneIcon className="redesociais1" />
                        <YouTubeIcon className="redesociais1" />
                        <InstagramIcon className="redesociais1" />
                        <WhatsAppIcon className="redesociais1" />
                    </Stack>

                    <Stack className="div-cantainer-text ">

                        <Typography data-aos="fade-right" >
                            <Cards
                                title='Quem Somos'
                                text1='Trabalhe conosco'
                                text2="Empresas"
                                text3="Política de Privacidade"
                                text4="Compromisso de Integridade"
                            />
                        </Typography>
                        <Typography data-aos="fade-left">
                            <Cards
                                title='Recursos'
                                text1='Trabalhe conosco'
                                text2="Empresas"
                                text3="Política de Privacidade"
                                text4="Compromisso de Integridade"
                            />
                        </Typography>
                        <Typography data-aos="fade-up">
                            <Cards
                                title='Fale Conosco'
                                text1='Email e telefone'
                                text2="Perguntas frequentes"

                            />

                        </Typography>

                    </Stack >
                    <Stack className="div-inputs-footer" direction="column">
                        <h2 className="Typography">Novidades e Lançamentos</h2 >
                        <Stack className="div-inputs">
                            <TextField sx={{ width: '50%' }} placeholder="email" ></TextField >
                            <button type="text" >enviar</button >
                        </Stack>
                    </Stack>

                </Stack>
            </Stack >
        </>
    )
}