import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import Blog from './pages/Blog'
import AllTestimonies from './pages/AllTestimonies/index'
import Testimony from './pages/Testimony'
import PhotoGallery from './pages/PhotoGallery'
import styled from 'styled-components'
import PersonalPhoto from './pages/PersonalPhoto'

const MainContainer = styled.div`
  background-color: black;
`

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Route exact path='/' component={Home} key='/' />
        <Route exact path='/allblogs' component={AllBlogs} key='/allblogs' />
        <Route exact path='/allblogs/:title' component={Blog} />
        <Route exact path='/alltestimonies' component={AllTestimonies} />
        <Route exact path='/alltestimonies/:name' component={Testimony} />
        <Route exact path='/photogallery' component={PhotoGallery} />
        <Route exact path='/alltestimonies/photos/:name' component={PersonalPhoto} />
      </MainContainer>
    )
  }
}

export default App
