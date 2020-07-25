import produce from 'immer'
import { handleActions as raHandleActions } from 'redux-actions'

export default (actions: any, state: any) => raHandleActions(
  Object.keys(actions).reduce((acc: any, key: string) => {
    acc[key] = produce(actions[key])

    return acc
  }, {}),
  state
)
