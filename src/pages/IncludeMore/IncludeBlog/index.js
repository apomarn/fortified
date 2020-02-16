import React, { Component } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import axios from 'axios'

class IncludeBlog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      title: '',
      paragraph: ''
    }
    this.onImageChange = this.onImageChange.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onParagraphChange = this.onParagraphChange.bind(this)
    this.onBlogSubmit = this.onBlogSubmit.bind(this)
  }

  onImageChange(e) {
    this.setState({ image: e.target.value })
  }
  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }
  onParagraphChange(e) {
    this.setState({ paragraph: e.target.value })
  }

  onBlogSubmit(e) {
    e.preventDefault()
    const newBlog = {
      image: this.state.image,
      title: this.state.title,
      paragraph: this.state.paragraph
    }

    axios.post('http://localhost:5000/allblogs', newBlog).then(res => console.log(res.data))
    this.setState({
      image: '',
      title: '',
      paragraph: ''
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <form>
          <p>Image that will represent the blog</p>
          <input type='text' value={this.state.image} onChange={this.onImageChange} />
          <p>What is title going to be?</p>
          <input type='text' value={this.state.title} onChange={this.onTitleChange} />
          <p>Start writting here:</p>
          <input type='text' value={this.state.paragraph} onChange={this.onParagraphChange} />
          <button type='submit' onClick={this.onBlogSubmit}>
            Submit
          </button>
        </form>
        <Footer />
      </div>
    )
  }
}

export default IncludeBlog
