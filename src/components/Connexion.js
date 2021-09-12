import React from 'react';
import Api from '../api';
import { Redirect } from 'react-router-dom';
import '../App.css'

class Connexion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mail: "mail",
            password: "password",
            redirect: false,
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
                        this.setState({
                            redirect: true
                        })
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
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.mail} onChange={(e) => {
                            this.setState({ mail: e.target.value });
                        }} />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={(e) => {
                            this.setState({ password: e.target.value });
                        }} />
                    </div>

                    <div className="form-group d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary">Connexion</button>
                    </div>

                </form>
                {this.state.redirect ? (<Redirect push to="/" />) : null}
                        <p className="msgError">{this.state.error}</p>
            </main>
        )
    }

}

export default Connexion;