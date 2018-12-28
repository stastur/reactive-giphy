import React from 'react'

import '../scss/components/categoriesList.scss'

const CategoriesList = props => (
  <ul className="categories-list">
    {props.categories.map(item => (
      <li onClick={() => props.onSelect(item)} key={item.name_encoded}>
        {item.name}
      </li>
    ))}
  </ul>
)

export default CategoriesList
