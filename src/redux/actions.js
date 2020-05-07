import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE } from './action-types'
import { getBlocks } from '../api/block'

export const addBrick = (brick) => ({ type: ADD_BRICK, data: brick })

export const delBrick = (index) => ({ type: DEL_BRICK, data: index })

const receiveBrickTree = (brickTree) => ({ type: GET_BRICK_TREE, data: brickTree })
export const getBrickTree = (sandboxId) => {
  return (dispatch) => {
    getBlocks(sandboxId).then(res => {
      dispatch(receiveBrickTree(res))
    })
  }
}