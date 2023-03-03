import { Stack } from "@mui/material";
// import { Footer } from "../../components/Footer/index";
import { Header } from "../../components/pages/Header";

import { Home } from "../pagehome/home";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Stack sx={{ width: '100vw', height: 'auto', overflow: 'hidden' }}>
                <Header />
                <Stack sx={{ width: '100%', mt: '15vh', height: '80vh', }}>
                    {children}


                </Stack>
            </Stack>
        </>
    )
}