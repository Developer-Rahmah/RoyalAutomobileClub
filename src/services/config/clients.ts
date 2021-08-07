import axios from 'axios'

export const Client = axios.create({
  baseURL: 'https://nattech.online/racj/api_docs/',
})
