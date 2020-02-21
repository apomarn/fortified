import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import EachBlog from './EachBlog'
import Footer from '../../components/Footer'
import { MainContainer } from './style'

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

          return <EachBlog {...blog} key={blog._id} />
        })}
        <Footer />
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
