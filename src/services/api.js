import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c0a299769f36cf6b9ab8ecfd90c56101',
    language: 'pt-br',
    page: 1,
  },
})

export default api
