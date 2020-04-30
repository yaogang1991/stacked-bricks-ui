import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { bricks } from './reducers'

export default createStore(
    bricks,
    composeWithDevTools(applyMiddleware(thunk))
)