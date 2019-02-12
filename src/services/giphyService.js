import GphApiClient from 'giphy-js-sdk-core'

import { key } from './key'

class GiphyService {
  constructor(apiKey, props) {
    const { type, limit } = props
    this.client = new GphApiClient(key)
    this.type = type
    this.limit = limit
  }

  getTrending = (opts = {}) =>
    this.client.trending(this.type, { limit: this.limit, ...opts })

  getCategories = () => this.client.categoriesForGifs({ limit: 500 })

  getSubcategoriesByCategory = (category, opts = { limit: 500 }) =>
    this.client.subCategoriesForGifs(category, {
      limit: this.limit,
      ...opts
    })

  getSubcategoryContent = (category, subcategory, opts = {}) =>
    this.client.gifsByCategories(category, subcategory, {
      limit: this.limit,
      ...opts
    })

  getGifById = id => this.client.gifByID(id)

  search = (opts = { q: '' }) =>
    this.client.search(this.type, { limit: this.limit, ...opts })
}

const giphyService = new GiphyService(key, {
  limit: 50,
  type: 'gifs'
})

export { giphyService }
