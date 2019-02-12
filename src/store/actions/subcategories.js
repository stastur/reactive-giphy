import { createAction } from 'redux-actions'

import actionTypes from '../utils/actionTypes'

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
