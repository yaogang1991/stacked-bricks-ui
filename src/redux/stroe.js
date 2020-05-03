import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { brickTree } from './reducers'

export default createStore(
    brickTree,
    composeWithDevTools(applyMiddleware(thunk))
)