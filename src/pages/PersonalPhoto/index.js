import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { MainContainer, Name, CarouselContainer } from './style'

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
            <img src={this.state.testimony.photo_gallery_1} alt='photo1' />
            <img src={this.state.testimony.photo_gallery_2} alt='photo2' />
            <img src={this.state.testimony.photo_gallery_3} alt='photo3' />
            <img src={this.state.testimony.photo_gallery_4} alt='photo4' />
            <img src={this.state.testimony.photo_gallery_5} alt='photo5' />
            <img src={this.state.testimony.photo_gallery_6} alt='photo6' />
            <img src={this.state.testimony.photo_gallery_7} alt='photo7' />
            <img src={this.state.testimony.photo_gallery_8} alt='photo8' />
            <img src={this.state.testimony.photo_gallery_9} alt='photo9' />
            <img src={this.state.testimony.photo_gallery_10} alt='photo10' />
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
