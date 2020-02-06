import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const PageLogo = styled.img`
  width: 60px;
  heigth: 60px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 100px;
    heigth: 100px;
  }
`
class ButtonLogo extends Component {
  render() {
    return (
      <button onClick={this.props.drawerClick}>
        <PageLogo
          src='https://res.cloudinary.com/apomarn/image/upload/v1580940087/fortified/finalfinallogo_zfqkp9.png'
          alt='logo'
        />
      </button>
    )
  }
}

export default ButtonLogo
