import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import clientAuth from './clientAuth.js';
import Navbar from './components/Navbar.js';
import Gamelist from './components/Gamelist.js';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import User from './components/User.js';
import Logout from './components/Logout.js';

class App extends Component {

  state = {
    currentUser: clientAuth.getCurrentUser(),
    games: [],
    token: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  onSignInSuccess = (user) => {
    this.setState({
      currentUser: user
    })
  }

  onLogout() {
    this.setState({
      currentUser: null
    })
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="App">

        {/* Navbar */}
        <Navbar currentUser={this.state.currentUser}/>

        <Switch>

          <Route exact path="/" render={() => {
            return <Redirect to="/games" />
          }} />

          <Route exact path='/games' render={() => {
            return <Gamelist loggedIn={!!currentUser} />
          }} />

          <Route exact path='/signup' render={() => {
            return <Signup />
          }} />

          <Route exact path='/signin' render={(props) => {
            return <Signin history={props.history} onSignInSuccess={this.onSignInSuccess.bind(this)} />
          }} />

          <Route exact path='/users/:id' render={(props) => {
            return <User token={this.state.token} userId={props.match.params.id} setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
          }} />

          <Route exact path='/games/:id' render={(props) => {
            return <User gameId={props.match.params.id} />
          }} />

          <Route exact path='/logout' render={(props) => {
            return <Logout onLogout={this.onLogout.bind(this)} />
          }} />

          
          
        </Switch>

      </div>
    );
  }
}

export default App;
