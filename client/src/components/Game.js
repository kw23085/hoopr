import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Game extends Component {

    state = {
      Game: []
    }
  
    componentDidMount(){
      axios({method: 'get', url: `/games/${this.props.gameId}`, headers: { token: this.props.token}})
        .then((res)=> {
          if(res.data.success) {
            this.setState({game: res.data.game})
            console.log(res.data.game)
            this.props.setCurrentUser(res.data.game)
          }

        })
    }
  
    render(){
      return (
        <div>
          <h2>{this.state.game.name}</h2>
        </div>
      )
    }
  }

  export default Game