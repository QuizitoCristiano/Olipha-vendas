import React from "react";
import "./usercontatos.css"
import { UserInput } from "../inputs/userinputs"
import { Stack } from "@mui/material";
import { Footer } from "../../../components/Footer/index"
export const Usercontato = () => {
    return (
        <>
            <div className="div-container-usercontato">

                <div className="user-container">

                    <div className="user-wrapper">
                        <h2>Contato</h2>
                    </div>
                    <div className="div-info-input">
                        <UserInput />

                    </div>

                </div>

                <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                    <Footer />
                </Stack>


            </div>
        </>
    )
}