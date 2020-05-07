import axios from 'axios'
import { BASE_URL } from '../utils/constant'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service