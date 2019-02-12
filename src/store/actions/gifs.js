import { createAction } from 'redux-actions'

import actionTypes from '../utils/actionTypes'

const loadGifsRequest = createAction(actionTypes.LOAD_GIFS_REQUEST)
const loadGifsSuccess = createAction(actionTypes.LOAD_GIFS_SUCCESS)
const loadGifsFailure = createAction(actionTypes.LOAD_GIFS_FAILURE)

export { loadGifsRequest, loadGifsSuccess, loadGifsFailure }
