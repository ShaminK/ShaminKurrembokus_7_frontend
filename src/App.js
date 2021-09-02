import React, { Component } from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import ListPost from './components/ListPost';
import CreatePost from './components/CreatePost';
import Connexion from './components/Connexion';
import Comment from './components/Comment';
import ErrorPage from './components/ErrorPage';
import './App.css';


class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route exact path="/" component={ListPost} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/connect" component={Connexion} />
          <Route exact path="/post" component={CreatePost} />
          <Route path="/comment" component={Comment} />
          <Route component={ErrorPage} />
        </Switch>



      </BrowserRouter>
    );
  }

}

export default App;
