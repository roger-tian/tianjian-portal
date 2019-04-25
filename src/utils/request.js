import axios from 'axios'
// import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'

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
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function postFormData (url, file) {
  return new Promise((resolve, reject) => {
    axios.post(url, file,
      {headers: {'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryGYbwbQBigH1yQRaW'}})
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
