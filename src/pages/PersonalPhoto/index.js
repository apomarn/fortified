import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import Carousel from 'nuka-carousel'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MainContainer = styled.div`
  padding: 60px 45px;
  height: 100vh;
`
const Name = styled.p`
  color: ${colors.lightBrown};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 40px 0;
`

const CarouselContainer = styled.div`
  padding: 0 auto;
  margin-botton: 10px;
`
class PersonalPhoto extends Component {
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
        <Name>{this.state.testimony.user_name}</Name>
        <CarouselContainer>
          <Carousel withoutControls autoplay={true} width='300px' height='300px'>
            <img src='https://res.cloudinary.com/apomarn/image/upload/v1580715339/fortified/hero.png' alt='hero1' />
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1578420177/abnb/Imageapt1_qzynuw.png'
              alt='hero2'
            />
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/guest-list-container.jpg'
              alt='hero3'
            />
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/share-container.jpg'
              alt='hero4'
            />
          </Carousel>
        </CarouselContainer>
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

export default PersonalPhoto
