import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import statesReducer from "./states"
import singleStateReducer from "./singleState"

const reducer = combineReducers({
  states: statesReducer,
  singleState: singleStateReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore (reducer, middleware)

export default store
