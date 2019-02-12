import { handleActions } from 'redux-actions'

import actionTypes from '../utils/actionTypes'

const initialState = []

const loadCategoriesSuccess = (state, { payload }) => [...payload]

export default handleActions(
  {
    [actionTypes.LOAD_CATEGORIES_SUCCESS]: loadCategoriesSuccess
  },
  initialState
)
