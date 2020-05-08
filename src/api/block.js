import request from './request'

export const getBlocks = (sandBoxId) => {
  return request({
    url: 'block/' + sandBoxId,
    method: 'get'
  })
}

export const insertBlock = (data) => {
  return request({
    url: 'block',
    method: 'post',
    data
  })
}

export const updateBlock = (data) => {
  return request({
    url: 'block',
    method: 'put',
    data
  })
}