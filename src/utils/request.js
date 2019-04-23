import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://127.0.0.1:8080'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, data = {}) {
  console.log('33333333333')
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
