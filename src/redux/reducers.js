import { ADD_BRICK, DEL_BRICK } from './action-types'

const initBricks = [
    {}
]

export const bricks = (state = initBricks, action) => {
    switch (action.type) {
        case ADD_BRICK:
            return [...state, action.data]
        case DEL_BRICK:
            return state.filter((brick, index) => index !== action.data)
        default:
            return state
    }
}