import React, { Component } from 'react'
import { load, save } from '../services'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'

import './App.css'
import './Score.css'

export default class App extends Component {
  state = {
    showStartScreen: true,
    users: load('users') || [],
  }

  deletePlayer = index => {
    const users = this.state.users
    this.setState(
      {
        users: [...users.slice(0, index), ...users.slice(index + 1)],
      },
      this.saveUsers
    )
  }

  deleteAll = () => {
    this.setState(
      {
        users: [],
      },
      this.saveUsers
    )
  }

  addPlayer = inputValue => {
    const users = this.state.users
    this.setState(
      {
        users: [
          ...users,
          {
            name: inputValue,
            score: [0],
          },
        ],
      },
      this.saveUsers
    )
  }

  updateScore = (index, value) => {
    const users = this.state.users
    const name = users[index]
    this.setState(
      {
        users: [
          ...users.slice(0, index),
          { ...name, score: [parseInt(name.score) + value] },
          ...users.slice(index + 1),
        ],
      },
      this.saveUsers
    )
  }

  resetScore = () => {
    this.setState(
      {
        users: this.state.users.map(name => ({
          ...name,
          score: [0],
        })),
      },
      this.saveUsers
    )
  }

  startGame = () => {
    this.setState(
      {
        showStartScreen: false,
      },
      this.saveUsers
    )
  }

  backToStart = () => {
    this.setState(
      {
        showStartScreen: true,
        users: [],
      },
      this.saveUsers
    )
  }

  saveUsers() {
    save('users', this.state.users)
  }

  renderActiveGame() {
    return (
      <GameScreen
        players={this.state.users}
        updateScore={this.updateScore}
        deletePlayer={this.deletePlayer}
        resetScore={this.resetScore}
        backToStart={this.backToStart}
      />
    )
  }

  renderStartScreen() {
    return (
      <StartScreen
        players={this.state.users}
        addPlayer={this.addPlayer}
        deletePlayer={this.deletePlayer}
        startGame={this.startGame}
        deleteAll={this.deleteAll}
      />
    )
  }

  render() {
    const { showStartScreen } = this.state
    return (
      <div className="app">
        {showStartScreen ? this.renderStartScreen() : this.renderActiveGame()}
      </div>
    )
  }
}
