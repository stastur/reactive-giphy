import actionTypes from '../utils/actionTypes'
import { createAction } from 'redux-actions'

const loadGifsRequest = createAction(actionTypes.LOAD_GIFS_REQUEST)
const loadGifsSuccess = createAction(actionTypes.LOAD_GIFS_SUCCESS)
const loadGifsFailure = createAction(actionTypes.LOAD_GIFS_FAILURE)

export { loadGifsRequest, loadGifsSuccess, loadGifsFailure }
