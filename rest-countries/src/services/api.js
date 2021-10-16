import axios from 'axios'

const api = axios.create({
  baseURL: 'https://restcountries.com/'
})

export default api
