import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { textStyles, colors } from '../../styles'
import Footer from '../../components/Footer'
import EachGallery from './EachGallery'

const Header = styled.p`
${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  text-align: center;
  padding-top: 90px;
`

class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allTestimonies: []
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <Header>Photo Gallery</Header>
        {this.state.allTestimonies.map(testimony => {
          console.log(this.state.allTestimonies)

          return <EachGallery {...testimony} key={testimony._id} />
        })}
        <Footer />
      </>
    )
  }
  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }

    fetch(`${url}/alltestimonies`)
      .then(data => data.json())
      .then(testimonies => {
        this.setState({ allTestimonies: testimonies })
      })
      .catch(err => console.log(err))
  }
}

export default PhotoGallery
