import axios from 'axios'

export const Client = axios.create({
  baseURL: 'https://balldontlie.io/api/v1/',
})
