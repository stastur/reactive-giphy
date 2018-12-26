import React from 'react'
import uuid from 'uuid/v4'
import CategoryWithGif from '../CategoryWithGif'
import './style.scss'

const CategoriesView = props => {
  return (
    <div className="table-view">
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

export default CategoriesView
