import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'

const LoadingIndicator = styled.div`
  position: absolute;
  height: 0.5em;
  bottom: 0;
  left: 0;
  width: 10%;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${colors.primary};
  animation: loading 0.5s linear infinite;

  @keyframes loading {
    to {
      left: 90%;
    }
  }
`

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  & img {
    width: inherit;
  }
`

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
    <Container>
      <img
        onMouseOver={toggleGif}
        onMouseLeave={toggleGif}
        onLoad={() => setLoading(false)}
        src={gif}
        alt={title}
      />
      <LoadingIndicator show={loading} />
    </Container>
  )
}

export default Image
