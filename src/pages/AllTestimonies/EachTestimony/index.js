import React, { Component } from 'react'

class EachTestimony extends Component {
  render() {
    return (
      <div>
        <p>{this.props.user_name}</p>
        <img src={this.props.user_image} alt='user_image' />
      </div>
    )
  }
}

export default EachTestimony
