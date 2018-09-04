import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
import ResetButton from './ResetButton'

import './App.css'
import './Score.css'

export default class App extends Component {
  state = {
    users: [
      { user: 'Jerry', score: 7 },
      { user: 'Tom', score: 140 },
      { user: 'Tim', score: -3 },
    ],
  }

  updateScore = (index, value) => {
    const users = this.state.users
    const user = users[index]
    this.setState({
      users: [
        ...users.slice(0, index),
        { ...user, score: user.score + value },
        ...users.slice(index + 1),
      ],
    })
  }

  resetScore = () => {
    this.setState({
      users: this.state.users.map(user => ({ ...user, score: 0 })),
    })
  }

  renderScoreBoard() {
    return this.state.users.map((user, index) => {
      return (
        <Scoreboard
          key={index}
          {...user}
          updateScore={value => this.updateScore(index, value)}
        />
      )
    })
  }

  render() {
    return (
      <div className="app">
        {this.renderScoreBoard()}
        <ResetButton onClick={this.resetScore}>Reset</ResetButton>
      </div>
    )
  }
}
