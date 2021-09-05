import React from 'react';
import Api from '../api';
import { Redirect } from 'react-router-dom';

class CreateAccount extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: "mail",
            password: "password",
            lastname: "nom",
            firstname: "prenom",
            redirect: false
        }
    }


    handleFormUser = (e) => {
        e.preventDefault()
        //Envoie des données vers le serveur
        try {
            Api.postUser(this.state.mail, this.state.password, this.state.lastname, this.state.firstname)
            .then((res) => {
                console.log(res);
                if (res.userId != null) {
                    this.setState({ redirect: true })
                }
            })
            
        } catch (error) {
            console.log(error);
        }        
    }


    render() {
        return (
            <div className="container" >
                <h1>Inscription</h1>
                <form onSubmit={this.handleFormUser} >
                    <div className="form-row">
                        <div className="form-group col-md-6 mx-auto">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.mail} onChange={(e) => {
                                this.setState({ mail: e.target.value });
                            }} />
                        </div>
                        <div className="form-group col-md-6 mx-auto">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }} />
                        </div>
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="lastName">Nom</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Mon Nom" value={this.state.lastname} onChange={(e) => {
                            this.setState({ lastname: e.target.value });
                        }} />
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="firstName">Prénom</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Mon Prénom" value={this.state.firstname} onChange={(e) => {
                            this.setState({ firstname: e.target.value });
                        }} />
                    </div>

                    <div className="form-group d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary">S'inscrire</button>
                    </div>


                    { this.state.redirect ? (<Redirect push to ="/connect"/>) : null }

                </form>
            </div>
        )
    }
}

export default CreateAccount;