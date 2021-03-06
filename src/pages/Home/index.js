import React, { Component } from 'react'
import Hero from '../../components/Hero'
import About from './About'
import PreviewBlog from './PreviewBlog'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'
import { MainContainer } from './style'

class Home extends Component {
  render() {
    return (
      <MainContainer>
        <Hero />
        <About />
        <PreviewBlog />
        <Testimonials />
        <Footer />
      </MainContainer>
    )
  }
}

export default Home
