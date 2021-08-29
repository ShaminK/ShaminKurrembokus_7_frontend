import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../logo.png'

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={Logo} className='logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link" aria-current="page" to="/createaccount">Créer compte</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/connect">Connexion</NavLink>
                        <NavLink className="nav-link" to="/post">Publier</NavLink>
                        <NavLink className="nav-link" to="/">Fil d'actualité</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu
