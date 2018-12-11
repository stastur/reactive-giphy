import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import uuid from 'uuid/v4'
import Image from './Image'

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 10px;
  width: 300px;
`

class GifsBoard extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.gifs.length !== nextProps.gifs.length ||
      this.props.gifs[0].id !== nextProps.gifs[0].id
    )
  }

  render() {
    const { gifs } = this.props
    const childElements = gifs.map(item => (
      <StyledLink key={uuid()} to={`${item.id}`}>
        <Image gif={item} />
      </StyledLink>
    ))
    return <Masonry>{childElements}</Masonry>
  }
}

export default GifsBoard
