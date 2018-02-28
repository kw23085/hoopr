import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        const dashboard = this.props.currentUser && <NavLink to={`/users/${this.props.currentUser._id}`}>Dashboard</NavLink>
        return(
            <div>
                <ul>
                <NavLink to="/games">Hoopr</NavLink>
                {dashboard}
                {/* <NavLink to={`/users/${this.props.curre}`}>Dashboard</NavLink> */}
                <NavLink to="/games">Game List</NavLink>
                <NavLink to="/signin">Log in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                </ul>

            </div>
        )
    }
}


export default Navbar
