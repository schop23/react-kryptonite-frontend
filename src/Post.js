import React, { Component } from 'react'

class Post extends Component {
  render () {
  
    return (
      <div>
        <form className='input-box' onSubmit={this.props.handlePostSubmit}>

          <input className='title' type='text' name='title' placeholder='Comic Book Title' onChange={this.props.handlePostInput} />

          <input className='publisher' type='text' name='publisher' placeholder='Publisher' onChange={this.props.handlePostInput} />

          <input className='issue' type='number' name='issue' placeholder='Issue Number' onChange={this.props.handlePostInput} />

          <input className='url' type='text' name='url' placeholder='Buy Digital Comic Book' onChange={this.props.handlePostInput} />

          <textarea className='review' type='text' name='review' placeholder='Write Review Here' onChange={this.props.handlePostInput} />

          <input className='post-button' type='submit' value='Post' />

        </form>
      </div>
    )
  }
}

export default Post
