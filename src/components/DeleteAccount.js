import React, { Component } from 'react'
import Api from '../api';

export class DeleteAccount extends Component {

    deleteAccount = (e) => {
        e.preventDefault()
        try {
            let token = localStorage.getItem('token')
            let userId = localStorage.getItem('userId')
            Api.deleteUser(userId, token)
            .then((res)=>{
                console.log(res);
            })
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.reload();
            
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <main className="container">
                <h1>Supprimer son compte</h1>
                <div className="sectionDelete">
                    <p>Voulez-vous supprimer votre compte définitivement ?</p>
                    <button className="deleteButton" onClick={this.deleteAccount}>Supprimer Compte</button>
                </div>

            </main>
        )
    }
}



export default DeleteAccount;
