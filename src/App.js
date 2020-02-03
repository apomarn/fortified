import React from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} key='/' />
    </>
  )
}

export default App
