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

  render() {

    let token = localStorage.getItem('token');

    if (token) {
      {/* Si on est connecté */}
      console.log('il y a un token');
      return (
        <BrowserRouter>
          <Menu />
        
          <Switch>
            <Route exact path="/" component={ListPost} />
            <Route exact path="/post" component={CreatePost} />
            <Route path="/comment" component={CreateComment} />
            <Route path="/delete" component={DeleteAccount} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      );
      
    }else {
      {/* si on est pas conneté */}
      return (
        <BrowserRouter>
          <Menu />
        
          <Switch>
          <Route exact path="/" component={Connexion} />
            <Route exact path="/createaccount" component={CreateAccount} />
            <Route exact path="/connect" component={Connexion} />
            <Route component={ErrorPage} />
          </Switch>
  
  
  
        </BrowserRouter>
      );
    }

    
  }

}

export default App;
