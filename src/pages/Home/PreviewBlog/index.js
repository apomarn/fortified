import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledDivider } from '../../../components/Anchors'
import { colors, textStyles, breakpoints } from '../../../styles'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
`
const Header = styled.p`
  ${textStyles.h2DancingScript}
  color: ${colors.brown};
  font-weight: 700;
  align-self: flex-start;
  margin-left: 45px;
`
const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 16px;
  color: ${colors.lightBrown};
  margin-bottom: 10px;
  font-weight: 900;
  padding-left: 45px;
`

const Paragraph = styled.p`
  ${textStyles.h4Montserrat}
  color: ${colors.white};
  padding-left: 45px;
  padding-right: 45px;
`
const AllBlogs = styled(Link)`
  font-size: 16px;
  color: ${colors.brown};
  font-weight: 900;
  text-align: right;
  padding-right: 45px;
  text-decoration: underline;
  margin-bottom: 85px;
`

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
              <Link to={`/allblogs/${blog.title}`}>
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
