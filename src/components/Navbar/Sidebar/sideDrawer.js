import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, textStyles } from '../../../styles'
import { StyledDivider } from '../../Anchors'

const MainContainer = styled.div`
  height: 100%;
  background-color: ${colors.black};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Links = styled(Link)`
${textStyles.h3Montserrat}
  color: ${colors.brown};
 margin: 40px 0 40px 60px;
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
        <StyledDivider />
        <Links to='/allblogs'>Blogs</Links>
        <StyledDivider />
        <Links to='/alltestimonies'>You Are Not Alone</Links>
        <StyledDivider />
        <Links to='/photogallery'>Photo Gallery</Links>
        <StyledDivider />
      </MainContainer>
    )
  }
}

export default SideDrawer
