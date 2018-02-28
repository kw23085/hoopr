import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class User extends Component {

    state = {
      user: []
    }
  
    componentDidMount(){
      axios({method: 'get', url: `/users/${this.props.userId}`, headers: { token: this.props.token}})
        .then((res)=> {
          if(res.data.success) {
            this.setState({user: res.data.user})
            console.log(res.data.user)
            this.props.setCurrentUser(res.data.user)
          }

        })
    }
  
    render(){
      return (
        <div>
          <h1>Dashboard</h1>
          <h2>Name:{this.props.currentUser.name}</h2>
        </div>
      )
    }
  }

  export default User