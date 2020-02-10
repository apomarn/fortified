import React, { Component } from 'react'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: {}
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.blog.user_image} alt='testimoni-profile-pic' />
        <p>{this.state.blog.user_name}</p>
        <p>{this.state.blog.testimony}</p>
      </div>
    )
  }
  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }
    fetch(`${url}/alltestimonies/${this.props.match.params.title}`)
      .then(data => data.json())
      .then(testimonyData => {
        this.setState({ blog: testimonyData[0] })
      })
      .catch(err => console.log(err))
  }
}

export default index
