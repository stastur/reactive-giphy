import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'

const List = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    padding: 2px 0;
    cursor: pointer;
  }
  & li:hover {
    color: ${colors.primary};
  }
`

const CategoriesList = props => {
  return (
    <List>
      {props.categories.map(item => {
        return (
          <li onClick={() => props.onSelect(item)} key={item.name_encoded}>
            {item.name}
          </li>
        )
      })}
    </List>
  )
}

export default CategoriesList
