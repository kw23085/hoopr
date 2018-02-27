import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                <NavLink to="/games">Hoopr</NavLink>
                <NavLink to="/users/:id">Dashboard</NavLink>
                <NavLink to="/games">Game List</NavLink>
                <NavLink to="/signin">Log in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                </ul>

            </div>
        )
    }
}

export default Navbar
