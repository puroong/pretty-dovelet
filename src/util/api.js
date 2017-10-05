require('es6-promise').polyfill()

import axios from 'axios'

let APIv1 = axios.create({
  baseURL: `${process.env.API_HOST}`,
  headers: {
    'set-cookie': `PHPSESSID=${localStorage.getItem('PHPSESSID')}, member_id=${localStorage.getItem('member_id')}, member_passwd=${localStorage.getItem('member_passwd')}, member_sid=${localStorage.getItem('member_sid')}`
  }
})

export { APIv1 }
