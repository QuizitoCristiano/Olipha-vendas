import React from "react";
import "./shoppingfields.css"

import { useEffect } from "react";
import aos from "aos"
import "aos/dist/aos.css"

import StarSharpIcon from '@mui/icons-material/StarSharp';
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


import Product1 from "../../images/product_1.png"
import Product2 from "../../images/product_2.png"
import Product3 from "../../images/product_3.png"
import Product4 from "../../images/product_4.png"
import Product5 from "../../images/product_5.jpg"
import Product6 from "../../images/product_28.png"
import Product7 from "../../images/product_7.png"
import Product8 from "../../images/product_8.jpg"

const cards = [
    {
        imagem: Product1,
        title: 'Liquidificador',
        nameText: 'Blender...',
        valor: 'R$: 509'
    },
    {
        imagem: Product2,
        title: 'Sapato',
        nameText: 'Shoe...',
        valor: 'R$: 609'
    },
    {
        imagem: Product3,
        title: ' Camiseta ',
        nameText: 'T-shirt...',
        valor: 'R$: 59'
    },
    {
        imagem: Product4,
        title: ' Dress ou Saia',
        nameText: 'Dress...',
        valor: 'R$:89'
    },
    {
        imagem: Product5,
        title: 'Pasta',
        nameText: 'Bag...',
        valor: 'R$: 799'
    },
    {
        imagem: Product6,
        title: 'Messa',
        nameText: '3 legged table...',
        valor: 'R$: 240'
    },
    {
        imagem: Product7,
        title: 'Perfume kaiak',
        nameText: 'perfume masculino Kaiak...',
        valor: 'R$: 79'
    },
    {
        imagem: Product8,
        title: ' Perfume kaiak ',
        nameText: 'kayak perfume...',
        valor: 'R$: 179'
    }
]
const Cards = ({
    imagem, title, nameText, valor
}) => {
    return (
        <>
            <div className="container-avatar-fields" >
                <div className="fields-poster">
                    <img src={imagem} alt="" />
                </div>

                <div className="div-logo-avatar-fields">

                    <h2 className="div-avatar-fieds-logo" >{title}</h2>
                    <div className="div-rating-icons" >
                        <StarSharpIcon className="fa-star" />
                        <StarSharpIcon className="fa-star" />
                        <StarSharpIcon className="fa-star" />
                        <StarHalfSharpIcon className="fa-star" />
                        <StarOutlineIcon className="fa-star" />
                    </div>
                    <div className="info-fieds" >
                        <p>{nameText}</p>
                        <h3>{valor}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Fields = () => {
    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);
    return (
        <>
            <div className="shoppingfields">
                {
                    cards.map((item) => (
                        <Cards key={item.title} {...item} />
                    ))
                }

            </div>

        </>
    )
}