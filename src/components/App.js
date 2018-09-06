import React, { Component } from 'react'
import { load, save } from '../services'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

import './App.css'
import './Score.css'

export default class App extends Component {
  state = {
    showScreen: 'start',
    players: load('players') || [],
    roundscore: 0,
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
            roundScore: 0,
          },
        ],
      },
      this.savePlayers
    )
  }

  updateScore = (index, value) => {
    const players = this.state.players
    const name = players[index]
    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...name, score: [parseInt(name.score) + value] },
          ...players.slice(index + 1),
        ],
      },
      this.savePlayers
    )
  }

  resetScore = () => {
    this.setState(
      {
        players: this.state.players.map(name => ({
          ...name,
          score: [0],
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

  startSummary = () => {
    this.setState({
      showScreen: 'summary',
    })
  }

  backToGame = () => {
    this.setState({
      showScreen: 'game',
    })
  }

  saveRound = () => {
    console.log(this.state)
    this.setState({
      players: this.state.players.map(player => ({
        ...player,
        score: [...player.score, player.roundScore],
        roundScore: 0,
        round: this.state.players.round + 1,
      })),
    })
  }

  savePlayers() {
    save('players', this.state.players)
  }

  renderActiveGame() {
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

  renderStartScreen() {
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

  renderSummary() {
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

    return <div className="app">{render}</div>
  }
}
