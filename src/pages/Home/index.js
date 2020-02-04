import React, { Component } from 'react'
import Hero from '../../components/Hero'
import About from './About'

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
      </>
    )
  }
}

export default Home
