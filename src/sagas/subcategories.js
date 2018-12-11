import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../store/utils/actionTypes'
import GiphyApi from '../services/giphyService'
import * as actions from '../store/actions/subcategories'

function* subcategoriesFetcher({ payload }) {
  try {
    const { data } = yield call(GiphyApi.getSubcategoriesByCategory, payload)
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
