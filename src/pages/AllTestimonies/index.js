import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EachTestimony from './EachTestimony'
import styled from 'styled-components'
import { textStyles, colors } from '../../styles'

const MainContainer = styled.div`
  background-color: ${colors.black};
`
const Header = styled.p`
${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  text-align: center;
  padding-top: 90px;
`

class AllTestimonies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allTestimonies: []
    }
  }
  render() {
    return (
      <MainContainer>
        <Navbar />
        <Header>You Are Not Alone</Header>
        {this.state.allTestimonies.map(testimony => {
          console.log(this.state.allTestimonies)

          return <EachTestimony {...testimony} key={testimony._id} />
        })}
        <Footer />
      </MainContainer>
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

export default AllTestimonies
