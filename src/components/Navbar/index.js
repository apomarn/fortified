import React, { Component } from 'react'
import styled from 'styled-components'
import Media from 'react-media'
// import { MainContainer, PageLogo } from './style'
import { breakpoints, textStyles, colors } from '../../styles'
import { Link } from 'react-router-dom'
import SideDrawer from './Sidebar/sideDrawer'
import Backdrop from './Backdrop'
import ButtonLogo from './ButtonLogo'

export const MainContainer = styled.div`
  width: 100%;
  position: absolute;

  top: 0px;
  left: 0px;
  padding-left: 20px;
  padding-top: 10px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(250, 250, 250, 40%);
  }
`

export const PageLogo = styled.img`
  width: 60px;
  heigth: 60px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 100px;
    heigth: 100px;
  }
`
const Links = styled(Link)`
  ${textStyles.h3Montserrat}
  color: white;
  font-weight: 700;
  :hover {
    cursor: pointer;
    color: ${colors.brown};
    text-decoration: none;
  }
`

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  }
  onPageLogoClick = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  onBackDropClick = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let sideDrawer
    let backDrop

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backDrop = <Backdrop click={this.onBackDropClick} />
    }

    return (
      <Media query={`(max-width: ${breakpoints.desktop}px)`}>
        {matches =>
          matches ? (
            <MainContainer>
              <ButtonLogo drawerClick={this.onPageLogoClick} />
              {sideDrawer}
              {backDrop}
            </MainContainer>
          ) : (
            <MainContainer>
              <PageLogo
                src='https://res.cloudinary.com/apomarn/image/upload/v1580783848/fortified/finallogo_sjaky9.png'
                alt='logo'
              />
              <Links to='/'>About</Links>
              <Links>Blogs</Links>
              <Links>You Are Not Alone</Links>
              <Links>Photo Gallery</Links>
            </MainContainer>
          )
        }
      </Media>
    )
  }
}

export default Navbar
