require('es6-promise').polyfill()

import axios from 'axios'

let APIv1 = axios.create({
  baseURL: `${process.env.API_HOST}`
})

export { APIv1 }
