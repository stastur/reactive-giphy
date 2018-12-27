import GphApiClient from 'giphy-js-sdk-core'
import { key } from './key'

class GiphyService {
  constructor(key, props) {
    const { type, limit } = props
    this.client = new GphApiClient(key)
    this.type = type
    this.limit = limit
  }

  getTrending = (opts = {}) => {
    return this.client.trending(this.type, { limit: this.limit, ...opts })
  }

  getCategories = () => {
    return this.client.categoriesForGifs({ limit: 500 })
  }

  getSubcategoriesByCategory = (category, opts = { limit: 500 }) => {
    return this.client.subCategoriesForGifs(category, {
      limit: this.limit,
      ...opts
    })
  }

  getSubcategoryContent = (category, subcategory, opts = {}) => {
    return this.client.gifsByCategories(category, subcategory, {
      limit: this.limit,
      ...opts
    })
  }

  getGifById = id => {
    return this.client.gifByID(id)
  }

  search = (opts = { q: '' }) => {
    return this.client.search(this.type, { limit: this.limit, ...opts })
  }
}

const giphyService = new GiphyService(key, {
  limit: 50,
  type: 'gifs'
})

export { giphyService }
