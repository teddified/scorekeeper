import React, { Component } from 'react'

export default class ResetButton extends Component {
  render() {
    return (
      <button className="resetButton" onClick={() => this.props.onClick()}>
        {this.props.children}
      </button>
    )
  }
}
