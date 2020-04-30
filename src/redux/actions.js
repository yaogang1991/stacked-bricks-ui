import { ADD_BRICK, DEL_BRICK } from './action-types'

export const addBrick = (brick) => ({ type: ADD_BRICK, data: brick })

export const delBrick = (index) => ({ type: DEL_BRICK, data: index })