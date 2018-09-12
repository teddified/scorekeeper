import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledUserBox = styled.div`
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export default class User extends Component {
  static propTypes = {
    player: PropTypes.object,
  }

  render() {
    return (
      <React.Fragment>
        <StyledUserBox className="user">{this.props.player.name}</StyledUserBox>
      </React.Fragment>
    )
  }
}
