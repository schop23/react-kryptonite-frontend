import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.handlePostSubmit}>
          <input type= 'text' placeholder='Comic Book Title' onChange={this.props.handlePostInput} />
        </form>
      </div>
    )
  }
}
