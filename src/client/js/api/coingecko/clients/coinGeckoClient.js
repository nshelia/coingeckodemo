import axios from 'axios'
import qs from 'qs'

export const HTTP_NO_CONTENT = 204
export const HTTP_UNAUTHORIZED = 401
export const HTTP_FORBIDDEN = 403
export const HTTP_SERVICE_UNAVAILABLE = 503

export const baseURL = process.env.SERVICE_URL

async function transformOptions(options = {}, { formData }) {
  const headers = {
    Accept: 'application/json'
  }

  return Object.assign({}, {
    headers,
    paramsSerializer: qs.stringify,
    baseURL,
    data: formData
  }, { ...options, params: { ...options.params } })
}

export async function request(options, requestParams) {
  const response = await axios(await transformOptions(options, requestParams))

  switch (response.status) {
    case HTTP_NO_CONTENT:
      return null
    default:
      return response.data
  }
}

const simpleRequest = method => async (url, params = {}, data, requestParams = {}) => {
  return request({ method, url, params, data, timeout: 10000 }, requestParams)
}

export const get = simpleRequest('get')
export const post = simpleRequest('post')
export const del = simpleRequest('delete')
export const patch = simpleRequest('patch')
export const put = simpleRequest('put')

export default {
  get,
  post,
  patch,
  put,
  del,
  baseURL,
  HTTP_NO_CONTENT,
  HTTP_UNAUTHORIZED,
  HTTP_FORBIDDEN
}
