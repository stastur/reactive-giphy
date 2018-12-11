import { createDeepEqualSelector } from './utils'

const getCategories = createDeepEqualSelector(state => state.categories, d => d)

export { getCategories }
