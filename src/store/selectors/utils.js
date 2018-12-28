import isEqual from 'lodash.isequal'
import { defaultMemoize, createSelectorCreator } from 'reselect'

const deepEqualityCheck = (a, b) => isEqual(a, b)

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  deepEqualityCheck
)

export { deepEqualityCheck, createDeepEqualSelector }
