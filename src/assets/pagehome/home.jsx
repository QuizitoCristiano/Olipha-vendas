import React from "react";
import "./styles.css";

import { Box, Stack, TextField, Typography, } from "@mui/material";
import { IndexLogo } from '../../component/logo/indexlogo';
import { Formlogo } from "../../component/Form/formlogo"
import { Cardes } from "../../component/Mycompunents/Cardes"
import { Formeavatar } from "../../component/formavatar/formeavatar"
import { Footer } from "../../components/Footer";
export const Home = () => {
    return (
        <>
            <Stack className="container-home">

                <IndexLogo />
                <Formlogo />
                < Cardes />
                <Formeavatar />

                <div className="my-container-home">
                    <h2>Ola mundo</h2>
                    <Footer />
                </div>

            </Stack>

        </>
    )
}