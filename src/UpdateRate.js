import React, { Component } from 'react'
import Rating from './Rating'
import './App.css'

export default class UpdateRate extends Component {
  state = {
    rating: 0,
  }

  updateRating = value => {
    this.setState({ rating: value })
  }

  render() {
    return <Rating rating={this.state.rating} callback={this.updateRating} />
  }
}
