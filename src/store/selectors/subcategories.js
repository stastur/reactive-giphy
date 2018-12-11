import { createDeepEqualSelector } from './utils'

const getSubcategoriesData = state => state.subcategories.data
const getCurrentCategory = state => state.subcategories.category

const getSubcategories = createDeepEqualSelector(
  getSubcategoriesData,
  getCurrentCategory,
  (data, category) => ({
    data,
    category
  })
)

export { getSubcategories }
