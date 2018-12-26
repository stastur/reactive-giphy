import React, { useState } from 'react'
import './style.scss'

const useGif = ({ images }, setLoading) => {
  const { fixed_width, fixed_width_still } = images
  const [gif, setGif] = useState(fixed_width_still.url)
  const [counter, setCounter] = useState(0)
  const toggleGif = () => {
    setLoading(true)
    const srcs = [fixed_width_still.url, fixed_width.url]
    setGif(srcs[(counter + 1) % srcs.length])
    setCounter(counter + 1)
  }
  return [gif, toggleGif]
}

const Image = props => {
  const { title } = props.gif
  const [loading, setLoading] = useState(false)
  const [gif, toggleGif] = useGif(props.gif, setLoading)

  return (
    <div className="gif-container">
      <img
        onMouseOver={toggleGif}
        onMouseLeave={toggleGif}
        onLoad={() => setLoading(false)}
        src={gif}
        alt={title}
      />
      <div
        className="loading-indicator"
        style={{ display: `${loading ? 'block' : 'none'}` }}
      />
    </div>
  )
}

export default Image
