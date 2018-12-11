import actionTypes from '../utils/actionTypes'
import { createAction } from 'redux-actions'

const loadCategoriesRequest = createAction(actionTypes.LOAD_CATEGORIES_REQUEST)
const loadCategoriesSuccess = createAction(actionTypes.LOAD_CATEGORIES_SUCCESS)
const loadCategoriesFailure = createAction(actionTypes.LOAD_CATEGORIES_FAILURE)

export { loadCategoriesRequest, loadCategoriesSuccess, loadCategoriesFailure }
