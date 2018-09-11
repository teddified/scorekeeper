import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from '../reducer'
import ACTIONS, { addPlayer, deletePlayer } from '../actions'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import './Score.css'

const store = createStore(reducer)

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  deletePlayer = index => {
    const players = this.state.players
    this.setState(
      {
        players: [...players.slice(0, index), ...players.slice(index + 1)],
      },
      this.savePlayers
    )
  }

  backToStart = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  saveRound = () => {
    this.setState({
      players: this.state.players.map(player => ({
        ...player,
        score: [player.roundscore, ...player.score],
        roundscore: 0,
        // round: this.state.players.round + 1,
      })),
    })
  }

  renderActiveGame = () => {
    return (
      <GameScreen
        players={store.getState().players}
        updateScore={this.updateScore}
        deletePlayer={this.deletePlayer}
        resetScore={this.resetScore}
        backToStart={this.backToStart}
        startSummary={this.startSummary}
        saveRound={this.saveRound}
      />
    )
  }

  renderStartScreen = () => {
    return (
      <StartScreen
        players={store.getState().players}
        addPlayer={name => store.dispatch(addPlayer({ name }))}
        deletePlayer={index => store.dispatch(deletePlayer({ index }))}
        startSummary={this.startSummary}
        deleteAll={this.deleteAll}
      />
    )
  }

  renderSummary = () => {
    return (
      <SummaryScreen
        players={store.getState().players}
        backToGame={this.backToGame}
        startGame={this.startGame}
        saveRound={this.saveRound}
        backToStart={this.backToStart}
      />
    )
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummary} />
          <Route exact path="/game" render={this.renderActiveGame} />
        </div>
      </Router>
    )
  }
}
