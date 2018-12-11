import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import CategoryWithGif from './CategoryWithGif'

const Categories = props => {
  return (
    <div className={props.className}>
      {props.categories.map(item => (
        <CategoryWithGif
          onSelect={() => props.onSelect(item)}
          key={uuid()}
          category={item}
        />
      ))}
    </div>
  )
}

export default styled(Categories)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
