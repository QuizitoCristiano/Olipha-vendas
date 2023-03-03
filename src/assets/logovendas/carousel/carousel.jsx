
import React, { useState } from 'react';
import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import Quizito from "../../images/novoquizito.png"
import Quizito2 from "../../images/novoquizito.png"
import Quizito3 from "../../images/novoquizito.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from "@mui/material"

export const Cardemep = ({
    title, text, Strong
}) => {
    return (
        <>
            <Stack>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{Strong}</p>

            </Stack>
        </>
    )
}




export const ControlledCarousel = () => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                    <div className="div-images-carousel">
                        <img
                            className="div-carosel-img"
                            src={Quizito}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption className='text-flex-ende'>
                        <Cardemep
                            title='Corte de cabelo curto com degradê'
                            text=" Ano Novo 2023 e comece o ano com o pé direito e, claro, muito estilo!"
                        />
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="div-images-carousel">
                        <img
                            className="div-carosel-img"
                            src={Quizito2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Cardemep
                            title="Estilo masculino mais top"

                        />

                        <p>acessórios como chapéu, boné, óculos de sol e bolsa
                            . Mas tudo isso é só na <strong>Olipha</strong>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="div-images-carousel">
                        <img
                            className="div-carosel-img"
                            src={Quizito3}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <Cardemep
                            title="Novo estilo masculino dos jovens."
                            text="As roupas mostram nosso estilo e personalidade."
                        />

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}



