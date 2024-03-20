import axios from 'axios'

// myAxios.interceptors.response.use((config) => {
//   console.log('test')
//   return config
// })

const API_BASE_URL = 'http://localhost:3004'
// 创建一个axios实例
export const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
