import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { giphyService } from '../services/giphyService'
import '../scss/components/modalGif.scss'

class ModalGif extends Component {
  state = {
    gif: null
  }
  async componentDidMount() {
    try {
      const response = await giphyService.getGifById(this.props.id)
      this.setState({ gif: response.data })
    } catch {
      console.log('Error in modal')
    }
  }

  render() {
    return (
      <div
        className="modal-container"
        onClick={e => this.props.history.push('.')}
      >
        {this.state.gif ? (
          <img
            src={this.state.gif.images.original.url}
            alt={this.state.gif.title}
            onLoad={this.stopLoading}
          />
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    )
  }
}

export default withRouter(ModalGif)
