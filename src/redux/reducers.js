import { combineReducers } from 'redux'

import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE, SUBMIT_BRICK, EDIT_BRICK, MODIFY_BRICK } from './action-types'

const initBrickTree = { blocks: [] }

const brickTree = (state = initBrickTree, action) => {
    switch (action.type) {
        case ADD_BRICK:
            state.blocks = [...state.blocks, action.data]
            state.childs = [...state.childs, action.data.id]
            return state
        case DEL_BRICK:
            let newChildren = state.childs.filter((childId, index) => childId !== action.data)
            let newBlocks = state.blocks.filter((block, index) => block.id !== action.data)
            state.childs = newChildren
            state.blocks = newBlocks
            return state
        case GET_BRICK_TREE:
            return action.data
        case SUBMIT_BRICK:
            let index = state.childs.indexOf(action.data.id)
            state.blocks[index] = action.data
            return state    
        default:
            return state
    }
}

const dialog = (state = { visible: false, type: '', id: '' }, action) => {
    switch (action.type) {
        case ADD_BRICK:
        case MODIFY_BRICK:
            let newState = {visible: true, type: action.data.name, id: action.data.id}
            console.log('ADD_BRICK state: ' + JSON.stringify(newState))
            return newState
        case SUBMIT_BRICK:
        case DEL_BRICK:
            return {visible: false}
        default:
            return state
    }
}

const edit = (state = false, action) => {
    switch (action.type) {
        case EDIT_BRICK:
            return !state
        default:
            return state
    }
}

export default combineReducers({
    brickTree,
    dialog,
    edit
})