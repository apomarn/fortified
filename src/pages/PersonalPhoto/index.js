import React, { Component } from 'react'
import styled from 'styled-components'

import Carousel from 'nuka-carousel'
const ButtonLeft = styled.button`
  background-image: url('https://res.cloudinary.com/apomarn/image/upload/v1581551036/fortified/leftarrow_kfhxt3.png');
  width: 50px;
  height: 50px;
  border: none;
  object-fit: cover;
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
      <div>
        <p>personal photo</p>
        <p>{this.state.testimony.user_name}</p>
        <Carousel
          renderTopCenterControls={({ currentSlide }) => <div>Slide: {currentSlide}</div>}
          renderCenterLeftControls={({ previousSlide }) => <ButtonLeft onClick={previousSlide}>previous</ButtonLeft>}
          renderCenterRightControls={({ nextSlide }) => <button onClick={nextSlide}>Next</button>}
          width='300px'
          height='300px'
        >
          <img src='https://res.cloudinary.com/apomarn/image/upload/v1580715339/fortified/hero.png' alt='hero1' />
          <img
            src='https://res.cloudinary.com/apomarn/image/upload/v1578420177/abnb/Imageapt1_qzynuw.png'
            alt='hero2'
          />
          <img
            src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/guest-list-container.jpg'
            alt='hero3'
          />
          <img src='https://res.cloudinary.com/apomarn/image/upload/v1559144034/WeDo/share-container.jpg' alt='hero4' />
        </Carousel>
      </div>
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
