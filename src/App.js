import React, { Component } from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import ListPost from './components/ListPost';
import CreatePost from './components/CreatePost';
import Connexion from './components/Connexion';
import Comment from './components/Comment';
import DeleteAccount from './components/DeleteAccount';
import ErrorPage from './components/ErrorPage';
import './App.css';

function isLoggedIn() {
  return localStorage.getItem('token') != null;
}

function isLoggedOut() {
  return localStorage.getItem('token') == null;
}

class App extends Component {
  


  render() {
    return (
      
    <BrowserRouter>
      <Menu />

      <Switch>

        {/* Si l'utilisateur est connecté */}

        <Route exact path="/" render={() => {
          if (isLoggedIn()) {
            return <ListPost key={Math.random()} />
          } else {
            return <Redirect to="/connect" />
          }

        }} />

        <Route exact path="/post" render={() => {
          if (isLoggedIn()) {
            return <CreatePost />
          } else {
            return <Redirect to="/connect" />
          }
        }} />

        <Route path="/comment" render={() => {
          if (isLoggedIn()) {
            return <Comment  key={Math.random()} />
          } else {
            return <Redirect to="/connect" />
          }
        }} />

        <Route path="/delete" render={() => {
          if (isLoggedIn()) {
            return <DeleteAccount />
          } else {
            return <Redirect to="/connect" />
          }
        }} />

        {/* Si l'utilisateur n'est pas connecté */}

        <Route exact path="/connect" render={() => {
          if (isLoggedOut()) {
            console.log('Routeur');
            return <Connexion />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/createaccount" render={() => {
          if (isLoggedOut()) {
            return <CreateAccount />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    )

  }

}

export default App;
