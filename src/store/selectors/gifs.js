import { createDeepEqualSelector } from './utils'

const getGifs = createDeepEqualSelector(state => state.gifs.data, d => d)

export { getGifs }
