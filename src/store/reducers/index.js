import { combineReducers } from 'redux'
import categoriesReducer from './categories'
import subcategoriesReducer from './subcategories'
import gifsReducer from './gifs'

export default combineReducers({
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  gifs: gifsReducer
})
