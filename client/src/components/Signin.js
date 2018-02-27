import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Signin extends Component{

  state = {
    isLoggedIn: false
  }

  onSubmit = (event) => {
    event.preventDefault()

    const userInfo = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    axios.post('/users/authenticate', userInfo)
      .then((res) => {
        console.log(res)
        if(res.data.success) {
          this.setState({
            isLoggedIn: res.data.success,
            userId: res.data.user._id
          })
        } else {
          this.setState({
            errMessage: res.data.message
          })
        }
      })
  }

  render(){
    return(
      <div>
          <h1>Sign in!</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Email:</label>
                <input type="text" ref="email" placeholder="Email"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="text" ref="password" placeholder="Password"/>
                <input type="submit" value="Sign in" className="btn btn-info" />
              </div>
              {this.state.isLoggedIn && <Redirect to={`/users/${this.state.userId}`} />}
            </form>
            <h2>{this.state.errMessage}</h2>
      </div>
    )
  }
}

export default Signin