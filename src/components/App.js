import React, { Component } from 'react'
import { load, save } from '../services'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import './Score.css'

export default class App extends Component {
  state = {
    showScreen: 'start',
    players: load('players') || [],
    round: 1,
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

  deleteAll = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  addPlayer = inputValue => {
    const players = this.state.players
    this.setState(
      {
        players: [
          ...players,
          {
            name: inputValue,
            score: [],
            roundscore: 0,
          },
        ],
      },
      this.savePlayers
    )
  }

  updateScore = (index, value) => {
    const players = this.state.players
    const player = players[index]
    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...player, roundscore: player.roundscore + value },
          ...players.slice(index + 1),
        ],
      },
      this.savePlayers
    )
  }

  resetScore = () => {
    this.setState(
      {
        players: this.state.players.map(player => ({
          ...player,
          roundscore: 0,
        })),
      },
      this.savePlayers
    )
  }

  startGame = () => {
    this.setState(
      {
        showScreen: 'game',
      },
      this.savePlayers
    )
  }

  backToStart = () => {
    this.setState(
      {
        showScreen: 'start',
        players: [],
      },
      this.savePlayers
    )
  }

  saveRound = () => {
    this.setState({
      players: this.state.players.map(player => ({
        ...player,
        score: [...player.score, player.roundscore],
        roundscore: 0,
        // round: this.state.players.round + 1,
      })),
    })
  }

  savePlayers() {
    save('players', this.state.players)
  }

  renderActiveGame = () => {
    return (
      <GameScreen
        players={this.state.players}
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
        players={this.state.players}
        addPlayer={this.addPlayer}
        deletePlayer={this.deletePlayer}
        startSummary={this.startSummary}
        deleteAll={this.deleteAll}
      />
    )
  }

  renderSummary = () => {
    return (
      <SummaryScreen
        players={this.state.players}
        backToGame={this.backToGame}
        startGame={this.startGame}
        saveRound={this.saveRound}
        backToStart={this.backToStart}
      />
    )
  }

  render() {
    let render
    switch (this.state.showScreen) {
      case 'start':
        render = this.renderStartScreen()
        break
      case 'game':
        render = this.renderActiveGame()
        break
      case 'summary':
        render = this.renderSummary()
        break
      default:
        render = this.renderStartScreen()
    }

    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummary} />
          <Route exact path="/game" render={this.renderActiveGame} />
          {/* {render} */}
        </div>
      </Router>
    )
  }
}
