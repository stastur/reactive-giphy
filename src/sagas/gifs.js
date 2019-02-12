import { call, put, takeEvery } from 'redux-saga/effects'

import actionTypes from '../store/utils/actionTypes'
import * as actions from '../store/actions/gifs'
import { giphyService } from '../services/giphyService'

function* gifsFetcher({ payload }) {
  try {
    const { category, subcategory, offset } = payload
    const { data, pagination } = yield call(
      giphyService.getSubcategoryContent,
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
