import React from "react";
import './style.css'
import { Link } from 'react-router-dom';

const Topo = () => {
    return (
        <header>
        <div className="topo limitar-secao">
            <div>
                <img src="assets/logo.png"/>
            </div>
            <nav className="nav-menu">
                <Link className="menu-item" to='/'>Home</Link>
                <Link className="menu-item" to='/sabores'>Sabores</Link>
                <Link className="menu-item" to='/sobre'>Sobre</Link>
            </nav>
        </div>
    </header>
    )
}

export default Topo;