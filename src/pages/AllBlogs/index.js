import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import EachBlog from './EachBlog'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

const MainContainer = styled.div`
  background-color: ${colors.black};
`

class AllBlogs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allBlogs: []
    }
  }

  render() {
    return (
      <MainContainer>
        <Navbar />
        {this.state.allBlogs.map(blog => {
          console.log(this.state.allBlogs)

          return (
            <Link to={`/allblogs/${blog.title}`}>
              <EachBlog {...blog} key={blog._id} />
            </Link>
          )
        })}
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

export default AllBlogs
