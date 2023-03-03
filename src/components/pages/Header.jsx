import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./styleslogotop.css"
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, TextField, Typography } from "@mui/material";
import Olipha from "../../assets/images/olipha2.png";

export const Header = () => {
    const [abreMeno, setabreMeno] = useState(false)
    const MenuAberto = () => {
        setAbrirIcon(true)
    }
    const FecharMenu = () => {
        setabreMeno(!abreMeno)
    }


    return (
        <>

            <Stack className="contaneir-logo-top">
                <Typography className="contaneir-logo">
                    <div className="div-logo-position-fixed">
                        <img src={Olipha} alt="" width="35%" />
                    </div>
                    <div className="logo-links">
                        <Link to="/">Home</Link>
                        <Link to="/vendas">Compras</Link>
                        <Link to="/Quesomos">Quem Somos</Link>
                        <Link to="/contatos">Contato</Link>
                    </div>
                    <div className="logo-icons">
                        <span onClick={FecharMenu}>
                            {abreMeno ? <CloseIcon /> : <DehazeIcon />}
                        </span>
                    </div>

                    {abreMeno && (
                        <div className="menu-celular">
                            <div className="icone-fechar">
                                fechar
                                <CloseIcon onClick={FecharMenu} />
                            </div>
                            <div className="itens-menu-celular">
                                <Link to="/">Home</Link>
                                <Link to="/vendas">Compras</Link>
                                <Link to="/Quesomos">Quem Somos</Link>
                                <Link to="/contatos">Contato</Link>
                            </div>
                        </div>
                    )}
                </Typography>
            </Stack>

        </>
    )

}