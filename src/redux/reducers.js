import { combineReducers } from 'redux'

import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE, MODIFY_BRICK } from './action-types'

const initBrickTree = { blocks: [] }

const brickTree = (state = initBrickTree, action) => {
    switch (action.type) {
        case ADD_BRICK:
            state.blocks = [...state.blocks, action.data]
            state.childs = [...state.childs, action.data.id]
            return state
        case DEL_BRICK:
            return state.blocks.filter((brick, index) => index !== action.data)
        case GET_BRICK_TREE:
            return action.data
        case MODIFY_BRICK:
            let index = state.blocks.length
            state.blocks[index] = action.data
            return state    
        default:
            return state
    }
}

const dialog = (state = { visible: false, type: '' }, action) => {
    switch (action.type) {
        case ADD_BRICK:
            return {visible: true, type: action.data.name}
        case MODIFY_BRICK:
            return {visible: false, type: state.type}
        default:
            return state
    }
}

export default combineReducers({
    brickTree,
    dialog
})