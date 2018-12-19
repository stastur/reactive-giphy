import GphApiClient from 'giphy-js-sdk-core'
import key from './key'
import settings from '../settings'

const client = new GphApiClient(key)

function getTrending(type = 'gifs', opts = {}) {
  return client.trending(type, { ...opts, limit: settings.gifsToLoad })
}

function getCategories(opts = { limit: 500 }) {
  return client.categoriesForGifs(opts)
}

function getSubcategoriesByCategory(category, opts = { limit: 500 }) {
  return client.subCategoriesForGifs(category, {
    ...opts,
    limit: settings.gifsToLoad
  })
}

function getSubcategoryContent(category, subcategory, opts = {}) {
  return client.gifsByCategories(category, subcategory, {
    ...opts,
    limit: settings.gifsToLoad
  })
}

function getGifById(id) {
  return client.gifByID(id)
}

function search(opts = { q: '' }) {
  return client.search('gifs', { ...opts, limit: settings.gifsToLoad })
}

export default {
  search,
  getGifById,
  getTrending,
  getCategories,
  getSubcategoriesByCategory,
  getSubcategoryContent
}
