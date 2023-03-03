import React from "react";
import "./configquesomos.css"
import { Footer } from "../../components/Footer";
export const Quesomos = () => {
    return (
        <>
            <div className="container-config">

                <div className="configquesomos">

                    <div className="wrapper-config">
                        <h2>Quem Somos</h2>
                    </div>
                    <div className="wrapper-config-text">
                        <div className="blog-img">

                        </div>
                        <div className="wrapper-config-text-p">
                            <div className="inside-blog">

                                <h2>Nós Somos Assim</h2>
                            </div>
                            <p>Nós Somos conectado ao todos mundo inteiro e
                                fazemos parte de uma família muito forte em Front-end Back-end e  Marketing
                            </p>
                            <p> E também nós
                                Acreditamos que esses valores é o
                                que nos dá a base e sustentação para
                                todos os nossos outros princípios.
                                Toda empresa é feita de pessoas e é
                                nisso que acreditamos, nos
                                valores que cada colaborador carrega dentro de si.
                                Nós somos uma família forte em união somos um só.
                            </p>

                        </div>

                    </div>
                    {/* <Footer /> */}
                </div>
                <div className="div-footer">
                    <Footer />
                </div>

            </div>
        </>
    )
}