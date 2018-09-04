import React, { Component } from 'react'
import './Score.css'

export default class Button extends Component {
  render() {
    return (
      <button className="Button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
