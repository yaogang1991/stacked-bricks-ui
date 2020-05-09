import { ADD_BRICK, DEL_BRICK, GET_BRICK_TREE, MODIFY_BRICK } from './action-types'
import { getBlocks, insertBlock, updateBlock } from '../api/block'

const receiveAddBrick = (data) => ({ type: ADD_BRICK, data })
export const addBrick = (data) => {
  return (dispatch) => {
    insertBlock(data).then(res => {
      dispatch(receiveAddBrick(res))
    })
  }
}
// export const addBrick = (data) => ({ type: ADD_BRICK, data })

const receiveModifyBrick = (data) => ({ type: MODIFY_BRICK, data })
export const modifyBrick = (data) => {
  return (dispatch) => {
    updateBlock(data).then(res => {
      dispatch(receiveModifyBrick(res))
    })
  }
}
// export const modifyBrick = (data) => ({ type: MODIFY_BRICK, data })


export const delBrick = (data) => ({ type: DEL_BRICK, data })

const receiveBrickTree = (data) => ({ type: GET_BRICK_TREE, data })
export const getBrickTree = (sandboxId) => {
  return (dispatch) => {
    getBlocks(sandboxId).then(res => {
      dispatch(receiveBrickTree(res))
    })
  }
}

// export const clickMenu = (data) => ({ type: CLICK_MENU, data })
// export const submit = (data) => ({ type: SUMBIT, data})