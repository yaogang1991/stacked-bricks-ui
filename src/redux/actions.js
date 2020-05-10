import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE, SUBMIT_BRICK, EDIT_BRICK, MODIFY_BRICK } from './action-types'
import { getBlocks, insertBlock, updateBlock } from '../api/block'

const receiveAddBrick = (data) => ({ type: ADD_BRICK, data })
export const addBrick = (data) => {
  return (dispatch) => {
    insertBlock(data).then(res => {
      dispatch(receiveAddBrick(res))
    })
  }
}

const receiveSubmitBrick = (data) => ({ type: SUBMIT_BRICK, data })
export const submitBrick = (data) => {
  return (dispatch) => {
    updateBlock(data).then(res => {
      dispatch(receiveSubmitBrick(res))
    })
  }
}

export const modifyBrick = (data) => ({ type: MODIFY_BRICK, data })

export const delBrick = (data) => ({ type: DEL_BRICK, data })

const receiveBrickTree = (data) => ({ type: GET_BRICK_TREE, data })
export const getBrickTree = (sandboxId) => {
  return (dispatch) => {
    getBlocks(sandboxId).then(res => {
      dispatch(receiveBrickTree(res))
    })
  }
}

export const editBrick = () => ({ type: EDIT_BRICK })