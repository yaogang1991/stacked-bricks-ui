import request from './request'

export const getBlocks = (sandBoxId) => {
  return request({
    url: 'block/' + sandBoxId,
    method: 'get'
  })
}