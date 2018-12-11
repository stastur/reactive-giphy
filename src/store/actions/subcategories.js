import actionTypes from '../utils/actionTypes'
import { createAction } from 'redux-actions'

const loadSubcategoriesRequest = createAction(
  actionTypes.LOAD_SUBCATEGORIES_REQUEST
)

const loadSubcategoriesSuccess = createAction(
  actionTypes.LOAD_SUBCATEGORIES_SUCCESS
)
const loadSubcategoriesFailure = createAction(
  actionTypes.LOAD_SUBCATEGORIES_FAILURE
)

export {
  loadSubcategoriesRequest,
  loadSubcategoriesSuccess,
  loadSubcategoriesFailure
}
