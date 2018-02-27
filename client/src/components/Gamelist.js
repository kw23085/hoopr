import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
  
    render(){
      return (
        <div>
          <h1>Game List</h1>
          <ul>
            {this.state.games.map((g, i) => <li key={i}>{g.date + ' -- ' + g.name + ' -- ' + g.time + ' -- ' + g.location}</li>)}
          </ul>
        </div>
      )
    }
  }

  export default Gamelist