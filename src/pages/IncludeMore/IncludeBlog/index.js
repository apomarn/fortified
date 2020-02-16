import React, { Component } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

class IncludeBlog extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form>
          <p>What is title going to be?</p>
          <input />
          <p>Start writting here:</p>
          <input type='textarea' column='5' row='5' />
        </form>
        <Footer />
      </div>
    )
  }
}

export default IncludeBlog
