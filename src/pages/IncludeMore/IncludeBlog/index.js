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
      paragraph_1: '',
      paragraph_2: '',
      paragraph_3: '',
      paragraph_4: '',
      paragraph_5: '',
      paragraph_6: '',
      paragraph_7: '',
      paragraph_8: '',
      paragraph_9: '',
      paragraph_10: ''
    }
    this.onImageChange = this.onImageChange.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onParagraphChange_1 = this.onParagraphChange_1.bind(this)
    this.onParagraphChange_2 = this.onParagraphChange_2.bind(this)
    this.onParagraphChange_3 = this.onParagraphChange_3.bind(this)
    this.onParagraphChange_4 = this.onParagraphChange_4.bind(this)
    this.onParagraphChange_5 = this.onParagraphChange_5.bind(this)
    this.onParagraphChange_6 = this.onParagraphChange_6.bind(this)
    this.onParagraphChange_7 = this.onParagraphChange_7.bind(this)
    this.onParagraphChange_8 = this.onParagraphChange_8.bind(this)
    this.onParagraphChange_9 = this.onParagraphChange_9.bind(this)
    this.onParagraphChange_10 = this.onParagraphChange_10.bind(this)
    this.onBlogSubmit = this.onBlogSubmit.bind(this)
  }

  onImageChange(e) {
    this.setState({ image: e.target.value })
  }
  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }
  onParagraphChange_1(e) {
    this.setState({ paragraph_1: e.target.value })
  }
  onParagraphChange_2(e) {
    this.setState({ paragraph_2: e.target.value })
  }
  onParagraphChange_3(e) {
    this.setState({ paragraph_3: e.target.value })
  }
  onParagraphChange_4(e) {
    this.setState({ paragraph_4: e.target.value })
  }
  onParagraphChange_5(e) {
    this.setState({ paragraph_5: e.target.value })
  }
  onParagraphChange_6(e) {
    this.setState({ paragraph_6: e.target.value })
  }
  onParagraphChange_7(e) {
    this.setState({ paragraph_7: e.target.value })
  }
  onParagraphChange_8(e) {
    this.setState({ paragraph_8: e.target.value })
  }
  onParagraphChange_9(e) {
    this.setState({ paragraph_9: e.target.value })
  }
  onParagraphChange_10(e) {
    this.setState({ paragraph_10: e.target.value })
  }

  onBlogSubmit(e) {
    e.preventDefault()
    const newBlog = {
      image: this.state.image,
      title: this.state.title,
      paragraph_1: this.state.paragraph_1,
      paragraph_2: this.state.paragraph_2,
      paragraph_3: this.state.paragraph_3,
      paragraph_4: this.state.paragraph_4,
      paragraph_5: this.state.paragraph_5,
      paragraph_6: this.state.paragraph_6,
      paragraph_7: this.state.paragraph_7,
      paragraph_8: this.state.paragraph_8,
      paragraph_9: this.state.paragraph_9,
      paragraph_10: this.state.paragraph_10
    }

    axios.post('http://localhost:5000/allblogs', newBlog).then(res => console.log(res.data))
    this.setState({
      image: '',
      title: '',
      paragraph_1: '',
      paragraph_2: '',
      paragraph_3: '',
      paragraph_4: '',
      paragraph_5: '',
      paragraph_6: '',
      paragraph_7: '',
      paragraph_8: '',
      paragraph_9: '',
      paragraph_10: ''
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
          <input type='text' value={this.state.paragraph_1} onChange={this.onParagraphChange_1} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_2} onChange={this.onParagraphChange_2} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_3} onChange={this.onParagraphChange_3} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_4} onChange={this.onParagraphChange_4} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_5} onChange={this.onParagraphChange_5} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_6} onChange={this.onParagraphChange_6} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_7} onChange={this.onParagraphChange_7} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_8} onChange={this.onParagraphChange_8} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_9} onChange={this.onParagraphChange_9} />
          <p>Next paragraph</p>
          <input type='text' value={this.state.paragraph_10} onChange={this.onParagraphChange_10} />
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
