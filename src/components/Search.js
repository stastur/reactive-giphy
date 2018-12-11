import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import colors from '../assets/colors'

const SearchButton = styled.button`
  display: flex;
  color: ${colors.fontColor};
  outline: none;
  border: none;
  width: 2em;
  justify-content: center;
  align-items: center;
  background-color: #0ff;
  cursor: pointer;
`

const SearchIcon = styled(FontAwesomeIcon)``

const SearchInput = styled.input`
  border: none;
  box-sizing: border-box;
  background: #fff;
  outline: none;
  width: 10em;
  padding: 0 1em;
`

const useInput = initial => {
  const [value, setValue] = useState(initial)
  const onInputChange = e => {
    setValue(e.target.value)
  }
  return [value, onInputChange]
}

const Search = props => {
  const [value, onInputChange] = useInput('')

  const onSubmit = e => {
    value && props.history.push(`/search/${value}/`)
  }

  const onEnterUp = e => {
    e.keyCode === 13 && value && props.history.push(`/search/${value}/`)
  }

  return (
    <div className={props.className}>
      <SearchButton type="submit" onClick={onSubmit}>
        <SearchIcon icon={faSearch} />
      </SearchButton>
      <SearchInput
        onKeyDown={onEnterUp}
        placeholder="Search..."
        onChange={onInputChange}
        value={value}
      />
    </div>
  )
}

export default withRouter(styled(Search)`
  display: flex;
  justify-content: center;
  padding: 0.5em;
  height: -webkit-fill-available;
`)
