import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Gamelist from './components/Gamelist.js';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';

class App extends Component {

  state = {
    users: [],
    games: []
  }

  render() {
    const { games } = this.state.games

    return (
      <div className="App">

        {/* Navbar */}
        <Navbar />

        <Switch>

          <Route exact path="/" render={() => {
            return <Redirect to="/games" />
          }} />

          <Route exact path='/games' render={() => {
            return <Gamelist games={ games } />
          }} />

          <Route exact path='/signup' render={() => {
            return <Signup />
          }} />

          <Route exact path='/signin' render={() => {
            return <Signin />
          }} />
          
        </Switch>

      </div>
    );
  }
}

export default App;
