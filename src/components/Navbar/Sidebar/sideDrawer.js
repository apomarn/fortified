import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, textStyles } from '../../../styles'

const MainContainer = styled.div`
  height: 100%;
  background: ${colors.white};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Links = styled(Link)`
${textStyles.h3Montserrat}
  color: ${colors.brown};
 margin-left: 30px;
 text-decoration: none;
 :active {
   color: ${colors.lightBrown};
   text-decoration: none;
 }
`
class SideDrawer extends Component {
  render() {
    return (
      <MainContainer>
        <Links to='/'>About</Links>
        <Links>Blogs</Links>
        <Links>You Are Not Alone</Links>
        <Links>Photo Gallery</Links>
      </MainContainer>
    )
  }
}

export default SideDrawer
