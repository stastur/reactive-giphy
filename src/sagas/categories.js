import { call, put, takeLatest } from 'redux-saga/effects'

import { giphyService } from '../services/giphyService'
import actionTypes from '../store/utils/actionTypes'
import * as actions from '../store/actions/categories'
 
function* categoriesFetcher() {
  try {
    const { data } = yield call(giphyService.getCategories, 'gifs')
    yield put(actions.loadCategoriesSuccess(data))
  } catch (err) {
    yield put(actions.loadCategoriesFailure(err))
  }
}

export default function*() {
  yield takeLatest(actionTypes.LOAD_CATEGORIES_REQUEST, categoriesFetcher)
}
