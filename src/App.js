import React from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} key='/' />
      <Route exact path='/allblogs' component={AllBlogs} key='/allblogs' />
    </>
  )
}

export default App
