import React, { Component } from 'react'
import Hero from '../../components/Hero'
import About from './About'
import PreviewBlog from './PreviewBlog'

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <PreviewBlog />
      </>
    )
  }
}

export default Home
