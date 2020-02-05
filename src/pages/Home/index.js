import React, { Component } from 'react'
import Hero from '../../components/Hero'
import About from './About'
import PreviewBlog from './PreviewBlog'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <PreviewBlog />
        <Testimonials />
        <Footer />
      </>
    )
  }
}

export default Home
