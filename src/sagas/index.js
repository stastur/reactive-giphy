import { fork } from 'redux-saga/effects'

import gifsWatcher from './gifs'
import categoriesWatcher from './categories'
import subcategoriesWatcher from './subcategories'

export default function*() {
  yield [fork(categoriesWatcher), fork(subcategoriesWatcher), fork(gifsWatcher)]
}
