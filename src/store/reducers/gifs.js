import { handleActions } from 'redux-actions'

import actionTypes from '../utils/actionTypes'

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  total_count: 0,
  offset: 0
}

const loadGifsRequest = state => ({
  ...state,
  isLoading: true
})

const loadGifsSuccess = (state, { payload }) => {
  let { data, pagination } = payload
  if (pagination.offset) {
    data = [...state.data, ...data]
  }
  return {
    data,
    total_count: pagination.total_count,
    offset: pagination.offset,
    isLoading: false
  }
}

const loadGifsFailure = ({ state, payload }) => ({
  ...state,
  isLoading: false,
  error: payload
})

export default handleActions(
  {
    [actionTypes.LOAD_GIFS_REQUEST]: loadGifsRequest,
    [actionTypes.LOAD_GIFS_SUCCESS]: loadGifsSuccess,
    [actionTypes.LOAD_GIFS_FAILURE]: loadGifsFailure
  },
  initialState
)
