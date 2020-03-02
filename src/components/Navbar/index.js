import React, { Component } from 'react'
import Media from 'react-media'
import { breakpoints } from '../../styles'
import { MainContainer, PageLogo, Links } from './style'
import SideDrawer from './Sidebar/sideDrawer'
import Backdrop from './Backdrop'
import ButtonLogo from './ButtonLogo'

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
                src='https://res.cloudinary.com/apomarn/image/upload/v1583029398/fortified/logo.png'
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
