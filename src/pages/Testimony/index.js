import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { MainContainer, ProfilePic, Name, Paragraph } from './style'

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
        <Paragraph>{this.state.testimony.testimony_part1}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part2}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part3}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part4}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part5}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part6}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part7}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part8}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part9}</Paragraph>

        <Paragraph>{this.state.testimony.testimony_part10}</Paragraph>
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
