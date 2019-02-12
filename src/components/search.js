import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

import '../scss/components/search.scss'

const useInput = initial => {
  const [value, setValue] = useState(initial)
  const onInputChange = e => {
    setValue(e.target.value)
  }
  return [value, onInputChange]
}

const Search = props => {
  const [value, onInputChange] = useInput('')

  const onSubmit = () => {
    value && props.history.push(`/search/${value}/`)
  }

  const onEnterUp = e => {
    e.keyCode === 13 && value && props.history.push(`/search/${value}/`)
  }

  return (
    <div className="search">
      <button className="btn" type="submit" onClick={onSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        className="input"
        onKeyDown={onEnterUp}
        placeholder="Search..."
        onChange={onInputChange}
        value={value}
      />
    </div>
  )
}

export default withRouter(Search)
