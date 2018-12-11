import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../store/utils/actionTypes'
import GiphyApi from '../services/giphyService'
import * as actions from '../store/actions/categories'

function* categoriesFetcher() {
  try {
    const { data } = yield call(GiphyApi.getCategories, 'gifs')
    yield put(actions.loadCategoriesSuccess(data))
  } catch (err) {
    yield put(actions.loadCategoriesFailure(err))
  }
}

export default function*() {
  yield takeLatest(actionTypes.LOAD_CATEGORIES_REQUEST, categoriesFetcher)
}
