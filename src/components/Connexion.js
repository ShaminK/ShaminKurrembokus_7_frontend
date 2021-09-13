import React from 'react';
import Api from '../api';
import {  withRouter } from 'react-router-dom';
import '../App.css'

class Connexion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mail: "",
            password: "",
            error : ''
        }
    }

    handleUserConnect = (e) => {
        e.preventDefault();
        try {
            Api.connectUser(this.state.mail, this.state.password)
                .then((res) => {
                    console.log(res);
                    console.log(res.userId);
                    if (res.userId != null && res.token != null) {
                        localStorage.setItem('token', JSON.stringify(res.token));
                        localStorage.setItem('userId', JSON.stringify(res.userId))
                        this.props.history.push("/")
                    } else {
                        console.log(res.error);
                        this.setState({error : res.error})
                    }

                })


        } catch {
            
        }
    }

    render() {
        return (
            <main className="container">
                <h1>Connectez-vous</h1>

                <form onSubmit={this.handleUserConnect} >
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="exampleInputEmail1">Adresse Mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.mail} onChange={(e) => {
                            this.setState({ mail: e.target.value });
                        }} />
                        
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={(e) => {
                            this.setState({ password: e.target.value });
                        }} />
                    </div>

                    <div className="form-group d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary">Connexion</button>
                    </div>

                </form>
                        <p className="msgError">{this.state.error}</p>
            </main>
        )
    }

}

export default withRouter(Connexion);