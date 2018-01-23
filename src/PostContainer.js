import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'
class PostContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comics: '',
      newComic: {
        title: '',
        publisher: '',
        issue: null,
        url: '',
        review: ''
      },
      hasPosted: false
    }
    this.handlePostInput = this.handlePostInput.bind(this)
    this.handlePostSubmit = this.handlePostSubmit.bind(this)
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  handlePostInput (e) {
    this.setState({
      newComic: {
        ...this.state.newComic,
        [e.target.name]: e.target.value
      }
    })
  }

  handlePostSubmit (e) {
    e.preventDefault()
    console.log('submitted')
    axios.post('http://localhost:3002/', this.state.newComic)
         .then(response => console.log(response))
  }

  render () {
    return <Post
      handlePostInput={this.handlePostInput}
      handlePostSubmit={this.handlePostSubmit}
    />
  }
}

export default PostContainer
