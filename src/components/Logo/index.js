import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../styles'

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 25px;
  left: 25px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    top: 40px;
    left: 40px;
  }
`

const PageLogo = styled.img`
  width: 60px;
  heigth: 60px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 100px;
    heigth: 100px;
  }
`

class Logo extends Component {
  render() {
    return (
      <MainContainer>
        <PageLogo
          src='https://res.cloudinary.com/apomarn/image/upload/v1580783848/fortified/finallogo_sjaky9.png'
          alt='logo'
        />
      </MainContainer>
    )
  }
}

export default Logo
