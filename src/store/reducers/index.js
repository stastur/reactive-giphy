import { combineReducers } from 'redux'

import gifsReducer from './gifs'
import categoriesReducer from './categories'
import subcategoriesReducer from './subcategories'

export default combineReducers({
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  gifs: gifsReducer
})
