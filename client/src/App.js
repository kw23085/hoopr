import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Gamelist from './components/Gamelist.js';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import User from './components/User.js';

class App extends Component {

  state = {
    currentUser: null,
    games: [],
    token: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setToken = (token) => {
    this.setState({
      token
    })
  }

  render() {
    const { games } = this.state.games

    return (
      <div className="App">

        {/* Navbar */}
        <Navbar currentUser={this.state.currentUser}/>

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
            return <Signin setToken={this.setToken} />
          }} />

          <Route exact path='/users/:id' render={(props) => {
            return <User token={this.state.token} userId={props.match.params.id} setCurrentUser={this.setCurrentUser}/>
          }} />

          
          
        </Switch>

      </div>
    );
  }
}

export default App;
