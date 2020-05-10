import request from './request'

export const getBlocks = (data) => {
  return request({
    url: 'block/' + data,
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

export const deleteBlock = (data) => {
  return request({
    url: 'block/' + data,
    method: 'delete'
  })
}