import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="user">{this.props.name}</div>
        {/* <div>{this.props.players.score[0]}</div> */}
      </React.Fragment>
    )
  }
}
