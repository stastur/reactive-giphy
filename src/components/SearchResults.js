import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Giphy from '../services/giphyService'
import ModalGif from '../containers/ModalGif'
import GifsBoard from './GifsBoard'
import settings from '../settings'

const useEffectOnScrollToBottom = (q, effect) => {
  const [offset, setOffset] = useState(settings.gifsToLoad)

  useEffect(() => {
    const listener = () => {
      let scrolled = window.scrollY + window.innerHeight
      if (document.body.scrollHeight === scrolled) {
        Giphy.search({ q, offset }).then(({ data }) => {
          effect(data)
          setOffset(offset + settings.gifsToLoad)
        })
      }
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })
}

const SearchResults = props => {
  const [data, setData] = useState([])

  useEffectOnScrollToBottom(props.match.params.searchQuery, newData => [
    setData([...data, ...newData])
  ])

  useEffect(
    () => {
      let q = props.match.params.searchQuery
      Giphy.search({ q }).then(({ data }) => setData(data))
    },
    [props.match.params.searchQuery]
  )

  if (data.length) {
    return (
      <>
        <GifsBoard gifs={data} />
        {props.match.params.id ? <ModalGif id={props.match.params.id} /> : null}
      </>
    )
  }
  return <h1>No results</h1>
}

export default withRouter(SearchResults)
