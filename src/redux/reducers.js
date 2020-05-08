import { combineReducers } from 'redux'

import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE, CLICK_MENU } from './action-types'

const initBrickTree = { blocks: [] }

const brickTree = (state = initBrickTree, action) => {
    switch (action.type) {
        case ADD_BRICK:
            return [...state.blocks, action.data]
        case DEL_BRICK:
            return state.blocks.filter((brick, index) => index !== action.data)
        case GET_BRICK_TREE:
            return action.data
        default:
            return state
    }
}

const dialog = (state = { visible: false, type: '' }, action) => {
    switch (action.type) {
        case CLICK_MENU:
            console.log('dialog: ' + action.data)
            return {visible: true, type: action.data}
        default:
            console.log('dialog: ' + state)
            return state
    }
}

export default combineReducers({
    brickTree,
    dialog
})