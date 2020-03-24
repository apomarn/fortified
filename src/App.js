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
import IncludeMore from './pages/IncludeMore'
import IncludeBlog from './pages/IncludeMore/IncludeBlog'
import IncludeTestimony from './pages/IncludeMore/IncludeTestimony'

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
        <Route exact path='/includemore' component={IncludeMore} />
        <Route exact path='/includeblog' component={IncludeBlog} />
        <Route exact path='/includetestimony' component={IncludeTestimony} />
      </MainContainer>
    )
  }
}

export default App
