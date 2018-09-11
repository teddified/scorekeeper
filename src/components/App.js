import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import styled from 'styled-components'
import {
  addPlayer,
  deleteAllPlayers,
  deletePlayer,
  resetScore,
  saveRound,
  updateScore,
} from '../actions'
import { saveToLocalStorage } from '../middleware'
import reducer from '../reducer'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

const StyledApp = styled.div`
  margin: 0 auto;
  width: 400px;
  border-radius: 10px;
`

const store = createStore(reducer, applyMiddleware(saveToLocalStorage))

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  renderActiveGame = () => {
    return (
      <GameScreen
        players={store.getState().players}
        updateScore={(index, value) =>
          store.dispatch(updateScore({ index, value }))
        }
        deletePlayer={() => store.dispatch(deletePlayer())}
        resetScore={() => store.dispatch(resetScore())}
        deleteAllPlayers={() => store.dispatch(deleteAllPlayers())}
        saveRound={() => store.dispatch(saveRound())}
      />
    )
  }

  renderStartScreen = () => {
    return (
      <StartScreen
        players={store.getState().players}
        addPlayer={name => store.dispatch(addPlayer({ name }))}
        deletePlayer={index => store.dispatch(deletePlayer({ index }))}
        deleteAll={() => store.dispatch(deleteAllPlayers())}
      />
    )
  }

  renderSummary = () => {
    return (
      <SummaryScreen
        players={store.getState().players}
        saveRound={() => store.dispatch(saveRound())}
        deleteAllPlayers={() => store.dispatch(deleteAllPlayers())}
      />
    )
  }

  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummary} />
          <Route exact path="/game" render={this.renderActiveGame} />
        </StyledApp>
      </Router>
    )
  }
}
