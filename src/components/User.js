import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <div className="user">{this.props.name}</div>
  }
}
