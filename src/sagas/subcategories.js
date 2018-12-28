import { call, put, takeLatest } from 'redux-saga/effects'

import actionTypes from '../store/utils/actionTypes'
import * as actions from '../store/actions/subcategories'
import { giphyService } from '../services/giphyService'

function* subcategoriesFetcher({ payload }) {
  try {
    const { data } = yield call(
      giphyService.getSubcategoriesByCategory,
      payload
    )
    const response = {
      data,
      category: payload
    }
    yield put(actions.loadSubcategoriesSuccess(response))
  } catch (err) {
    yield put(actions.loadSubcategoriesFailure(err))
  }
}

export default function*() {
  yield takeLatest(actionTypes.LOAD_SUBCATEGORIES_REQUEST, subcategoriesFetcher)
}
