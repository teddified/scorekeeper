import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { saveToLocalStorage } from '../middleware'
import reducer from '../reducer'
import GameScreenContainer from '../container/GameScreenContainer'
import SummaryScreenContainer from '../container/SummaryScreenContainer'
import SetupScreenContainer from '../container/SetupScreenContainer'
import StartScreenContainer from '../container/StartScreenContainer'

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

  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledApp>
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/setup" component={SetupScreenContainer} />
            <Route path="/summary" component={SummaryScreenContainer} />
            <Route path="/game" component={GameScreenContainer} />
          </StyledApp>
        </Provider>
      </Router>
    )
  }
}
