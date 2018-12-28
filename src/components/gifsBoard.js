import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import uuid from 'uuid/v4'

import Image from './image'
import Clipboard from './clipboard'
import '../scss/components/gifsBoard.scss'

class GifsBoard extends Component {
  shouldComponentUpdate(nextProps) {
    const { gifs } = this.props
    return (
      !gifs.length ||
      gifs.length !== nextProps.gifs.length ||
      gifs[0].id !== nextProps.gifs[0].id
    )
  }

  render() {
    const { gifs } = this.props
    const childElements = gifs.map(item => (
      <div className="gifs-board" key={uuid()}>
        <Clipboard>{item.images.original.url}</Clipboard>
        <Link to={`${item.id}`}>
          <Image withClipboard gif={item} />
        </Link>
      </div>
    ))
    return <Masonry>{childElements}</Masonry>
  }
}

export default GifsBoard
