import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

// import Post from './Post'
import PostContainer from './PostContainer'

class App extends Component {
  render () {
    return (
      <div className='header'>
        <h1>Weekly Kryptonite</h1>
        <h3>It's a bird... It's a plane... It's the comics you should read this week!</h3>
        <PostContainer />
      </div>
    )
  }
}

export default App
