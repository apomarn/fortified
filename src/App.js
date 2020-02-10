import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import Blog from './pages/Blog'
import Testimony from './pages/Testimony'

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home} key='/' />
        <Route exact path='/allblogs' component={AllBlogs} key='/allblogs' />
        <Route exact path='/allblogs/:title' component={Blog} />
        <Route exact path='/alltestimonies/:name' component={Testimony} />
      </>
    )
  }
}

export default App
