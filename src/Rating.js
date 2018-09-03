import React, { Component } from 'react'
import Star from './Star'

export default class Rating extends Component {
  renderStars() {
    const { callback, rating } = this.props

    return Array(5)
      .fill()
      .map((_, index) => (
        <Star
          key={index}
          onClick={() => callback(index + 1)}
          filled={index < rating}
        />
      ))
  }

  render() {
    return <React.Fragment>{this.renderStars()}</React.Fragment>
  }
}
