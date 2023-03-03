import { Card as MuiCard } from "@mui/material"

export const Card = ({ title, img, price }) => {
    return <MuiCard my={2}>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <div className="div-text">
            <h3>{price}</h3>
            <button className="botao-agente">Compre Agora</button>
        </div>
    </MuiCard>
}