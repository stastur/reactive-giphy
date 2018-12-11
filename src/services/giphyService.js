import GphApiClient from 'giphy-js-sdk-core'
import key from './key'
import settings from '../settings'

const client = new GphApiClient(key)

async function getTrending(type = 'gifs', opts = {}) {
  return await client.trending(type, { ...opts, limit: settings.gifsToLoad })
}

async function getCategories(opts = { limit: 500 }) {
  return await client.categoriesForGifs(opts)
}

async function getSubcategoriesByCategory(category, opts = { limit: 500 }) {
  return await client.subCategoriesForGifs(category, {
    ...opts,
    limit: settings.gifsToLoad
  })
}

async function getSubcategoryContent(category, subcategory, opts = {}) {
  return await client.gifsByCategories(category, subcategory, {
    ...opts,
    limit: settings.gifsToLoad
  })
}

async function getGifById(id) {
  return await client.gifByID(id)
}

async function search(opts = { q: '' }) {
  return await client.search('gifs', { ...opts, limit: settings.gifsToLoad })
}

export default {
  search,
  getGifById,
  getTrending,
  getCategories,
  getSubcategoriesByCategory,
  getSubcategoryContent
}
