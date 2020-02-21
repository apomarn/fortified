import React, { Component } from 'react'
import { StyledDivider } from '../../Anchors'
import { MainContainer, Links } from './style'

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
