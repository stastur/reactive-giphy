import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../store/utils/actionTypes'
import GiphyApi from '../services/giphyService'
import * as actions from '../store/actions/gifs'

function* gifsFetcher({ payload }) {
  try {
    const { category, subcategory, offset } = payload
    const { data, pagination } = yield call(
      GiphyApi.getSubcategoryContent,
      category,
      subcategory,
      { offset }
    )
    const response = {
      data,
      pagination
    }
    yield put(actions.loadGifsSuccess(response))
  } catch (err) {
    yield put(actions.loadGifsFailure(err))
  }
}

export default function*() {
  yield takeEvery(actionTypes.LOAD_GIFS_REQUEST, gifsFetcher)
}
