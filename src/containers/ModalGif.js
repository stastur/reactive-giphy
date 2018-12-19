import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import Giphy from '../services/giphyService'

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
`

const ModalImage = styled.img`
  object-fit: contain;
  height: 80%;
  width: 80%;
`

class ModalGif extends Component {
  state = {
    gif: null
  }
  async componentDidMount() {
    try {
      const response = await Giphy.getGifById(this.props.id)
      this.setState({ gif: response.data })
    } catch {
      console.log('Error in modal')
    }
  }

  render() {
    return (
      <ModalContainer onClick={e => this.props.history.push('.')}>
        {this.state.gif ? (
          <ModalImage
            src={this.state.gif.images.original.url}
            alt={this.state.gif.title}
            onLoad={this.stopLoading}
          />
        ) : (
          <h1>loading...</h1>
        )}
      </ModalContainer>
    )
  }
}

export default withRouter(ModalGif)
