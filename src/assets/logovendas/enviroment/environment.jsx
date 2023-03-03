
import React, { useState } from 'react';
import "./environment.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Category1 from "../../images/category_1.png"
import Category2 from "../../images/category_2.png"
import Category3 from "../../images/category_3.png"

import Category4 from "../../images/category_4.png"
import Category5 from "../../images/category_5.png"
import Category6 from "../../images/category_6.png"
import Category7 from "../../images/category_7.png"
import Category8 from "../../images/category_8.png"


export const Controllvendas = () => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className='div-main-carousel' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category1}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Phone</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category2}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Speaker</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category3}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Shoes</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category4}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>TV</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category5}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Chair</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category6}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Bag</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category7}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Watch</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='div-text-img-vendas '>
                    <div className="div-novo-carousel">
                        <img
                            className="div-novo-carosel-img"
                            src={Category8}
                            alt="First slide"
                        />

                    </div>

                    <Carousel.Caption className='item-h3'>
                        <h3>Accessories</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
}