import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import clientAuth from '../clientAuth.js'

class Gamelist extends Component {

    state = {
      games: []
    }
  
    componentDidMount(){
      axios({method: 'get', url: '/games'})
        .then((res)=> {
          this.setState({games: res.data})
          console.log(res.data)
        })
    }

    onFormSubmit(evt) {
      evt.preventDefault()
      const fields = {
        name: this.refs.name.value,
        location: this.refs.location.value,
        date: this.refs.date.value,
        time: this.refs.time.value,
      }
      clientAuth.createGame(fields).then(res => {
        this.setState({
          games: [...this.state.games, res.data.game]
        })
      })
    }
  
    render(){
      return (
        <div>
          <h1>Game List</h1>
          
          {
            this.props.loggedIn && (
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" placeholder="Name" ref="name" />
                <input type="text" placeholder="Location" ref="location" />
                <input type="text" placeholder="Date" ref="date" />
                <input type="text" placeholder="Time" ref="time" />
                <button>Add Game</button>
              </form>
            )
          }

          <ul>
            {this.state.games.map((g, i) => <li key={i}>{g.date + ' -- ' + g.name + ' -- ' + g.time + ' -- ' + g.location}</li>)}
          </ul>
        </div>
      )
    }
  }

  export default Gamelist