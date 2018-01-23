import React, { Component } from 'react'

class Post extends Component {
  render () {
  
    return (
      <div>
        <form class='input-box' onSubmit={this.props.handlePostSubmit}>

          <input class='title' type='text' name='title' placeholder='Comic Book Title' onChange={this.props.handlePostInput} />

          <input class='publisher' type='text' name='publisher' placeholder='Publisher' onChange={this.props.handlePostInput} />

          <input class='issue' type='number' name='issue' placeholder='Issue Number' onChange={this.props.handlePostInput} />

          <input class='url' type='text' name='url' placeholder='Buy Digital Comic Book' onChange={this.props.handlePostInput} />

          <textarea class='review' type='text' name='review' placeholder='Write Review Here' onChange={this.props.handlePostInput} />

          <input class='post-button' type='submit' value='Post' />

        </form>
      </div>
    )
  }
}

export default Post
