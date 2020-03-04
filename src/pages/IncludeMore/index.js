import React, { Component } from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { MainContainer, IncludeContainer, MyLink } from './style'

class IncludeMore extends Component {
  render() {
    return (
      <MainContainer>
        <Hero />
        <IncludeContainer>
          <MyLink to='/includeblog'>
            Include <br></br>New Blog!
          </MyLink>
          <MyLink to='/includetestimony'>
            Include <br></br> New Testimony!
          </MyLink>
        </IncludeContainer>
        <Footer />
      </MainContainer>
    )
  }
}

export default IncludeMore
