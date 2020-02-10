import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles } from '../../styles'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MainContainer = styled.div`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  padding-top: 85px;
`

const ProfilePic = styled.img`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`

const Name = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.lightBrown};
  text-align: center;
  margin: 45px 22px 45px 5px;
`

const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;
  margin: 0 50px 45px 50px;
`

class Testimony extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testimony: {}
    }
  }
  render() {
    return (
      <MainContainer>
        <Navbar />
        <ProfilePic src={this.state.testimony.user_image} alt='testimoni-profile-pic' />
        <Name>{this.state.testimony.user_name}</Name>
        <Paragraph>{this.state.testimony.testimony}</Paragraph>
        <Footer />
      </MainContainer>
    )
  }
  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }
    fetch(`${url}/alltestimonies/${this.props.match.params.user_name}`)
      .then(data => data.json())
      .then(testimonyData => {
        this.setState({ testimony: testimonyData[0] })
      })
      .catch(err => console.log(err))
  }
}

export default Testimony
