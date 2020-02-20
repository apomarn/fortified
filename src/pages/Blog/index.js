import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { MainContainer, Wrapper, Image, Title, Date, Paragraph } from './style'

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
