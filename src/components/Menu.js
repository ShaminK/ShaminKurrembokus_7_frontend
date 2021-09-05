import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Logo from '../logo.png';
import { Redirect } from 'react-router-dom';

class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            connect: 'false'
        }
    }
    

    disconnect(e) {
        e.preventDefault();
        console.log('etape1');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        console.log('etape2');
        window.location.reload();
        // this.setState({connect : true})
    }


    render() {
        let token = localStorage.getItem('token');

        if (token) {
            // si on est connecté
            return (
                <nav className="navMenu container">
                    <div className="logoDiv">
                        <Link className="navLogo" to="/"><img src={Logo} className='logo' alt="logo Groupomania" /></Link>

                    </div>

                    <div className="linkDiv">
                        <NavLink className="navItem" to="/post">Publier</NavLink>
                        <NavLink className="navItem" to="/">Fil d'actualité</NavLink>
                        <a onClick={this.disconnect} className="navItem">Déconnexion</a>
                        <NavLink className="navItem red" to="/delete">Supprimer Compte</NavLink>
                    </div>
                     {/* {this.state.connect ? (<Redirect push to="/connect" />) : null} */}

                </nav>
            )
        } else {
            //  si on est pas connecté
            return (

                <nav className="navMenu container">
                    <div className="logoDiv">
                        <Link className="navLogo" to="/"><img src={Logo} className='logo' alt="logo Groupomania" /></Link>

                    </div>

                    <div className="linkDiv">
                        <NavLink className="navItem" aria-current="page" to="/createaccount">Créer compte</NavLink>
                        <NavLink className="navItem" aria-current="page" to="/connect">Connexion</NavLink>
                    </div>
                   
                </nav>

            )
        }
    }

}

export default Menu
