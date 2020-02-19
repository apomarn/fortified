import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import { textStyles, colors } from '../../styles'

const MainContainer = styled.div`
  background-color: ${colors.black};
  padding-top: 100px;
  padding-bottom: 50px;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 0 auto;
`
const Title = styled.p`
  top: 50%;
  transform: translate(0%, -50%);
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightBrown};
  text-align: center;
  background-color: ${colors.black};
  width: 100%;
  padding: 10px 0;
`
const Date = styled.p`
${textStyles.h4Montserrat}
  color: ${colors.white};
  margin: 0 50px;
  text-align: right;
  padding-top: 15px;
`

const Paragraph = styled.p`
${textStyles.h4Montserrat}
color: ${colors.white};
 margin: 20px 50px;
 text-align: justify;
`

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blog: {}
    }
  }
  render() {
    console.log(this.state)
    return (
      <MainContainer>
        <Navbar />
        <Wrapper>
          <Image src={this.state.blog.image} alt='blog-pic' />
          <Title>{this.state.blog.title}</Title>
        </Wrapper>
        <Date>{this.state.blog.date}</Date>
        <Paragraph>{this.state.blog.paragraph_1}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_2}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_3}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_4}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_5}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_6}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_7}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_8}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_9}</Paragraph>
        <Paragraph>{this.state.blog.paragraph_10}</Paragraph>
        <Footer />
      </MainContainer>
    )
  }

  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }
    fetch(`${url}/allblogs/${this.props.match.params.title}`)
      .then(data => data.json())
      .then(blogData => {
        this.setState({ blog: blogData[0] })
      })
      .catch(err => console.log(err))
  }
}

export default Blog
