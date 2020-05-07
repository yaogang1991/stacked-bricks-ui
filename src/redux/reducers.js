import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE } from './action-types'

const initBrickTree = { blocks: [] }

export const brickTree = (state = initBrickTree, action) => {
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