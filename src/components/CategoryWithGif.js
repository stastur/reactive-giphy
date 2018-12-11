import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const Label = styled.span`
  position: absolute;
  z-index: 1;
`

const CategoryWithGif = props => {
  const { category, className } = props
  return (
    <div onClick={props.onSelect} className={className}>
      <Label>{category && category.name}</Label>
      <Image gif={category.gif} />
    </div>
  )
}

export default styled(CategoryWithGif)`
  position: relative;
  display: flex;
  width: fit-content;
  height: 150px;
  width: 250px;
  margin: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  & img {
    object-fit: cover;
    height: 100%;
  }
  & > div {
    height: 100%;
  }
`
