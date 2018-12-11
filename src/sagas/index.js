import { fork } from 'redux-saga/effects'
import categoriesWatcher from './categories'
import subcategoriesWatcher from './subcategories'
import gifsWatcher from './gifs'

export default function*() {
  yield [fork(categoriesWatcher), fork(subcategoriesWatcher), fork(gifsWatcher)]
}
