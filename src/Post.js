import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.handlePostSubmit}>
        
          <input type= 'text' placeholder='Comic Book Title' onChange={this.props.handlePostInput} />

          <input type= 'text' placeholder='Publisher' onChange={this.props.handlePostInput} />

          <input type= 'text' placeholder='Issue Number' onChange={this.props.handlePostInput} />

          <input type= 'text' placeholder='Buy Digital Comic Book' onChange={this.props.handlePostInput} />

          <textarea type='text' placeholder='Write Review Here' onChange={this.props.handlePostInput} />

          <input type='submit' value='Post'/>

        </form>
      </div>
    )
  }
}
