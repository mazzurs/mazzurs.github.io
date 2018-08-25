import { applyMiddleware, compose, createStore } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'

const config = {
  key: 'primary',
  blacklist: ['temp'],
  storage: localForage
}

let reducer = persistCombineReducers(config, reducers)

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(...[thunk])
  )
)

export default store
