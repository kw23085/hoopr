import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        const { currentUser } = this.props 
        return(
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Hoopr</a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        {currentUser
                            ? (
                                <span>
                                    <NavLink className="nav-item nav-link" to={`/users/${currentUser._id}`}>Dashboard</NavLink>
                                    <NavLink className="nav-item nav-link active" to="/games">Game List <span className="sr-only">(current)</span></NavLink>
                                    <NavLink to="/logout">Log Out</NavLink>
                                </span>
                            )
                            : (
                                <span>
                                    <NavLink className="nav-item nav-link" to="/signin">Sign in</NavLink>
                                    <NavLink className="nav-item nav-link" to="/signup">Sign up</NavLink>
                                </span>
                            )
                        }
                            
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}


export default Navbar
