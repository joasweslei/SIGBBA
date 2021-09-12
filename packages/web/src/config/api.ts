import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localyarnhost:3333'
})

export default api
