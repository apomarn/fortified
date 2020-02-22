import React, { Component } from 'react'
import Navbar from '../../../components/Navbar'
import axios from 'axios'
class IncludeTestimony extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user_image: '',
      user_name: '',
      testimony_part1: '',
      testimony_part2: '',
      testimony_part3: '',
      testimony_part4: '',
      testimony_part5: '',
      testimony_part6: '',
      testimony_part7: '',
      testimony_part8: '',
      testimony_part9: '',
      testimony_part10: '',
      photo_gallery_1: '',
      photo_gallery_2: '',
      photo_gallery_3: '',
      photo_gallery_4: '',
      photo_gallery_5: '',
      photo_gallery_6: '',
      photo_gallery_7: '',
      photo_gallery_8: '',
      photo_gallery_9: '',
      photo_gallery_10: ''
    }
    this.onUserImageChange = this.onUserImageChange.bind(this)
    this.onUserNameChange = this.onUserNameChange.bind(this)
    this.onTestimonyPart1Change = this.onTestimonyPart1Change.bind(this)
    this.onTestimonyPart2Change = this.onTestimonyPart2Change.bind(this)
    this.onTestimonyPart3Change = this.onTestimonyPart3Change.bind(this)
    this.onTestimonyPart4Change = this.onTestimonyPart4Change.bind(this)
    this.onTestimonyPart5Change = this.onTestimonyPart5Change.bind(this)
    this.onTestimonyPart6Change = this.onTestimonyPart6Change.bind(this)
    this.onTestimonyPart7Change = this.onTestimonyPart7Change.bind(this)
    this.onTestimonyPart8Change = this.onTestimonyPart8Change.bind(this)
    this.onTestimonyPart9Change = this.onTestimonyPart9Change.bind(this)
    this.onTestimonyPart10Change = this.onTestimonyPart10Change.bind(this)
    this.onPhotoGalleryChange_1 = this.onPhotoGalleryChange_1.bind(this)
    this.onPhotoGalleryChange_2 = this.onPhotoGalleryChange_2.bind(this)
    this.onPhotoGalleryChange_3 = this.onPhotoGalleryChange_3.bind(this)
    this.onPhotoGalleryChange_4 = this.onPhotoGalleryChange_4.bind(this)
    this.onPhotoGalleryChange_5 = this.onPhotoGalleryChange_5.bind(this)
    this.onPhotoGalleryChange_6 = this.onPhotoGalleryChange_6.bind(this)
    this.onPhotoGalleryChange_7 = this.onPhotoGalleryChange_7.bind(this)
    this.onPhotoGalleryChange_8 = this.onPhotoGalleryChange_8.bind(this)
    this.onPhotoGalleryChange_9 = this.onPhotoGalleryChange_9.bind(this)
    this.onPhotoGalleryChange_10 = this.onPhotoGalleryChange_10.bind(this)
    this.onBlogSubmit = this.onBlogSubmit.bind(this)
  }

  onUserImageChange(e) {
    this.setState({ user_image: e.target.value })
  }
  onUserNameChange(e) {
    this.setState({ user_name: e.target.value })
  }
  onTestimonyPart1Change(e) {
    this.setState({ testimony_part1: e.target.value })
  }
  onTestimonyPart2Change(e) {
    this.setState({ testimony_part2: e.target.value })
  }
  onTestimonyPart3Change(e) {
    this.setState({ testimony_part3: e.target.value })
  }
  onTestimonyPart4Change(e) {
    this.setState({ testimony_part4: e.target.value })
  }
  onTestimonyPart5Change(e) {
    this.setState({ testimony_part5: e.target.value })
  }
  onTestimonyPart6Change(e) {
    this.setState({ testimony_part6: e.target.value })
  }
  onTestimonyPart7Change(e) {
    this.setState({ testimony_part7: e.target.value })
  }
  onTestimonyPart8Change(e) {
    this.setState({ testimony_part8: e.target.value })
  }
  onTestimonyPart9Change(e) {
    this.setState({ testimony_part9: e.target.value })
  }
  onTestimonyPart10Change(e) {
    this.setState({ testimony_part10: e.target.value })
  }
  onPhotoGalleryChange_1(e) {
    this.state({ photo_gallery_1: e.target.value })
  }
  onPhotoGalleryChange_2(e) {
    this.state({ photo_gallery_2: e.target.value })
  }
  onPhotoGalleryChange_3(e) {
    this.state({ photo_gallery_3: e.target.value })
  }
  onPhotoGalleryChange_4(e) {
    this.state({ photo_gallery_4: e.target.value })
  }
  onPhotoGalleryChange_5(e) {
    this.state({ photo_gallery_5: e.target.value })
  }
  onPhotoGalleryChange_6(e) {
    this.state({ photo_gallery_6: e.target.value })
  }
  onPhotoGalleryChange_7(e) {
    this.state({ photo_gallery_7: e.target.value })
  }
  onPhotoGalleryChange_8(e) {
    this.state({ photo_gallery_8: e.target.value })
  }
  onPhotoGalleryChange_9(e) {
    this.state({ photo_gallery_9: e.target.value })
  }
  onPhotoGalleryChange_10(e) {
    this.state({ photo_gallery_10: e.target.value })
  }

  onBlogSubmit(e) {
    e.preventDefault()
    const newTestimony = {
      user_image: this.state.user_image,
      user_name: this.state.user_name,
      testimony_part1: this.state.testimony_part1,
      testimony_part2: this.state.testimony_part2,
      testimony_part3: this.state.testimony_part3,
      testimony_part4: this.state.testimony_part4,
      testimony_part5: this.state.testimony_part5,
      testimony_part6: this.state.testimony_part6,
      testimony_part7: this.state.testimony_part7,
      testimony_part8: this.state.testimony_part8,
      testimony_part9: this.state.testimony_part9,
      testimony_part10: this.state.testimony_part10
    }

    axios.post('http://localhost:5000/alltestimonies', newTestimony).then(res => console.log(res.data))
    this.setState({
      user_image: '',
      user_name: '',
      testimony_part1: '',
      testimony_part2: '',
      testimony_part3: '',
      testimony_part4: '',
      testimony_part5: '',
      testimony_part6: '',
      testimony_part7: '',
      testimony_part8: '',
      testimony_part9: '',
      testimony_part10: '',
      photo_gallery_1: '',
      photo_gallery_2: '',
      photo_gallery_3: '',
      photo_gallery_4: '',
      photo_gallery_5: '',
      photo_gallery_6: '',
      photo_gallery_7: '',
      photo_gallery_8: '',
      photo_gallery_9: '',
      photo_gallery_10: ''
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>Header</p>
        <form>
          <p>Main Photo:</p>
          <input type='text' value={this.state.user_image} onChange={this.onUserImageChange} />
          <p>Name:</p>
          <input type='text' value={this.state.user_name} onChange={this.onUserNameChange}></input>
          <p>Testimony:</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part1}
            onChange={this.onTestimonyPart1Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part2}
            onChange={this.onTestimonyPart2Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part3}
            onChange={this.onTestimonyPart3Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part4}
            onChange={this.onTestimonyPart4Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part5}
            onChange={this.onTestimonyPart5Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part6}
            onChange={this.onTestimonyPart6Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part7}
            onChange={this.onTestimonyPart7Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part8}
            onChange={this.onTestimonyPart8Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part9}
            onChange={this.onTestimonyPart9Change}
          />
          <p>Next paragraph</p>
          <textarea
            type='text'
            rows='5'
            cols='25'
            value={this.state.testimony_part10}
            onChange={this.onTestimonyPart10Change}
          />
          <p>Photo Gallery:</p>
          <p>Photo 1:</p>
          <input type='text' value={this.state.photo_gallery_1} onChange={this.onPhotoGalleryChange_1} />
          <p>Photo 2:</p>
          <input type='text' value={this.state.photo_gallery_2} onChange={this.onPhotoGalleryChange_2} />

          <p>Photo 3:</p>
          <input type='text' value={this.state.photo_gallery_3} onChange={this.onPhotoGalleryChange_3} />

          <p>Photo 4:</p>
          <input type='text' value={this.state.photo_gallery_4} onChange={this.onPhotoGalleryChange_4} />

          <p>Photo 5:</p>
          <input type='text' value={this.state.photo_gallery_5} onChange={this.onPhotoGalleryChange_5} />

          <p>Photo 6:</p>
          <input type='text' value={this.state.photo_gallery_6} onChange={this.onPhotoGalleryChange_6} />

          <p>Photo 7:</p>
          <input type='text' value={this.state.photo_gallery_7} onChange={this.onPhotoGalleryChange_7} />

          <p>Photo 8:</p>
          <input type='text' value={this.state.photo_gallery_8} onChange={this.onPhotoGalleryChange_8} />

          <p>Photo 9:</p>
          <input type='text' value={this.state.photo_gallery_9} onChange={this.onPhotoGalleryChange_9} />

          <p>Photo 10:</p>
          <input type='text' value={this.state.photo_gallery_10} onChange={this.onPhotoGalleryChange_10} />

          <button type='submit' onClick={this.onBlogSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default IncludeTestimony
