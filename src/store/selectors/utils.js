import { defaultMemoize, createSelectorCreator } from 'reselect'

const deepEqualityCheck = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  deepEqualityCheck
)

export { deepEqualityCheck, createDeepEqualSelector }
