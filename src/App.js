import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import Blog from './pages/Blog'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allBlogs: []
    }

    return (
      <>
        <Route exact path='/' component={Home} key='/' />
        <Route exact path='/allblogs' component={AllBlogs} key='/allblogs' />

        {this.state.allBlogs.map(blog => {
          return (
            <>
              <Route exact path={`/allblogs/${blog.title}`} render={() => <Blog {...blog} />} key={blog._id} />
            </>
          )
        })}
      </>
    )
  }
  componentDidMount() {
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    }

    fetch(`${url}/allblogs`)
      .then(data => data.json())
      .then(blogs => {
        this.setState({ allBlogs: blogs })
      })
      .catch(err => console.log(err))
  }
}

export default App
