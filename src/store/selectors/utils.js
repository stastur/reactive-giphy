import { defaultMemoize, createSelectorCreator } from 'reselect'
import isEqual from 'lodash.isequal'

const deepEqualityCheck = (a, b) => isEqual(a, b)

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  deepEqualityCheck
)

export { deepEqualityCheck, createDeepEqualSelector }
