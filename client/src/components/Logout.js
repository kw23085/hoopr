import React from 'react'
import clientAuth from '../clientAuth.js'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {

  componentDidMount() {
    // use client auth to clear token from storage, and from request headers
    clientAuth.logOut()

    // a callback, what we want to do in the <App /> when we finish logging out
    this.props.onLogout()
  }
  
  render() {
    // instead of rendering any html, just immediately redirect somewhere
    return (
      <Redirect to="/games" />
    )
  }
}

export default Logout