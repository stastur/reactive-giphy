import React from 'react'
import uuid from 'uuid/v4'

import CategoryWithGif from './categoryWithGif'
import '../scss/components/categoriesView.scss'

const CategoriesView = props => (
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

export default CategoriesView
