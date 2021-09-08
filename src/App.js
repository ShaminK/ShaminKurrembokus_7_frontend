import React, { Component } from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import ListPost from './components/ListPost';
import CreatePost from './components/CreatePost';
import Connexion from './components/Connexion';
import CreateComment from './components/CreateComment';
import DeleteAccount from './components/DeleteAccount';
import ErrorPage from './components/ErrorPage';
import './App.css';


class App extends Component {
  state = {
    token : localStorage.getItem('token'),
    userId : localStorage.getItem('userId'),
  }


  render() {
    let token = localStorage.getItem('token');
    console.log('Test du token '+this.state.token);
    return (
      
    <BrowserRouter>
      <Menu />

      <Switch>

        {/* Si l'utilisateur est connecté */}

        <Route exact path="/" render={() => {
          if (token) {
            return <ListPost />
          } else {
            return <Connexion />
          }

        }} />

        <Route exact path="/post" render={() => {
          if (token) {
            return <CreatePost />
          } else {
            return <Connexion />
          }
        }} />

        <Route path="/comment" render={() => {
          if (token) {
            return <CreateComment />
          } else {
            return <Connexion />
          }
        }} />

        <Route path="/delete" render={() => {
          if (token) {
            return <DeleteAccount />
          } else {
            return <Connexion />
          }
        }} />

        {/* Si l'utilisateur n'est pas connecté */}

        <Route exact path="/connect" render={() => {
          if (!token) {
            console.log('Routeur');
            return <Connexion />
          } else {
            return <ListPost />
          }
        }} />

        <Route exact path="/createaccount" render={() => {
          if (!token) {
            return <CreateAccount />
          } else {
            return <ListPost />
          }
        }} />

        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    )

  }

}

export default App;
