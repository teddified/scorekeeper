import React, { Component } from 'react'
import GameInputContainer from '../container/GameInputContainer'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class StartScreen extends Component {
  static propTyped = {
    gameName: PropTypes.arrayOf(PropTypes.string),
    startGame: PropTypes.func.isRequired,
  }

  render() {
    let { gamename } = this.props
    return (
      <React.Fragment>
        <GameInputContainer />
        {gamename.map((name, index) => {
          return <div key={index}>{name}</div>
        })}
        <Link to="/setup">
          <button>Start Setup</button>
        </Link>
      </React.Fragment>
    )
  }
}
