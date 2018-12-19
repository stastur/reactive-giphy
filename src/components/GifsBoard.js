import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import uuid from 'uuid/v4'
import Image from './Image'
import Clipboard from './Clipboard'

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 300px;
`

const Container = styled.div`
  margin: 10px;

  & > div {
    display: none;
  }

  &:hover > div {
    display: block;
  }
`

class GifsBoard extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      !this.props.gifs.length ||
      this.props.gifs.length !== nextProps.gifs.length ||
      this.props.gifs[0].id !== nextProps.gifs[0].id
    )
  }

  render() {
    const { gifs } = this.props
    const childElements = gifs.map(item => (
      <Container key={uuid()}>
        <Clipboard>{item.images.original.url}</Clipboard>
        <StyledLink to={`${item.id}`}>
          <Image withClipboard gif={item} />
        </StyledLink>
      </Container>
    ))
    return <Masonry>{childElements}</Masonry>
  }
}

export default GifsBoard
