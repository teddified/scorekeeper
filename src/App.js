import React, { Component } from 'react'
import UpdateRate from './UpdateRate'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UpdateRate />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
