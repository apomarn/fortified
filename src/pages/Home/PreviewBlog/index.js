import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyledDivider } from '../../../components/Anchors'
import { MainContainer, Header, BlogsContainer, Title, Paragraph, AllBlogs } from './style'

class PreviewBlog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allBlogs: []
    }
  }

  render() {
    return (
      <MainContainer>
        <Header>Recent Blogs...</Header>

        <BlogsContainer>
          {this.state.allBlogs.map(blog => {
            console.log(this.state.allBlogs)
            return (
              <Link to={`/allblogs/${blog.title}`} key={blog._id}>
                <Title>{blog.title}</Title>
                <Paragraph>{blog.paragraph}</Paragraph>
              </Link>
            )
          })}
        </BlogsContainer>
        <AllBlogs to='/allblogs'>All Blogs</AllBlogs>
        <StyledDivider />
      </MainContainer>
    )
  }

  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }

    fetch(`${url}/allblogs`)
      .then(data => data.json())
      .then(blogs => {
        this.setState({ allBlogs: blogs })
      })
      .catch(err => console.log(err))
  }
}

export default PreviewBlog
