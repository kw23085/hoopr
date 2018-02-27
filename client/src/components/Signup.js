import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signup extends Component{

    state = {
        isLoggedIn: false,
    }

    onSubmit = (event) => {
        event.preventDefault()
        const data = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        axios.post('/users', data)
            .then((res) => {
                console.log(res)
                this.setState({
                    isLoggedIn: true,
                    userId: res.data.user._id
                })
            })
    }

    render(){
        return(
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>Name:</label>
                    <input type="text" ref="name" placeholder="Name"/>
                    </div>

                    <div>
                    <label>Email:</label>
                    <input type="text" ref="email" placeholder="Email"/>
                    </div>

                    <div>
                    <label>Password:</label>
                    <input type="password" ref="password" placeholder="Password"/>
                    {/* <button type="button" className="btn btn-info" >Sign up</button> */}
                    <input type="submit" value="Sign up" />
                    </div>
                    {this.state.isLoggedIn && <Redirect to={`/user/${this.state.userId}`} />}
                </form>
            </div>
        )
    }
}

export default Signup