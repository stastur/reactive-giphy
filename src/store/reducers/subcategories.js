import { handleActions } from 'redux-actions'

import actionTypes from '../utils/actionTypes'

const initialState = {
  category: '',
  isLoading: false,
  data: [],
  error: null
}

const loadSubcategoriesRequest = state => ({
  ...state,
  isLoading: true
})

const loadSubcategoriesSuccess = (state, { payload }) => {
  const { data, category } = payload
  return {
    category,
    data,
    isLoading: false
  }
}

const loadSubcategoriesFailure = ({ state, payload }) => ({
  ...state,
  isLoading: false,
  error: payload
})

export default handleActions(
  {
    [actionTypes.LOAD_SUBCATEGORIES_REQUEST]: loadSubcategoriesRequest,
    [actionTypes.LOAD_SUBCATEGORIES_SUCCESS]: loadSubcategoriesSuccess,
    [actionTypes.LOAD_SUBCATEGORIES_FAILURE]: loadSubcategoriesFailure
  },
  initialState
)
