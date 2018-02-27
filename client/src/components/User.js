import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class User extends Component {

    state = {
      user: []
    }
  
    componentDidMount(){
      axios({method: 'get', url: `/users/${this.props.userId}`})
        .then((res)=> {
          this.setState({user: res.data})
          console.log(res.data)
        })
    }
  
    render(){
      return (
        <div>
          <h2>{this.state.user.name}</h2>
        </div>
      )
    }
  }

  export default User