import React from "react";
import './style.css'

import Topo from '../../Topo'
import Rodape from '../../Rodape'

const Sabores = () => (
    <div>
        <Topo />
        <div>
            <section className="banner banner-sabores">
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className="sabores-pagina">
                <h2>SABORES DE SORVETE</h2>
                <div className="card-container limitar-secao">
                    <div className="card">
                        <img src="./assets/sabor-oreo.png"/>
                        <div>
                            <h3>Sorvete de Oreo</h3>
                            <p>
                                Delicioso sorvete sabor Oreo.
                                Uma explosão de sabor.
                            </p>               
                        </div>
                    </div>
                    <div className="card">
                        <img src="./assets/sabor-pistache.png"/>
                        <div>
                            <h3>Sorvete de Pistache</h3>
                            <p>
                                Cremoso sorvete sabor pistache com pedacinhos de semente.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./assets/sabor-cookies-avela.png"/>
                        <div>
                            <h3>Sorvete de Cookies & Avelã</h3>
                            <p>
                                O nosso melhor sorvete. Você vai adorar o sabor.
                            </p>            
                        </div>
                    </div>
                    <div className="card">
                        <img src="./assets/sorbet-kiwi.png"/>
                        <div>
                            <h3>Sorvete de Kiwi</h3>
                            <p>
                                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./assets/sorbet-morango.png"/>
                        <div>
                            <h3>Sorvete de Morango</h3>
                            <p>
                                Sorvete de morango gourmet. Tradicional e saboroso
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./assets/sorbet-limao.png"/>
                        <div>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>
                                O incrível sorvete gourmet de limão siciliano vai te encantar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Rodape />
    </div>
)

export default Sabores;